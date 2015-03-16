(function ($) {
  'use strict';

  var Config = {
    Defaults: {
      wrapper: 'id7-wide-table-wrapper', // Set to false to disable
      popout: false
    }
  };

  /**
   * Wrap wide tables in a class to allow them to be scrolled without breaking
   * the container, and optionally add in a popout link.
   */
  var WideTables = (function () {
    function WideTables(o) {
      o = $.extend({}, Config.Defaults, o);

      // Allow wrapper: true to use the default
      if (o.wrapper && typeof o.wrapper !== 'string') {
        o.wrapper = Config.Defaults.wrapper;
      }

      this.options = o;

      this.findWideTables().each($.proxy(function (i, el) {
        if (o.wrapper) this.wrap($(el));
        if (o.popout) this.popout($(el));
      }, this));
    }

    $.extend(WideTables.prototype, {
      findWideTables: function findWideTables() {
        return this.options.container.find('table').filter(function () {
          var $table = $(this);
          return Math.floor($table.width()) > $table.parent().width();
        });
      },
      wrap: function wrap($table) {
        $table.wrap($('<div />').addClass(this.options.wrapper));
      },
      popout: function popout($table) {
        return $table; // Nothing to do, for now
      }
    });

    return WideTables;
  })();

  $.fn.wideTables = function (o) {
    o = o || {};

    function attach(i, element) {
      var $container = $(element);
      var wideTables = new WideTables($.extend(o, {
        container: $container
      }));

      $container.data('id7.wide-tables', wideTables);
    }

    return this.each(attach);
  };

  $(function () {
    $('.id7-main-content').wideTables();
  });

})(jQuery);
