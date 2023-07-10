/* eslint-env browser */
const $ = window.jQuery;

/*
 * Show tooltips to progressively reveal information.
 *
 * https://getbootstrap.com/docs/3.4/javascript/#tooltips
 */
require('../bootstrap/js/tooltip');

// ID-285 Allow iframes in popovers https://getbootstrap.com/docs/3.4/javascript/#js-sanitizer
const defaultWhitelist = $.fn.tooltip.Constructor.DEFAULTS.whiteList;
defaultWhitelist.iframe = ['src', 'scrolling', 'frameborder', 'allowtransparency', 'seamless', 'sandbox'];
