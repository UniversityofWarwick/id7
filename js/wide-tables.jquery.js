/*global Modernizr:false */

(function ($) {
  'use strict';

  var Config = {
    Templates: {
      PopoutLink: [
        '<span class="id7-table-wrapper-popout">',
        '(',
        '<a href="#" data-toggle="id7:popout-table">',
        'Pop-out table',
        '</a>',
        ')',
        '</span>'
      ].join(''),
      Modal: [
        '<div class="id7-wide-table-popout-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">',
          '<div class="modal-dialog">',
            '<div class="modal-content">',
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                  '<span aria-hidden="true">&times;</span>' +
                '</button>' +
                '<span class="modal-title">&nbsp;</span>' +
              '</div>' +
              '<div class="modal-body">' +
              '</div>',
            '</div>',
          '</div>',
        '</div>'
      ].join('')
    },
    Defaults: {
      container: 'id7-wide-table-wrapper-container',
      wrapper: 'table-responsive', // Set to false to disable
      popout: function () {
        return Modernizr.mq('only all and (min-width: 768px)');
      },
      doublescroll: true
    }
  };

  /**
   * Wrap wide tables in a class to allow them to be scrolled without breaking
   * the container, and optionally add in a popout link.
   */
  var WideTables = (function () {
    function WideTables(o) {
      o = $.extend({}, Config.Defaults, o);

      var self = this;

      function handleTable(i, el) {
        var $table = $(el);

        // Allow the table's data attributes to override options
        var options = $.extend({}, o, $table.data());

        // Allow wrapper: true to use the default
        if (options.wrapper && typeof options.wrapper !== 'string') {
          options.wrapper = Config.Defaults.wrapper;
        }

        if (options.container && typeof options.container !== 'string') {
          options.container = Config.Defaults.container;
        }

        if (options.wrapper) {
          self.wrap($table, options.wrapper, options.container);

          var $wrapper = $table.parent();
          var $container = $wrapper.parent();

          var popout = options.popout;
          var doublescroll = options.doublescroll;

          if (typeof options.popout == 'function') popout = options.popout();
          if (typeof options.doublescroll == 'function') popout = options.doublescroll();

          if (popout) self.popout($table, $wrapper, $container);
          if (doublescroll) self.doubleScroll($table, $wrapper);
        }
      }

      self.findWideTables(o.container).each(handleTable);
    }

    $.extend(WideTables.prototype, {
      findWideTables: function findWideTables($container) {
        return $container.find('table').filter(function () {
          var $table = $(this);
          var originalMaxWidth = $table.css('max-width');
          $table.css('max-width', 'none');
          var tooWide = !$table.data('id7.wide-tables.wrapped') && Math.floor($table.width()) > $table.parent().width();
          $table.css('max-width', originalMaxWidth);
          return tooWide;
        });
      },
      wrap: function wrap($table, wrapperClass, containerClass) {
        $table.wrap($('<div />').addClass(containerClass).append($('<div />').addClass(wrapperClass))).data('id7.wide-tables.wrapped', true);

        return $table.parent();
      },
      popout: function popout($table, $wrapper, $container) {
        // sb-no-wrapper-table-popout is legacy
        if ($table.is(':visible') && !$table.hasClass('sb-no-wrapper-table-popout')) {
          $container.prepend(Config.Templates.PopoutLink).append(Config.Templates.PopoutLink);

          var $modal = $($.parseHTML(Config.Templates.Modal)).appendTo(document.body);

          $container.on('click', '[data-toggle="id7:popout-table"]', function (e) {
            e.stopPropagation();
            e.preventDefault();

            $modal.find('.modal-body').html($wrapper.html());
            $modal.modal().modal('show');

            return false;
          });
        }

        return $table; // Nothing to do, for now
      },
      doubleScroll: function doubleScroll($table, $wrapper) {
        $wrapper.doubleScroll();
        return $table;
      }
    });

    return WideTables;
  })();

  $.fn.wideTables = function (o) {
    o = o || {};

    function attach(i, element) {
      var $container = $(element);
      var wideTables = new WideTables($.extend({}, $container.data(), o, {
        container: $container
      }));

      $container.data('id7.wide-tables', wideTables);
    }

    return this.each(attach);
  };

  // SBTWO-5105 check tables after load, in case contents cause resize
  $(window).on('load id7:ready', function () {
    $('.id7-main-content').wideTables();
  });

  $(function () {
    $(window).trigger('id7:ready');
  });
})(jQuery);
