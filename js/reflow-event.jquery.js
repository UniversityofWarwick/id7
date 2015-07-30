/*global _:false, Modernizr:false */

(function ($) {
  'use strict';
  var Config = {
    Defaults: {
      screenSizes: [
        {
          name: 'lg', test: function () {
          return Modernizr.mq('only all and (min-width: 1200px)');
        }, container: 1170
        },
        {
          name: 'md', test: function () {
          return Modernizr.mq('only all and (min-width: 992px)');
        }, container: 970
        },
        {
          name: 'sm', test: function () {
          return Modernizr.mq('only all and (min-width: 768px)');
        }, container: 750
        },
        {
          name: 'xs', test: function () {
          return true;
        }
        }
      ],
      eventName: 'id7:reflow'
    }
  };

  var ReflowEvent = (function () {
    function ReflowEvent(o) {
      o = $.extend({}, Config.Defaults, o);
      this.options = o;

      this.onScreenResize(); // First time run on init
      this.wireEventHandlers();
    }

    $.extend(ReflowEvent.prototype, {
      _screenConfig: function screenConfig() {
        return _.find(this.options.screenSizes, function (screenConfig) {
          return screenConfig.test();
        });
      },

      onScreenResize: function onResize(e, force) {
        // Which stop-point are we on?
        var screenConfig = this._screenConfig();

        // Early exit if the width is the same. xs is variable width so can't be clever :(
        if (!force && screenConfig.name !== 'xs' && screenConfig.name === this.lastScreenConfig) return;

        this.options.container.trigger(this.options.eventName, [screenConfig]);

        this.lastScreenConfig = screenConfig.name;
      },

      reflow: function reflow() {
        this.onScreenResize({}, true);
      },

      wireEventHandlers: function wireEventHandlers() {
        $(window).on('resize.id7.reflow.onScreenResize', $.proxy(this.onScreenResize, this));

        // ID-30 on load (i.e. after fonts have loaded) run this, forcing a resize
        if (document.readyState == 'complete') {
          this.reflow();
        } else {
          $(window).on('load', $.proxy(this.reflow, this));
        }
      }
    });

    return ReflowEvent;
  })();

  $.fn.reflow = function (option) {
    function attach(i, element) {
      var $el = $(element);
      var data = $el.data('id7.reflow');
      var options = $.extend({}, $el.data(), { container: $el }, typeof option == 'object' && option);

      if (!data) $el.data('id7.reflow', (data = new ReflowEvent(options)));

      if (option === 'reflow' || option === 'force' || option === true) data.reflow();
    }

    return this.each(attach);
  };

  $(function () {
    $(window).reflow();
  });
})(jQuery);
