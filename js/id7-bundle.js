/* eslint-env browser */
import $ from 'jquery';
import _ from 'lodash-es';
import Modernizr from 'modernizr';

// jQuery plugins/modifiers
import 'bootstrap/js/transition';
import 'bootstrap/js/alert';
import 'bootstrap/js/button';
import 'bootstrap/js/carousel';
import 'bootstrap/js/collapse';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/modal';
import 'bootstrap/js/tooltip';
import 'bootstrap/js/popover';
import 'bootstrap/js/scrollspy';
import 'bootstrap/js/tab';
import 'bootstrap/js/affix';
import 'bootstrap-3-typeahead';
// 'js/vendor/jquery.doubleScroll-0.6.js',
import 'headroom.js/dist/headroom';
import 'headroom.js/dist/jQuery.headroom';

import './id7-standalone';

// Expose globals for backwards compatibility
window.jQuery = $;
window._ = _;
window.Modernizr = Modernizr;
