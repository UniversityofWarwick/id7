/*global Modernizr:false */

(function () {
  'use strict';

  Modernizr.addTest('ie-or-edge', function () {
    var ua = window.navigator.userAgent;

    return /MSIE 10/i.test(ua) || /MSIE 9/i.test(ua) || /rv:11.0/i.test(ua) || /Edge\/\d./i.test(ua);
  });
})();

