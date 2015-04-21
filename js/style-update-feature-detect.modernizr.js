/*global Modernizr:false */

(function () {
  'use strict';
  // querySelector
  Modernizr.addTest('style-update', function () {
    var doc = window.document;
    if (!('createElement' in doc && 'createTextNode' in doc)) {
      return false;
    }

    try {
      var el = doc.createElement('style');
      el.setAttribute('type', 'text/css');

      var contents = doc.createTextNode('modernizr { property: slime; }');
      el.appendChild(contents);

      return true;
    } catch (e) {
      return false;
    }
  });
})();
