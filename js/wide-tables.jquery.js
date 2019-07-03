/* eslint-env browser */
import $ from 'jquery';
import FeatureDetect from './feature-detect';

const Config = {
  Templates: {
    PopoutLink: '<span class="id7-table-wrapper-popout">(<a href="#" data-toggle="id7:popout-table">Pop-out table</a>)</span>',
    Modal: `
      <div class="id7-wide-table-popout-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <span class="modal-title">&nbsp;</span>
            </div>
            <div class="modal-body">
            </div>
          </div>
        </div>
      </div>`.trim(),
  },
  Defaults: {
    container: 'id7-wide-table-wrapper-container',
    wrapper: 'table-responsive', // Set to false to disable
    popout() {
      return FeatureDetect.mq('only all and (min-width: 768px)');
    },
    doublescroll: true,
  },
};

/**
 * Wrap wide tables in a class to allow them to be scrolled without breaking
 * the container, and optionally add in a popout link.
 */
class WideTables {
  constructor(opts) {
    const o = $.extend({}, Config.Defaults, opts);

    function handleTable(i, el) {
      const $table = $(el);

      // Allow the table's data attributes to override options
      const options = $.extend({}, o, $table.data());

      // Allow wrapper: true to use the default
      if (options.wrapper && typeof options.wrapper !== 'string') {
        options.wrapper = Config.Defaults.wrapper;
      }

      if (options.container && typeof options.container !== 'string') {
        options.container = Config.Defaults.container;
      }

      if (options.wrapper) {
        WideTables.wrap($table, options.wrapper, options.container);

        const $wrapper = $table.parent();
        const $container = $wrapper.parent();

        let { popout } = options;
        const { doublescroll } = options;

        if (typeof options.popout === 'function') popout = options.popout();
        if (typeof options.doublescroll === 'function') popout = options.doublescroll();

        if (popout) WideTables.popout($table, $wrapper, $container);
        if (doublescroll) WideTables.doubleScroll($table, $wrapper);
      }
    }

    WideTables.findWideTables(o.container).each(handleTable);
  }

  static findWideTables($container) {
    return $container.find('table').filter(function isNotDisabled() {
      return $(this).parents('.no-wide-tables').length === 0;
    }).filter(function isTooWide() {
      const $table = $(this);
      const originalMaxWidth = $table.css('max-width');
      $table.css('max-width', 'none');
      const tooWide = !$table.data('id7.wide-tables.wrapped') && Math.floor($table.width()) > $table.parent().width();
      $table.css('max-width', originalMaxWidth);
      return tooWide;
    });
  }

  static wrap($table, wrapperClass, containerClass) {
    $table.wrap($('<div />').addClass(containerClass).append($('<div />').addClass(wrapperClass))).data('id7.wide-tables.wrapped', true);

    return $table.parent();
  }

  static popout($table, $wrapper, $container) {
    // sb-no-wrapper-table-popout is legacy
    if ($table.is(':visible') && !$table.hasClass('sb-no-wrapper-table-popout')) {
      $container.prepend(Config.Templates.PopoutLink).append(Config.Templates.PopoutLink);

      const $modal = $($.parseHTML(Config.Templates.Modal)).appendTo(document.body);

      $container.on('click', '[data-toggle="id7:popout-table"]', (e) => {
        e.stopPropagation();
        e.preventDefault();

        $modal.find('.modal-body').html($wrapper.html());
        $modal.modal().modal('show');

        return false;
      });
    }

    return $table; // Nothing to do, for now
  }

  static doubleScroll($table, $wrapper) {
    $wrapper.doubleScroll();
    return $table;
  }
}

$.fn.wideTables = function wideTablesPlugin(options) {
  const o = options || {};

  function attach(i, element) {
    const $container = $(element);
    const wideTables = new WideTables($.extend({}, $container.data(), o, {
      container: $container,
    }));

    $container.data('id7.wide-tables', wideTables);
  }

  return this.each(attach);
};

// SBTWO-5105 check tables after load, in case contents cause resize
$(window).on('load id7:ready', () => $('.id7-main-content').wideTables());
$(() => $(window).trigger('id7:ready'));
