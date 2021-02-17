/* eslint-env browser */
const $ = window.jQuery;

/*
 * Streamlined, flexible dialog prompts.
 *
 * https://getbootstrap.com/docs/3.4/javascript/#modals
 */
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
