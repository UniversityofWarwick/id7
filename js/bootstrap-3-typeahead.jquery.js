/* eslint-env browser */
const $ = window.jQuery;

/*
 * Adds typeahead support to Bootstrap 3. Forked of a fork
 *
 * https://github.com/UniversityofWarwick/bootstrap-3-typeahead
 */
require('@universityofwarwick/bootstrap-3-typeahead');

function supportsPassiveEventListeners() {
  let supportsPassiveOption = false;

  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: () => {
        supportsPassiveOption = true;
        return undefined;
      },
    });
    const noop = () => {};
    window.addEventListener('testPassiveEventSupport', noop, opts);
    window.removeEventListener('testPassiveEventSupport', noop, opts);
  } catch (e) {
    supportsPassiveOption = false;
  }

  return supportsPassiveOption;
}

// bootstrap-3-typeahead uses passive touchstart/touchend listeners but uses jQuery which doesn't
// create them with the setting by default.
// https://github.com/jquery/jquery/issues/2871#issuecomment-497963776
if (supportsPassiveEventListeners() && 'ontouchstart' in document.documentElement && 'addEventListener' in document) {
  $.event.special.touchstart = {
    setup(_, ns, handle) {
      if (this.addEventListener) {
        this.addEventListener('touchstart', handle, { passive: true });
      }
    },
  };

  $.event.special.touchend = {
    setup(_, ns, handle) {
      if (this.addEventListener) {
        this.addEventListener('touchend', handle, { passive: true });
      }
    },
  };
}
