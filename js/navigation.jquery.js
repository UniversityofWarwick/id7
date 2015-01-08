/*global _:false */

(function ($) {
  'use strict';
  var Config = {
    Breadcrumbs: {
      ICON_OPEN: 'active',
      ICON_CLOSED: ''
    },
    ScreenSizes: [
      {
        name: 'lg', test: function () {
        return window.matchMedia('(min-width: 1200px)').matches;
      }, container: 1170
      },
      {
        name: 'md', test: function () {
        return window.matchMedia('(min-width: 992px)').matches;
      }, container: 970
      },
      {
        name: 'sm', test: function () {
        return window.matchMedia('(min-width: 768px)').matches;
      }, container: 750
      },
      {
        name: 'xs', test: function () {
        return true;
      }
      }
    ],
    Templates: {
      moreContainer: [
        '<ul class="nav navbar-nav navbar-right">',
        '<li class="dropdown">',
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-bars"></i></a>',
        '<ul class="dropdown-menu" role="menu"></ul>',
        '</li>',
        '</ul>'
      ].join(''),
      moreBreadcrumbsContainer: [
        '<li class="nav-breadcrumb dropdown">',
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-ellipsis-h"></i></a>',
        '<ul class="dropdown-menu" role="menu"></ul>',
        '</li>'
      ].join(''),
      marker: '<div class="id7-navigation-marker"></div>'
    },
    Defaults: {
      fixed: true,
      flipBreadcrumbIcons: true,
      fitToWidth: true,
      collapseSmallscreen: false,
      trimLinkTitles: {
        maxLength: 60,
        append: '&hellip;'
      }
    }
  };

  var Navigation = (function () {
    function Navigation(o) {
      o = $.extend({}, Config.Defaults, o);
      this.$container = o.container;

      // Allow trimLinkTitles: true, replace with config options
      if (o.trimLinkTitles && typeof o.trimLinkTitles !== 'object') {
        o.trimLinkTitles = $.extend({}, Config.Defaults.trimLinkTitles);
      }

      this.options = o;

      if (o.trimLinkTitles) this.trimLinkTitles();
      if (o.fixed) this.affix();
      if (o.flipBreadcrumbIcons) this.flipBreadcrumbIcons();
      if (o.fitToWidth) this.onScreenResize();

      this.wireEventHandlers();
    }

    $.extend(Navigation.prototype, {
      trimLinkTitles: function trimLinkTitles() {
        var options = this.options.trimLinkTitles;

        this.$container.find('.nav a').filter(function () {
          return $.trim($(this).text()).length > options.maxLength;
        }).each(function () {
          var $link = $(this);
          var linkTitle = $.trim($link.text());

          // Split on spaces to avoid breaking in the middle of a word
          var words = linkTitle.split(/\s+/g);
          var newLinkTitle = [];

          $.each(words, function (i, word) {
            var currentLinkTitle = newLinkTitle.join(' ');
            if ((currentLinkTitle + ' ' + word).length > options.maxLength) {
              return false; // break
            }

            newLinkTitle.push(word);
          });

          $link.attr('title', linkTitle).text(newLinkTitle.join(' ')).append(options.append);
        });
      },

      affix: function affix() {
        this.$container.affix({
          offset: {
            top: this.$container.offset().top - $('#id7-utility-bar').height()
          }
        });
      },

      flipBreadcrumbIcons: function flipBreadcrumbIcons() {
        this.$container.find('.navbar-brand[data-target]').each(function () {
          var $trigger = $(this);
          var $icon = $trigger.find('.fa').addClass(Config.Breadcrumbs.ICON_CLOSED);

          var $element = $($trigger.attr('data-target'));

          $element.on('show.bs.collapse', function () {
            $icon.removeClass(Config.Breadcrumbs.ICON_CLOSED).addClass(Config.Breadcrumbs.ICON_OPEN);
          });
          $element.on('hide.bs.collapse', function () {
            $icon.removeClass(Config.Breadcrumbs.ICON_OPEN).addClass(Config.Breadcrumbs.ICON_CLOSED);
          });
        });
      },

      _screenConfig: function screenConfig() {
        return _.find(Config.ScreenSizes, function (screenConfig) {
          return screenConfig.test();
        });
      },

      onScreenResize: function onResize() {
        // Which stop-point are we on?
        var screenConfig = this._screenConfig();

        // Early exit if the width is the same. xs is variable width so can't be clever :(
        if (screenConfig.name !== 'xs' && screenConfig.name === this.lastScreenConfig) return;

        if (this.options.fitToWidth) this.fitToWidth(screenConfig);
        if (this.options.fixed) this.markFixedPosition();

        this.lastScreenConfig = screenConfig.name;
      },

      fitToWidth: function fitToWidth(screenConfig) {
        var options = this.options;

        this.$container.find('.navbar:not(.navbar-breadcrumbs)').each(function () {
          var $navbar = $(this);
          var $nav = $navbar.find('> .nav').first();
          var $moreContainer = $navbar.find('> .navbar-right');
          var $moreBreadcrumbsContainer = $nav.find('> li.nav-breadcrumb.dropdown');

          // Move existing collapsed links back into the nav
          $moreContainer.find('> .dropdown > .dropdown-menu > li').each(function () {
            var $li = $(this);
            $nav.append($li);
          });

          // Insert a more container if one doesn't exist
          if ($moreContainer.length === 0) {
            $moreContainer = $(Config.Templates.moreContainer);
            $navbar.append($moreContainer);
          }

          $moreContainer.addClass('hidden');

          // If we have any parent breadcrumbs collapsed, un-collapse them
          $moreBreadcrumbsContainer.find('> .dropdown-menu > li').each(function () {
            var $li = $(this);
            $moreBreadcrumbsContainer.after($li);
          });

          var $parentBreadcrumbs = $nav.find('> li.nav-breadcrumb:not(.active):not(.dropdown)');

          // Insert a parent breadcrumbs container if one doesn't exist
          if ($parentBreadcrumbs.length > 0 && $moreBreadcrumbsContainer.length === 0) {
            $moreBreadcrumbsContainer = $(Config.Templates.moreBreadcrumbsContainer);
            $nav.prepend($moreBreadcrumbsContainer);
          }

          $moreBreadcrumbsContainer.addClass('hidden');

          if (!options.collapseSmallscreen || screenConfig.name != 'xs') {
            var isWrapped = function () {
              return _.some(_.union($nav.find('> li').get(), $moreContainer.get()), function (el) {
                return $(el).is(':visible') && $(el).position().top > 0;
              });
            };

            // Drop parent breadcrumbs into their own container first
            if (isWrapped() && $parentBreadcrumbs.length > 0) {
              $moreBreadcrumbsContainer.removeClass('hidden');

              // Gotta collapse 'em all
              $nav.find('> li.nav-breadcrumb:not(.active):not(.dropdown)').each(function () {
                $moreBreadcrumbsContainer.find('> .dropdown-menu').append($(this).css('height', ''));
              });
            }

            if (isWrapped()) {
              $moreContainer.removeClass('hidden');

              do {
                // Remove the last element and prepend it to the more container
                $moreContainer.find('> .dropdown > .dropdown-menu').prepend($nav.find('> li:not(.nav-breadcrumb)').last().css('height', ''));
              } while (isWrapped() & $nav.find('> li:not(.nav-breadcrumb)').length > 0);
            }

            // If we're STILL wrapped, it's probably a long active nav-breadcrumb
          }
        });
      },

      markFixedPosition: function markFixedPosition() {
        var $marker = this.$container.next('.id7-navigation-marker');

        if ($marker.length === 0) {
          $marker = $(Config.Templates.marker);
          this.$container.after($marker);
        }

        $marker.height(this.$container.height());
      },

      wireEventHandlers: function wireEventHandlers() {
        if (this.options.fitToWidth) {
          $(window).on('resize.id7.navigation.onScreenResize', $.proxy(this.onScreenResize, this));
        }

        this.$container.on('click', '.nav > li', function (e) {
          var $targetLink = $(e.target).closest('a');
          if ($targetLink.length > 0) {
            return; // Let the default handler take it
          }

          $targetLink = $(this).find('a').first();
          if ($targetLink.length > 0) {
            e.stopPropagation();
            e.preventDefault();

            $targetLink[0].click();

            return false;
          }
        });
      }
    });

    return Navigation;
  })();

  $.fn.id7Navigation = function (o) {
    o = o || {};

    function attach(i, element) {
      var $container = $(element);
      var nav = new Navigation($.extend(o, {
        container: $container
      }));

      $container.data('id7.navigation', nav);
    }

    return this.each(attach);
  };

  $(function () {
    $('#id7-navigation').id7Navigation();
  });
})(jQuery);
