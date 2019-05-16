/* eslint-env browser */
import $ from 'jquery';

import FeatureDetect from '../feature-detect';
import changeLocationHash from '../change-location-hash';
import currentScreenSize from '../screen-sizes';

const Config = {
  Defaults: {
    container: 'body', // Needed to avoid being drawn under the nav carousel which is fixed in the body
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

  wireEventHandlers() {
    const { $trigger, options } = this;

    $trigger.on('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!FeatureDetect.cssSupports('display', 'flex') || currentScreenSize().name === 'xs') {
        // Scroll the page to more links
        $('html, body').animate({
          scrollTop: $(options.target).offset().top,
        }, 'slow');
      }

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
    }

    // Click away to dismiss
    $('html').on('click.popoverDismiss', (e) => {
      // if clicking anywhere other than the popover itself
      if ($(e.target).closest('.popover').length === 0 && $(e.target).closest('.use-popover').length === 0) {
        $trigger.popover('hide');
      }
    });

    // Back to top link
    $(options.target).on('click', '.back-to-top-link', (e) => {
      e.preventDefault();
      e.stopPropagation();

      $trigger.popover('hide');
      $('html, body').animate({ scrollTop: 0 }, 'slow');

      return false;
    });
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
