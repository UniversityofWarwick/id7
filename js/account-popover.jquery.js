/* eslint-env browser */
import $ from 'jquery';
import log from 'loglevel';
import { escape } from './html-utils';

import currentScreenSize from './screen-sizes';

const Config = {
  Templates: {
    /**
     * @return {string}
     */
    Popover(o) {
      return `<div class="account-info">
        <iframe src="${escape(o.useMwIframe ? `${o.iframelink}?embedded` : o.legacyIframeLink)}" 
                scrolling="auto" frameborder="0" allowtransparency="true" 
                seamless 
                sandbox="allow-same-origin allow-scripts allow-top-navigation allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
        </div>
        <div class="actions">
          <div class="btn-group btn-group-justified">
            <div class="btn-group sign-out">
              <a href="${escape(o.logoutlink)}" class="btn btn-default">Sign out</a>
            </div>
          </div>
        </div>`;
    },
    /**
     * @return {string}
     */
    Action(o) {
      return `<div class="btn-group">
        <a href="${escape(o.href)}" 
           title="${escape(o.tooltip)}" 
           class="btn btn-default ${escape(o.classes)}">${escape(o.title)}</a>
        </div>`;
    },
  },
  Defaults: {
    container: false,
    iframelink: 'https://my.warwick.ac.uk/',
    notificationsApi: 'https://my.warwick.ac.uk/api/id7/notifications/unreads',
    legacyIframeLink: 'https://websignon.warwick.ac.uk/origin/account/popover',
    showNotificationsBadge: true,
    useMwIframe: true,
    maxNumberNotifications: 99,
    template: `
      <div class="popover my-warwick hybrid-overlay">
        <div class="arrow"></div>
        <div class="popover-inner">
            <div class="popover-content"><p></p></div>
        </div>
      </div>`.trim(),
  },
  MessagePrefix: 'message.id7.account-popover.',
};

function fetchNotificationData(endpoint, callback, errorHandler) {
  // TODO replace with isomorphic-fetch
  $.ajax({
    url: endpoint,
    success: callback,
    error: errorHandler,
    dataType: 'json',
    xhrFields: {
      withCredentials: true,
    },
  });
}

/**
 * Display a popover with account information
 */
class AccountPopover {
  constructor(options) {
    const o = $.extend({}, Config.Defaults, options);
    this.$trigger = o.trigger;
    this.options = o;

    if (typeof this.options.logoutlink === 'undefined') {
      this.options.logoutlink = this.$trigger.attr('href');
    }

    this.wireEventHandlers();
  }

  createPopover($trigger) {
    const opts = {
      container: this.options.container,
      content: Config.Templates.Popover(this.options),
      template: this.options.template,
      html: true,
      placement: 'bottom',
      title: 'Account information',
      trigger: 'manual',
    };
    $trigger.popover(opts);
  }

  static isBlacklistedDevice() {
    const { userAgent } = navigator;
    // ref https://stackoverflow.com/questions/45171905/
    return userAgent.indexOf('iPad') !== -1;
  }

  static isMwFeatureAvailable() {
    return !AccountPopover.isBlacklistedDevice();
  }

  dismissPopover() {
    this.$trigger.attr('aria-expanded', 'false');
    this.$trigger.popover('hide');
    this.$trigger.data('bs.popover').inState.click = false;
  }

  wireEventHandlers() {
    const { $trigger } = this;
    const that = this;
    const iframeLink = this.options.iframelink;

    if (this.options.name) {
      let badgeHtml = `<span class="fa-stack id7-notifications-badge">
        <i class="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
        <strong class="fa-stack-1x fa fa-spinner fa-spin brand-text counter-value" title="Notifications"></strong>
        <span class="sr-only">notifications</span>
      </span>`;
      if (!AccountPopover.isMwFeatureAvailable() || !this.options.showNotificationsBadge) {
        badgeHtml = '';
      }
      $trigger.html(`${this.options.name}${badgeHtml}<span class="caret"></span>`);
    }

    const $badge = $trigger.find('.id7-notifications-badge');
    $trigger.on('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      $trigger.popover('toggle');
      $badge.find('.counter-value:not(.fa-exclamation-triangle):not(.fa-spinner)').text('0');
      that.options.iframelink = iframeLink;
      $trigger.data('bs.popover').options.content = Config.Templates.Popover(that.options);
      $badge.removeClass('animating');
      $trigger.attr('aria-expanded', 'true');
      return false;
    });
    this.createPopover($trigger);

    if (this.options.showNotificationsBadge && AccountPopover.isMwFeatureAvailable()) {
      fetchNotificationData(this.options.notificationsApi, (data) => {
        const unreads = Math.min(data.unreads, 99);
        $badge.find('.counter-value')
          .removeClass('fa-spinner')
          .removeClass('fa-spin')
          .addClass('slideInDown')
          .text(unreads);

        if (unreads > 0) {
          $badge.fadeIn().addClass('animating');
          that.options.iframelink = `${iframeLink}alerts`;
          $trigger.data('bs.popover').options.content = Config.Templates.Popover(that.options);
        }
      }, () => {
        $badge.find('.counter-value').removeClass('fa-spinner')
          .removeClass('fa-spin').addClass('fa-exclamation-triangle');
        $badge.attr('title', 'There was a problem communicating with the MyWarwick notifications service');
      });
    }

