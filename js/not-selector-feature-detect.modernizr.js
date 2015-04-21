/*global Modernizr:false */

(function () {
  'use strict';
  // querySelector
  Modernizr.addTest('not-selector', function () {
    var doc = window.document;
    if (!('querySelectorAll' in doc)) {
      return false;
    }

    try {
      doc.querySelectorAll(':not(html)');
      return true;
    } catch (e) {
      return false;
    }
  });
})();
