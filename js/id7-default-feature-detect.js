/* eslint-env browser */

// Feature detection
import FeatureDetect from './feature-detect';

const detect = new FeatureDetect();
detect.addTest('js', true);
detect.addTest('flexbox', true);

let svgFilters = false;
try {
  svgFilters = 'SVGFEColorMatrixElement' in window && SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE === 2;
} catch (e) {
  // Nothing to do here
}
detect.addTest('svgfilters', svgFilters);

// WebP/AVIF detection
const images = {
  webp: 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  'webp-alpha': 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
  'webp-animation': 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
  'webp-lossless': 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
  avif: 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAEcbWV0YQAAAAAAAABIaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGNhdmlmIC0gaHR0cHM6Ly9naXRodWIuY29tL2xpbmstdS9jYXZpZgAAAAAeaWxvYwAAAAAEQAABAAEAAAAAAUQAAQAAABcAAAAqaWluZgEAAAAAAAABAAAAGmluZmUCAAAAAAEAAGF2MDFJbWFnZQAAAAAOcGl0bQAAAAAAAQAAAHJpcHJwAAAAUmlwY28AAAAQcGFzcAAAAAEAAAABAAAAFGlzcGUAAAAAAAAAAQAAAAEAAAAQcGl4aQAAAAADCAgIAAAAFmF2MUOBAAwACggYAAYICGgIIAAAABhpcG1hAAAAAAAAAAEAAQUBAoMDhAAAAB9tZGF0CggYAAYICGgIIBoFHiAAAEQiBACwDoA=',
};

function testImage(name, cb) {
  const image = new Image();

  function addResult(event) {
    // if the event is from 'onload', check the see if the image's width is
    // 1 pixel (which indicates support). otherwise, it fails

    const result = event && event.type === 'load' ? image.width === 1 : false;
    detect.addTest(name, result);

    if (cb) {
      cb(event);
    }
  }

  image.onerror = addResult;
  image.onload = addResult;

  image.src = images[name];
}

// test for webp support in general
testImage('webp', (event) => {
  // if the webp test loaded, test everything else.
  if (event && event.type === 'load') {
    testImage('webp-alpha');
    testImage('webp-animation');
    testImage('webp-lossless');
  }
});

// test for avif support
testImage('avif');

const { userAgent } = window.navigator;
detect.addTest('safari', userAgent.indexOf('Safari/') >= 0 && userAgent.indexOf('Chrome/') === -1);
detect.addTest('ie-or-edge', /MSIE (?:9|7|10)/i.test(userAgent) || /rv:11.0/i.test(userAgent) || /Edge\/\d./i.test(userAgent));
detect.addTest('embedded-ie', /MSIE 7/i.test(userAgent) && /\.NET/.test(userAgent));

// Init
detect.addClasses(document.documentElement);

// For legacy
window.Modernizr = detect;
window.Modernizr.mq = FeatureDetect.mq;
