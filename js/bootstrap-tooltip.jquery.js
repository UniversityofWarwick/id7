/* eslint-env browser */
import $ from 'jquery';
import '../bootstrap/js/tooltip.js';

// ID-285 Allow iframes in popovers https://getbootstrap.com/docs/3.4/javascript/#js-sanitizer
const defaultWhitelist = $.fn.tooltip.Constructor.DEFAULTS.whiteList;
defaultWhitelist.iframe = ['src', 'scrolling', 'frameborder', 'allowtransparency', 'seamless', 'sandbox'];
