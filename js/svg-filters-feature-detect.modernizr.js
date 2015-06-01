/*global Modernizr:false */

(function () {
  'use strict';
  // Should fail in Safari: http://stackoverflow.com/questions/9739955/feature-detecting-support-for-svg-filters.
  Modernizr.addTest('svgfilters', function () {
    var result = false;

    try {
      result = 'SVGFEColorMatrixElement' in window &&
                SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2;
    } catch (e) {}

    return result;
  });
})();
