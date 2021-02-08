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
