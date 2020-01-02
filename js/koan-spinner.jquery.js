/* eslint-env browser */

import $ from 'jquery';
import koan from './koan-spinner.svg';

const Config = {
  Defaults: {
    target: 'i.id7-koan-spinner',
  },
};

const generateID = (() => {
  let globalIDCounter = 0;
  // eslint-disable-next-line no-plusplus
  return (baseStr) => `${baseStr}${globalIDCounter++}`;
})();

class KoanSpinner {
  constructor(options) {
    this.options = $.extend({}, Config.Defaults, options);

    this.replaceWithSvg();

    // Set up a MutationObserver
    if (typeof MutationObserver !== 'undefined' && this.options.container.length) {
      const observer = new MutationObserver((objects) => {
        $.each(objects, (i, mutationRecord) => {
          if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0) {
            this.replaceWithSvg(mutationRecord.target);
          }
        });
      });
      this.options.container.each((i, container) => observer.observe(container, {
        childList: true,
        subtree: true,
      }));
    } else {
      // Just run once on DOM ready
      $(() => this.replaceWithSvg());
    }
  }

  replaceWithSvg(target) {
    $(target || this.options.container).find(this.options.target).each((i, el) => {
      // Copy attributes
      const attributes = $(el).prop('attributes');

      const $svg = $(koan);
      $.each(attributes, function copyAttribute() {
        $svg.attr(this.name, this.value);
      });

      // Generate unique (per-page) IDs
      $svg.find('[id]').each((jindex, def) => {
        const oldID = $(def).attr('id');
        const newID = generateID(oldID);
        $(def).attr('id', newID);

        $svg.find('use,[clip-path^="url(#"],[fill^="url(#"]').each((kindex, e) => {
          const attrs = $(e).prop('attributes');
          $.each(attrs, (lindex, attr) => {
            if (attr.value === `#${oldID}`) {
              $(e).attr(attr.name, `#${newID}`);
            } else if (attr.value === `url(#${oldID})`) {
              $(e).attr(attr.name, `url(#${newID})`);
            }
          });
        });
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

$(document).id7KoanSpinner();
