/* eslint-env browser */
import $ from 'jquery';

import currentScreenSize from '../screen-sizes';

const Config = {
  Defaults: {
    target: '.id7-masthead',
    className: 'search-expanded',
  },
};

class ExpandingSearchBar {
  constructor(options) {
    const o = $.extend({}, Config.Defaults, options);
    this.$trigger = o.trigger;
    this.options = o;

    this.wireEventHandlers();
  }

  wireEventHandlers() {
    const { $trigger, options } = this;
    const $target = $(options.target);

    const expand = $.proxy(this.expand, this);
    const contract = $.proxy(this.contract, this);
    const onReflow = $.proxy(this.onReflow, this);

    // Expand when the trigger is clicked or the search box is focused
    $trigger.on('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!this.isExpanded()) {
        this.expand();

        // Wait for the animation to complete before focusing to avoid the page
        // shifting to see the focus
        setTimeout(() => $target.find('input[type="search"]').first().focus(), 300);
      }

      return false;
    });

    // Expand faster
    if ('ontouchstart' in document.documentElement && 'addEventListener' in document) {
      $trigger.each((i, el) => el.addEventListener('touchstart', () => {
        if (!this.isExpanded()) {
          this.expand();

          // Wait for the animation to complete before focusing to avoid the page
          // shifting to see the focus
          setTimeout(() => $target.find('input[type="search"]').first().focus(), 300);
        }
      }, { passive: true }));
    }

    $target.on('focus input', 'input[type="search"]', expand);

    // Contract when the search box is blurred or when there's a reflow
    $target.on('blur', 'input[type="search"]', contract);

    // When we reflow, always contract
    $(window).on('id7:reflow', onReflow);

    // If the document is already loaded this won't be fired as expected, so fire it manually
    if (document.readyState === 'complete' && typeof $(window).data('id7.reflow') !== 'undefined') {
      // Call reflow immediately
      this.onReflow({}, currentScreenSize());
    }
  }

  isExpanded() {
    const { target, className } = this.options;

    $(target).hasClass(className);
  }

  expand() {
    const { target, className } = this.options;

    $(target).addClass(className);
  }

  contract() {
    const { target, className } = this.options;

    $(target).removeClass(className);
  }

  onReflow(e, screenConfig) {
    if (this.previousScreenConfigName === undefined || screenConfig.name !== this.previousScreenConfigName || screenConfig.name !== 'xs') {
      this.contract();
    }

    this.previousScreenConfigName = screenConfig.name;
  }
}

$.fn.expandingSearchBar = function initPlugin(o = {}) {
  function attach(i, element) {
    const $trigger = $(element);
    const expandingSearchBar = new ExpandingSearchBar($.extend({}, $trigger.data(), o, {
      trigger: $trigger,
    }));

    $trigger.data('id7.expanding-search-bar', expandingSearchBar);
  }

  return this.each(attach);
};

$(() => {
  $('[data-toggle="id7:expanding-search-bar"]').expandingSearchBar();
});