    // Click away to dismiss
    $('html').on('click.popoverDismiss', (e) => {
      const $target = $(e.target);
      if ($target.closest('.popover').length === 0 && $target.closest('.use-popover').length === 0 && $target.closest($trigger).length === 0) {
        that.dismissPopover();
      }
    });

    // Smaller screens get the old popover
    const onReflow = $.proxy((e, screenConfig) => {
      this.options.useMwIframe = this.options.useMwIframe && screenConfig.name !== 'xs'
        && $(window).height() >= 512 && AccountPopover.isMwFeatureAvailable();

      $trigger.find('.id7-notifications-badge').toggle(this.options.useMwIframe);

      if ($trigger.data('bs.popover') !== undefined) {
        $trigger.data('bs.popover').options.content = Config.Templates.Popover(this.options);

        const toAdd = this.options.useMwIframe && AccountPopover.isMwFeatureAvailable() ? 'my-warwick' : 'account-information';
        const $bsPopover = $trigger.data('bs.popover');
        $bsPopover.tip().removeClass('account-information', 'my-warwick').addClass(toAdd);

        // trigger a reposition if the popover is open
        // Note that this ends up reloading the iFrame, so remove the loaded class
        if ($bsPopover.tip().hasClass('in')) {
          $trigger.popover('show');
          $trigger.attr('aria-expanded', 'true');
          $trigger.next('.popover').removeClass('loading');
        }
      }
    }, this);

    $(window).on('id7:reflow', onReflow);

    // If the document is already loaded this won't be fired as expected, so fire it manually
    if (document.readyState === 'complete' && typeof $(window).data('id7.reflow') !== 'undefined') {
      // Call reflow immediately
      onReflow({}, currentScreenSize());
    }
  }

  onMessage(messageType, data) {
    const $popover = this.$trigger.next('.popover');

    switch (messageType) {
      case 'addAction': {
        const d = { ...data, classes: '', tooltip: '' };
        $popover.find('.actions > .btn-group').prepend(Config.Templates.Action(d));
        $popover.find('.actions > .btn-group > .btn-group').first().find('[title]:not([title=""])').tooltip({
          placement: 'bottom',
        });
        break;
      }
      case 'resizeIframe':
        $popover.find('.account-info iframe').height(data.height);
        break;
      case 'layoutDidMount':
        $popover.addClass('loaded');
        this.updateColourTheme(data.colourTheme);
        break;
      case 'colourThemeChange':
        this.updateColourTheme(data.colourTheme);
        break;
      case 'signedOut': {
        const { loginlink } = this.options;
        $popover.find('.actions > .btn-group > .sign-out')
          .replaceWith(Config.Templates.Action({
            href: loginlink,
            classes: 'sign-in',
            title: 'Sign in',
            tooltip: '',
          }));
        break;
      }
      case 'close':
        this.dismissPopover();
        this.$trigger.focus();
        break;
      default:
        log.error(`Unexpected message type: ${messageType}`);
    }
  }

  updateColourTheme(colourTheme) {
    this.$trigger.next('.popover')
      .removeClass((i, className) => $.grep(className.split(' '), (singleClass) => singleClass.indexOf('theme-') === 0).join(' '))
      .addClass(`theme-${colourTheme}`);
  }
}

$.fn.accountPopover = function accountPopoverPlugin(options) {
  const o = options || {};

  function attach(i, element) {
    const $trigger = $(element);
    const accountPopover = new AccountPopover($.extend({}, $trigger.data(), o, {
      trigger: $trigger,
    }));

    $trigger.attr('aria-expanded', 'false');
    $trigger.data('id7.account-popover', accountPopover);
  }

  return this.each(attach);
};

$(() => {
  $('[data-toggle="id7:account-popover"]').accountPopover();

  // Listen to relevant messages and send them through
  $(window).on('message', (e) => {
    const { origin } = e.originalEvent;

    try {
      const unparsedData = e.originalEvent.data;
      if (typeof unparsedData !== 'string' || !unparsedData.startsWith('{')) return;
      const data = JSON.parse(unparsedData);
      if (data.type && data.type.indexOf(Config.MessagePrefix) === 0) {
        const messageType = data.type.substring(Config.MessagePrefix.length);

        // Send the message out to each instance
        $('[data-toggle="id7:account-popover"]').each(function onTogglePopover() {
          const $trigger = $(this);
          const accountPopover = $trigger.data('id7.account-popover');

          if (accountPopover.options.iframelink.indexOf(origin) !== 0
            && accountPopover.options.legacyIframeLink.indexOf(origin) !== 0) {
            log.error(`Ignored message of type ${messageType} because origin ${origin} didn't match iframe link ${accountPopover.options.iframelink}`);
          } else {
            accountPopover.onMessage(messageType, data);
          }
        });
      }
    } catch (error) {
      log.error('Error parsing message data', error);
    }
  });
});
