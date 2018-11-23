/* eslint-env browser */
import Modernizr from 'modernizr';

(function addTest() {
  Modernizr.addTest('ie-or-edge', () => {
    const { userAgent } = window.navigator;
    return /MSIE 10/i.test(userAgent) || /MSIE 9/i.test(userAgent) || /rv:11.0/i.test(userAgent) || /Edge\/\d./i.test(userAgent);
  });
}());
