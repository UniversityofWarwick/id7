/* eslint-env browser */
import $ from 'jquery';

// Expose globals for backwards compatibility
window.jQuery = $;

// jQuery plugins/modifiers
require('./bootstrap-transition.jquery');
require('./bootstrap-alert.jquery');
require('./bootstrap-button.jquery');
require('./bootstrap-carousel.jquery');
require('./bootstrap-collapse.jquery');
require('./bootstrap-dropdown.jquery');
require('./bootstrap-modal.jquery');
require('./bootstrap-tooltip.jquery');
require('./bootstrap-popover.jquery');
require('./id7-popover');
require('./bootstrap-scrollspy.jquery');
require('./bootstrap-tab.jquery');
require('./bootstrap-affix.jquery');
require('@universityofwarwick/bootstrap-3-typeahead'); // Required for search suggest box
require('jqdoublescroll'); // Required for wide-tables
require('./headroom.jquery');

require('./id7-standalone');

// bootstrap-3-typeahead uses passive touchstart/touchend listeners but uses jQuery which doesn't
// create them with the setting by default. Depends on the passiveeventlisteners test added in
// id7-standalone (id7-default-feature-detect)
// https://github.com/jquery/jquery/issues/2871#issuecomment-497963776
if (window.Modernizr.passiveeventlisteners && 'ontouchstart' in document.documentElement && 'addEventListener' in document) {
  $.event.special.touchstart = {
    setup(_, ns, handle) {
      this.addEventListener('touchstart', handle, { passive: true });
    },
  };

  $.event.special.touchend = {
    setup(_, ns, handle) {
      this.addEventListener('touchend', handle, { passive: true });
    },
  };
}
