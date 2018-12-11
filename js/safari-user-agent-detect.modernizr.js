/* eslint-env browser */
import Modernizr from 'modernizr';

// ID-199
//
// :'(

(function () {
  Modernizr.addTest('safari', () => {
    const ua = window.navigator.userAgent;
    return ua.indexOf('Safari/') >= 0 && ua.indexOf('Chrome/') === -1;
  });
}());
