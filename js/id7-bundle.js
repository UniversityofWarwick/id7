/* eslint-env browser */
import $ from 'jquery';
import _ from 'lodash-es';
import Modernizr from 'modernizr';
import Headroom from 'headroom.js';

// Expose globals for backwards compatibility
window.jQuery = $;
window._ = _;
window.Modernizr = Modernizr;

// jQuery plugins/modifiers
require('bootstrap/js/transition');
require('bootstrap/js/alert');
require('bootstrap/js/button');
require('bootstrap/js/carousel');
require('bootstrap/js/collapse');
require('bootstrap/js/dropdown');
require('bootstrap/js/modal');

// ID-93 https://github.com/twbs/bootstrap/issues/16148
// ID7's .id7-fixed-width-container is position: relative, so we need to inject the backdrop at
// the same level as the modal, rather than the default which is to append to the <body>
// 10 Hail Mary's for this

const originalBackdrop = $.fn.modal.Constructor.prototype.backdrop;
$.fn.modal.Constructor.prototype.backdrop = function fixBackdropParent(callback) {
  if (callback) {
    const callbackWithFix = () => {
      const { $element, $backdrop } = this;
      const $container = $element.closest('.id7-fixed-width-container');

      if ($backdrop && $container.length === 1) {
        $backdrop.appendTo($container);
      }

      callback();
    };

    originalBackdrop.call(this, callbackWithFix);
  } else {
    originalBackdrop.call(this, callback);
  }
};

require('bootstrap/js/tooltip');
require('bootstrap/js/popover');

// ID-285 Allow iframes in popovers https://getbootstrap.com/docs/3.4/javascript/#js-sanitizer
const defaultWhitelist = $.fn.tooltip.Constructor.DEFAULTS.whiteList;
defaultWhitelist.iframe = ['src', 'scrolling', 'frameborder', 'allowtransparency', 'seamless', 'sandbox'];

require('bootstrap/js/scrollspy');
require('bootstrap/js/tab');
require('bootstrap/js/affix');
require('bootstrap-3-typeahead');
require('jqdoublescroll');

window.Headroom = Headroom;
require('headroom.js/dist/jQuery.headroom');

require('./id7-standalone');
