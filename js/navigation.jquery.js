/*global _:false, Modernizr:false */

(function ($) {
  'use strict';
  var Config = {
    ScreenSizes: [
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
    Templates: {
      moreContainer: [
        '<ul class="nav navbar-nav navbar-right">',
        '<li class="dropdown">',
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-caret-down"></i></a>',
        '<ul class="dropdown-menu" role="menu"></ul>',
        '</li>',
        '</ul>'
      ].join(''),
      marker: '<div class="id7-navigation-marker"></div>'
    },
    Defaults: {
      fixedHeader: true,
      fixedNav: true,
      fitToWidth: false,
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

      if (this.options.fixedHeader) this.markHeaderFixedPosition();
      if (this.options.fixedNav) this.markFixedPosition();

      if (o.trimLinkTitles) this.trimLinkTitles();

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

      affixHeader: function affixHeader() {
        var $h1 = $('.id7-header-text h1');
        if ($h1.length) {
          // Set height in stone
          this.markHeaderFixedPosition();

          var offsetTop = $('.id7-header-text').offset().top;
          var headroomOffset = offsetTop;

          if ($('.id7-main-content-area').length > 0) {
            headroomOffset = $('.id7-main-content-area').offset().top;
          }

          $h1.affix({
            offset: {
              top: offsetTop
            }
          }).headroom({
            offset: headroomOffset
          });
        }
      },

      affixNav: function affixNav() {
        var $nav = this.$container;

        var $h1 = $('.id7-header-text h1');
        var offsetTop;
        if ($h1.length) {
          offsetTop = $h1.offset().top;
        } else {
          offsetTop = $nav.offset().top;
        }

        var headroomOffset = offsetTop;

        if ($('.id7-main-content-area').length > 0) {
          headroomOffset = $('.id7-main-content-area').offset().top;
        }

        $nav.affix({
          offset: {
            top: offsetTop
          }
        }).headroom({
          offset: headroomOffset
        });
      },

      fitToWidth: function fitToWidth(screenConfig) {
        var options = this.options;

        this.$container.find('.navbar:not(.navbar-secondary)').each(function () {
          var $navbar = $(this);
          var $nav = $navbar.find('> .nav').first();
          var $moreContainer = $navbar.find('> .navbar-right');

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

          if (!options.collapseSmallscreen || screenConfig.name != 'xs') {
            var isWrapped = function () {
              return _.some(_.union($nav.find('> li').get(), $moreContainer.get()), function (el) {
                return $(el).is(':visible') && $(el).position().top > 0;
              });
            };

            if (isWrapped()) {
              $moreContainer.removeClass('hidden');

              do {
                // Remove the last element and prepend it to the more container
                $moreContainer.find('> .dropdown > .dropdown-menu').prepend($nav.find('> li:not(.nav-breadcrumb)').last().css('height', ''));
              } while (isWrapped() & $nav.find('> li:not(.nav-breadcrumb)').length > 0);

              // enable highlighting of menu icon if it contains an active link
              var $moreMenu = $moreContainer.find('> .dropdown');
              $moreMenu.toggleClass('active', $moreMenu.find('li.active').length > 0);
            }
          }
        });
      },

      updateWrappedState: function updateWrappedState() {
        this.$container.find('.navbar').each(function () {
          var $navbar = $(this);
          var wasWrapped = $navbar.hasClass('navbar-wrapped');

          var $item = $navbar.find('> .nav > li:last');
          var isWrapped = $item.length && $item.position().top > 0;

          if (isWrapped != wasWrapped) {
            $navbar.addClass('important-no-transition');
            $navbar.toggleClass('navbar-wrapped', isWrapped);

            _.defer(function () {
              $navbar.removeClass('important-no-transition');
            });
          }
        });
      },

      updateDropdownBehaviour: function updateDropdownBehaviour(screenConfig) {
        this.$container.find('.navbar').each(function () {
          var $navbar = $(this);

          if (screenConfig.name == 'xs') {
            // Require a click (tap) to open dropdowns
            $navbar.find('.dropdown-toggle')
              .attr('data-toggle', 'dropdown')
              .attr('role', 'button')
              .attr('aria-expanded', false);
          } else {
            // Allow hovering to open dropdowns
            $navbar.find('.dropdown-toggle')
              .removeAttr('data-toggle')
              .removeAttr('role')
              .removeAttr('aria-expanded')
              .parent().removeClass('open');
          }
        });
      },

      // Return the total height of affixed elements (whether affixed or not)
      getAffixedHeight: function getAffixedHeight() {
        var height = 0;
        if (this.options.fixedHeader) height += $('.id7-header-text h1').outerHeight();
        if (this.options.fixedNav) height += this.$container.outerHeight();
        return height;
      },

      // Called when a page is loaded with a hash, or a hash changes (e.g. an inline
      // bookmark is clicked). Scrolls up by the height of the affixed area.
      hashChanged: function hashChanged() {
        var scrollY = this.getAffixedHeight();
        setTimeout(function () {
          window.scrollBy(0, -scrollY);
        }, 1);
      },

      markHeaderFixedPosition: function markHeaderFixedPosition() {
        $('.id7-header-text').css('height', '');

        var $h1 = $('.id7-header-text h1');
        var isAlreadyAffixed = $h1.hasClass('affix');

        if (isAlreadyAffixed) $h1.removeClass('affix');

        $('.id7-header-text').height($('.id7-header-text').height());

        if (isAlreadyAffixed) $h1.addClass('affix');
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
        if (document.readyState == 'complete') {
          if (this.options.fixedNav) this.affixNav();
          if (this.options.fixedHeader) this.affixHeader();
          this.updateWrappedState();
        } else {
          $(window).on('load', $.proxy(function () {
            if (this.options.fixedNav) this.affixNav();
            if (this.options.fixedHeader) this.affixHeader();
            this.updateWrappedState();
          }, this));
        }

        $(window).on('id7:reflow', $.proxy(function (e, screenConfig) {
          if (this.options.fitToWidth) this.fitToWidth(screenConfig);
          if (this.options.fixedHeader) this.markHeaderFixedPosition();
          if (this.options.fixedNav) this.markFixedPosition();
          this.updateWrappedState();
          this.updateDropdownBehaviour(screenConfig);
        }, this));

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

        // Handle in-page bookmarks.
        if (location.hash) this.hashChanged();
        $(window).on('hashchange', $.proxy(this.hashChanged, this));
      }
    });

    return Navigation;
  })();

  $.fn.id7Navigation = function (o) {
    o = o || {};

    function attach(i, element) {
      var $container = $(element);
      var nav = new Navigation($.extend({}, $container.data(), o, {
        container: $container
      }));

      $container.data('id7.navigation', nav);
    }

    return this.each(attach);
  };

  $(function () {
    $('.id7-navigation').id7Navigation();

    // jump to a tab if specified
    var url = document.location.toString();
    if (url.match('#') && url.split('#')[1].length) {
      var $tabLink = $('.nav-tabs a[href="#' + url.split('#')[1] + '"]');
      if ($tabLink) {
        $tabLink.tab('show')
      }
    }

    // Change hash for page-reload
    $('.nav-tabs a').on('shown.bs.tab', function (e) {
      window.location.hash = e.target.hash;
    });
  });
})(jQuery);
