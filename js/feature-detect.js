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

    if ('suportsCSS' in window) {
      return window.suportsCSS(`${property}:${value}`);
    }

    return false;
  }

  static toggleClasses($container, feature, supported) {
    if (supported) {
      $container.removeClass(`no-${feature}`).addClass(feature);
    } else {
      $container.removeClass(feature).addClass(`no-${feature}`);
    }
  }

  addTest(name, result) {
    this.tests[name] = result;
    FeatureDetect.prototype[name] = result;

    // Detect when DOMReady has already happened
    if (this.$container) {
      FeatureDetect.toggleClasses(this.$container, name, result);
    }
  }

  addClasses($container) {
    this.$container = $container;
    Object.keys(this.tests).forEach((name) => {
      FeatureDetect.toggleClasses($container, name, this.tests[name]);
    });
  }
}
