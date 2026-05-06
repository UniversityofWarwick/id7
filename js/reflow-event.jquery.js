/* eslint-env browser */
import $ from 'jquery';

import currentScreenSize, { allScreenSizes } from './screen-sizes';

const Config = {
  Defaults: {
    eventName: 'id7:reflow',
  },
};

class ReflowEvent {
  constructor(options) {
    this.options = $.extend({}, Config.Defaults, options);

    this.onScreenResize(); // First time run on init
    this.wireEventHandlers();
  }

  onScreenResize() {
    const screenConfig = currentScreenSize();

    this.options.container.trigger(this.options.eventName, [screenConfig]);
  }

  reflow() {
    if (currentScreenSize().name === 'xs') {
      $(window).on('resize.id7.reflow.onScreenResize', $.proxy(this.onScreenResize, this));
    } else {
      $(window).off('resize.id7.reflow.onScreenResize');
    }

    this.onScreenResize();
  }

  wireEventHandlers() {
    // Get all possible screen sizes from screen-sizes.js
    // register an event listener on every MediaQueryList
    const allSizes = allScreenSizes();
    allSizes.forEach((config) => {
      const { matcher, name } = config;
      matcher().addListener((e) => {
        if (!e.matches) return;
        this.options.container.trigger(this.options.eventName, [config]);
        if (name === 'xs') {
          $(window).on('resize.id7.reflow.onScreenResize', $.proxy(this.onScreenResize, this));
        } else {
          $(window).off('resize.id7.reflow.onScreenResize');
        }
      });
    });

    // ID-30 on load (i.e. after fonts have loaded) run this, forcing a resize
    if (document.readyState === 'complete') {
      this.reflow();
    } else {
      $(window).on('load', $.proxy(this.reflow, this));
    }
  }
}

$.fn.reflow = function reflowPlugin(option) {
  function attach(i, element) {
    const $el = $(element);
    let data = $el.data('id7.reflow');
    const options = $.extend({}, $el.data(), { container: $el }, typeof option === 'object' && option);

    if (!data) $el.data('id7.reflow', (data = new ReflowEvent(options)));

    if (option === 'reflow' || option === 'force' || option === true) data.reflow();
  }

  return this.each(attach);
};

// Initialise on dom ready
$(() => $(window).reflow());
