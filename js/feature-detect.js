/* eslint-env browser */
const matchMedia = window.matchMedia || window.msMatchMedia || (() => false);

export default class FeatureDetect {
  constructor() {
    this.tests = {};
  }

  static mq(query) {
    const mql = matchMedia(query);
    return (mql && mql.matches) || false;
  }

  static cssSupports(property, value) {
    if (typeof window.CSS !== 'undefined' && 'supports' in window.CSS) {
      return window.CSS.supports(property, value);
    }

    if ('supportsCSS' in window) {
      return window.supportsCSS(`${property}:${value}`);
    }

    // As IE11 doesn't support CSS.supports but its flexbox implementation is just
    // about good-enough, special-case it
    return property === 'display' && value === 'flex' && /rv:11.0/i.test(window.navigator.userAgent);
  }

  static toggleClasses(container, feature, supported) {
    if (supported) {
      container.classList.remove(`no-${feature}`);
      container.classList.add(feature);
    } else {
      container.classList.remove(feature);
      container.classList.add(`no-${feature}`);
    }
  }

  addTest(name, result) {
    this.tests[name] = result;
    FeatureDetect.prototype[name] = result;

    // Detect when DOMReady has already happened
    if (this.container) {
      FeatureDetect.toggleClasses(this.container, name, result);
    }
  }

  addClasses(container) {
    this.container = container;
    Object.keys(this.tests).forEach((name) => {
      FeatureDetect.toggleClasses(container, name, this.tests[name]);
    });
  }
}
