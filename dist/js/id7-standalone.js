/*!
 * University of Warwick ID7
 */


/*global _:false */

(function ($) {
  'use strict';

  var Config = {
    Template: _.template([
      '<div class="account-info row">',
      '<div class="col-xs-4">',
      '<img class="photo" src="<%- photo %>">',
      '</div>',
      '<div class="col-xs-8">',
      '<div class="full-name"><%= fullName %></div>',
      '<div class="email"><%= email %></div>',
      '<div class="user-id"><%= userId %></div>',
      '<div class="description"><%= description %></div>',
      '</div>',
      '</div>',
      '<div class="row actions">',
      '<div class="btn-group btn-group-justified">',
      '<div class="btn-group">',
      '<button data-action="change-password" type="button" class="btn btn-default">Change password</button>' +
      '</div>',
      '<div class="btn-group">',
      '<button data-action="sign-out" type="button" class="btn btn-default">Sign out</button>',
      '</div>',
      '</div>',
      '</div>'
    ].join('')),
    Defaults: {
      container: false,
      template: [
        '<div class="popover account-information">',
        '<div class="arrow"></div>',
        '<div class="popover-inner">',
        '<div class="popover-content"><p></p></div>',
        '</div>',
        '</div>'
      ].join('')
    }
  };

  /**
   * Display a popover with account information
   */
  var AccountPopover = (function () {
    function AccountPopover(o) {
      o = $.extend({}, Config.Defaults, o);
      this.$trigger = o.trigger;
      this.options = o;

      this.wireEventHandlers();
    }

    $.extend(AccountPopover.prototype, {
      wireEventHandlers: function wireEventHandlers() {
        var $trigger = this.$trigger;
        var user = this.options.user;

        $trigger.on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }).popover({
          container: this.options.container,
          content: Config.Template(user),
          template: this.options.template,
          html: true,
          placement: 'bottom',
          title: 'Account information',
          trigger: 'click'
        });

        // Click away to dismiss
        $('html').on('click.popoverDismiss', function (e) {
          // if clicking anywhere other than the popover itself
          if ($(e.target).closest('.popover').length === 0 && $(e.target).closest('.use-popover').length === 0) {
            $trigger.popover('hide');
          }
        });
      }
    });

    return AccountPopover;
  })();

  $.fn.accountPopover = function (o) {
    o = o || {};

    function attach(i, element) {
      var $trigger = $(element);
      var accountPopover = new AccountPopover($.extend(o, {
        trigger: $trigger
      }));

      $trigger.data('id7.account-popover', accountPopover);
    }

    return this.each(attach);
  };

  $(function () {
    $('[data-toggle="id7:account-popover"]').accountPopover({
      user: {
        photo: 'http://www.gravatar.com/avatar/ed08722fea72ddf208e404d92c20b01d',
        fullName: 'Mathew Mannion',
        email: 'M.Mannion@warwick.ac.uk',
        userId: 'u0672089',
        description: 'Staff, IT Services'
      }
    });
  });

})(jQuery);

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

/*global _:false */

(function ($) {
  'use strict';

  /**
   * Use Twitter typeahead to provide Go.Warwick suggestions on an <input>
   *
   * @see https://twitter.github.io/typeahead.js/
   */
  var SearchSuggest = (function () {
    function SearchSuggest(o) {
      o = o || {};
      var $input = o.input;
      $input.typeahead({
        minLength: o.minLength,
        hint: o.hint
      }, {
        name: o.name,
        source: o.source,
        displayKey: o.displayKey,
        templates: o.templates
      });
    }

    return SearchSuggest;
  })();

  $.fn.searchSuggest = function (o) {
    o = o || {};

    function attach(i, element) {
      var $input = $(element);
      var searchSuggest = new SearchSuggest($.extend(o, {
        input: $input
      }));

      $input.data('id7.search-suggest', searchSuggest);
    }

    return this.each(attach);
  };

  $(function () {
    $('input[data-suggest="go"]').each(function (i, el) {
      $(el).searchSuggest({
        name: 'go',
        source: function (query, cb) {
          $.getJSON('//sitebuilder.warwick.ac.uk/sitebuilder2/api/go/redirects.json?maxResults=6&prefix=' + encodeURIComponent(query) + '&callback=?', cb);
        },
        displayKey: 'path',
        minLength: 2,
        hint: false,
        templates: {
          suggestion: _.template([
            '<p class="go-path"><%= path %></p>',
            '<p class="go-description"><% if (typeof description !== "undefined") { print(description); } %></p>'
          ].join(''))
        }
      });

      var tt = $(el).data('ttTypeahead');
      tt.input.onSync('queryChanged', function (evtName, query) {
        $(el).data('original-query', query);
      });

      $(el).on('typeahead:selected', function (evt, redirect) {
        window.location =
          'http://go.warwick.ac.uk/' + redirect.path +
          '?goSearchReferer=' + encodeURIComponent(window.location) +
          '&goSearchQuery=' + encodeURIComponent($(this).data('original-query'));
      });
    });
  });

})(jQuery);
