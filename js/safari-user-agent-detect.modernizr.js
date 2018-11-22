/* eslint-env browser */
import Modernizr from 'modernizr';

// ID-199
//
// :'(

(function addTest() {
  Modernizr.addTest('webkit-idevice', () => {
    const { userAgent } = window.navigator;
    return userAgent.indexOf('Safari/') >= 0 && userAgent.indexOf('iP') >= 0;
  });
}());
