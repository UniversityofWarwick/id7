/*global Modernizr:false */

// ID-199
//
// :'(

(function () {
  'use strict';

  Modernizr.addTest('safari', function () {
    var ua = window.navigator.userAgent;

    return ua.indexOf('Safari/') >= 0 && ua.indexOf('Chrome/') == -1;
  });
})();

