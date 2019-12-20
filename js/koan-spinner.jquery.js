/* eslint-env browser */

import $ from 'jquery';
import koan from './koan-spinner.svg';

const Config = {
  Defaults: {
    target: 'i.id7-koan-spinner',
  },
};

class KoanSpinner {
  constructor(options) {
    this.options = $.extend({}, Config.Defaults, options);

    this.replaceWithSvg();

    // Set up a MutationObserver
    if (typeof MutationObserver !== 'undefined' && this.options.container.length) {
      const observer = new MutationObserver(() => this.replaceWithSvg());
      this.options.container.each((i, container) => observer.observe(container, {
        attributes: true,
        childList: true,
        subtree: true,
      }));
    }
  }

  replaceWithSvg() {
    $(this.options.container).find(this.options.target).each((i, el) => {
      // Copy attributes
      const attributes = $(el).prop('attributes');

      const $svg = $(koan);
      $.each(attributes, function copyAttribute() {
        $svg.attr(this.name, this.value);
      });

      $(el).replaceWith($svg);
    });
  }
}

$.fn.id7KoanSpinner = function koanSpinnerPlugin(options) {
  const o = options || {};

  function attach(i, element) {
    const $container = $(element);
    const nav = new KoanSpinner($.extend({}, $container.data(), o, {
      container: $container,
    }));

    $container.data('id7.koan-spinner', nav);
  }

  return this.each(attach);
};

$(() => {
  $('.id7-fixed-width-container').id7KoanSpinner();
});
