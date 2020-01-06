/* eslint-env browser */
import $ from 'jquery';

import currentScreenSize, {allScreenSizes} from './screen-sizes';

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

  onScreenResize(e, force) {
    // Which stop-point are we on?
    const screenConfig = currentScreenSize();

    // Early exit if the width is the same. xs is variable width so can't be clever :(
    if (!force && screenConfig.name !== 'xs' && screenConfig.name === this.lastScreenConfig) return;

    this.options.container.trigger(this.options.eventName, [screenConfig]);

    this.lastScreenConfig = screenConfig.name;
  }

  reflow() {
    this.onScreenResize({}, true);
  }

  wireEventHandlers() {
    // Get all possible screen sizes from screen-sizes.js
    // register an event listener on every MediaQueryList
    const allSizes = allScreenSizes();
    for (var i = 0; i < allSizes.length; i++) {
      console.log(allSizes[i]);
      let name = allSizes[i].name;
      let config = allSizes[i];
      allSizes[i].matcher().addListener(ev => {
        console.log(name + " fired");
        this.options.container.trigger(this.options.eventName, [config]);
        this.lastScreenConfig = name;
      });
    }

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
