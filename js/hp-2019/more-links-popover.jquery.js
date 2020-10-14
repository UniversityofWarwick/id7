/* eslint-env browser */
import $ from 'jquery';

import FeatureDetect from '../feature-detect';
import changeLocationHash from '../change-location-hash';
import currentScreenSize from '../screen-sizes';

const Config = {
  Defaults: {
    container: '.id7-logo-row', // Needed to avoid being drawn under the nav carousel which is fixed in the body
    template: `
      <div class="popover megamenu-links">
        <div class="arrow"></div>
        <div class="popover-inner">
          <div class="popover-content container-fluid"></div>
        </div>
      </div>`.trim(),
  },
};

/**
 * Display a megamenu popover
 */
class MoreLinksPopover {
  constructor(options) {
    const o = $.extend({}, Config.Defaults, options);
    this.$trigger = o.trigger;
    this.options = o;

    this.wireEventHandlers();
  }

  hidePopover() {
    this.$trigger.popover('hide');
    this.$trigger.attr('aria-expanded', 'false');
    this.$trigger.data('bs.popover').inState.click = false;
  }

  wireEventHandlers() {
    const { $trigger, options } = this;

    const isPopoverEnabled = FeatureDetect.cssSupports('display', 'flex');

    const onReflow = (_ignored_, screenConfig) => {
      // Handle xs -> xs transitions
      if (this.lastScreenConfigName === screenConfig.name) return;
      this.lastScreenConfigName = screenConfig.name;

      if (isPopoverEnabled && screenConfig.name !== 'xs') {
        $trigger.on('click.id7.homepage', (e) => {
          // Prevent the default behaviour because we're opening a popover
          e.preventDefault();
          return false;
        }).popover({
          container: options.container,
          content: $(options.target).html(),
          template: options.template,
          html: true,
          placement: 'bottom',
          title: 'More links',
          trigger: 'click',
        }).on('show.bs.popover', () => {
          $trigger.data('previous-hash', window.location.hash);
          $trigger.attr('aria-expanded', 'true');
          changeLocationHash(options.target);
        }).on('hide.bs.popover', () => {
          if ($trigger.data('previous-hash') && $trigger.data('previous-hash') !== '#more-links') {
            changeLocationHash($trigger.data('previous-hash'));
          } else {
            changeLocationHash('');
          }
        });

        if ($trigger.is(':visible') && window.location.hash === options.target) {
          $trigger.popover('show');
          $trigger.attr('aria-expanded', 'true');
        }

        const $html = $('html');

        // Click away to dismiss
        $html.on('click.id7.homepage.popoverDismiss', (e) => {
          // if clicking anywhere other than the popover itself
          if ($(e.target).closest('.popover').length === 0 && $(e.target).closest('.use-more-links-popover').length === 0) {
            this.hidePopover();
          }
        });

        $html.on('keydown', (event) => {
          if (event.key === 'Escape') {
            this.hidePopover();
          }
        });

        // Back to top link
        $(options.target).on('click.id7.homepage', '.back-to-top-link', () => $trigger.popover('hide'));
      } else {
        $trigger.off('click.id7.homepage').popover('destroy');
        $trigger.attr('aria-expanded', 'false');
        $('html').off('click.id7.homepage.popoverDismiss');
        $(options.target).off('click.id7.homepage', '.back-to-top-link');
      }
    };

    $(window).on('id7:reflow', onReflow);

    // If the document is already loaded this won't be fired as expected, so fire it manually
    if (document.readyState === 'complete' && typeof $(window).data('id7.reflow') !== 'undefined') {
      // Call reflow immediately
      onReflow({}, currentScreenSize());
    }
  }
}

$.fn.moreLinksPopover = function initPlugin(o = {}) {
  function attach(i, element) {
    const $trigger = $(element);
    const moreLinksPopover = new MoreLinksPopover($.extend({}, $trigger.data(), o, {
      trigger: $trigger,
    }));

    $trigger.data('id7.more-links-popover', moreLinksPopover);
  }

  return this.each(attach);
};

$(() => {
  $('[data-toggle="id7:megamenu-popover"]').moreLinksPopover();
});
