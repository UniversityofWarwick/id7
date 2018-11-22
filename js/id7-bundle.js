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
require('bootstrap/js/tooltip');
require('bootstrap/js/popover');
require('bootstrap/js/scrollspy');
require('bootstrap/js/tab');
require('bootstrap/js/affix');
require('bootstrap-3-typeahead');
require('jqdoublescroll');

window.Headroom = Headroom;
require('headroom.js/dist/jQuery.headroom');

require('./id7-standalone');
