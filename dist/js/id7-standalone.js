/*!
 * University of Warwick ID7
 */


/*global _:false, console:false, JSON:false */

(function ($) {
  'use strict';

  var Config = {
    Templates: {
      Popover: _.template([
        '<div class="account-info">',
        '<iframe src="<%- iframelink %>" scrolling="no" frameborder="0" allowtransparency="true" seamless></iframe>',
        '</div>',
        '<div class="actions">',
        '<div class="btn-group btn-group-justified">',
        '<div class="btn-group sign-out">',
        '<a href="<%- logoutlink %>" class="btn btn-default">Sign out</a>',
        '</div>',
        '</div>',
        '</div>'
      ].join('')),
      Action: _.template([
        '<div class="btn-group">',
        '<a href="<%- href %>" class="btn btn-default <%= classes %>"><%= title %></a>',
        '</div>'
      ].join(''))
    },
    Defaults: {
      container: false,
      iframelink: 'https://websignon.warwick.ac.uk/origin/account/popover',
      template: [
        '<div class="popover account-information">',
        '<div class="arrow"></div>',
        '<div class="popover-inner">',
        '<div class="popover-content"><p></p></div>',
        '</div>',
        '</div>'
      ].join('')
    },
    MessagePrefix: 'message.id7.account-popover.'
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

        $trigger.on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }).popover({
          container: this.options.container,
          content: Config.Templates.Popover(this.options),
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
      },
      onMessage: function onMessage(messageType, data) {
        var $popover = this.$trigger.next('.popover');

        switch (messageType) {
          case 'addAction':
            $popover.find('.actions > .btn-group').prepend(Config.Templates.Action(data));
            break;
          case 'resizeIframe':
            $popover.find('.account-info iframe').height(data.height);
            break;
          case 'signedOut':
            var loginlink = this.options.loginlink;
            $popover.find('.actions > .btn-group > .sign-out').replaceWith(Config.Templates.Action({ href:loginlink, classes:'sign-in', title:'Sign in' }));
            break;
          default:
            console.error('Unexpected message type: ' + messageType);
        }
      }
    });

    return AccountPopover;
  })();

  $.fn.accountPopover = function (o) {
    o = o || {};

    function attach(i, element) {
      var $trigger = $(element);
      var accountPopover = new AccountPopover($.extend({}, $trigger.data(), o, {
        trigger: $trigger
      }));

      $trigger.data('id7.account-popover', accountPopover);
    }

    return this.each(attach);
  };

  $(function () {
    $('[data-toggle="id7:account-popover"]').accountPopover();

    // Listen to relevant messages and send them through
    $(window).on('message', function (e) {
      var origin = e.originalEvent.origin;

      try {
        var data = JSON.parse(e.originalEvent.data);
        if (data.type && data.type.indexOf(Config.MessagePrefix) === 0) {
          var messageType = data.type.substring(Config.MessagePrefix.length);

          // Send the message out to each instance
          $('[data-toggle="id7:account-popover"]').each(function () {
            var $trigger = $(this);
            var accountPopover = $trigger.data('id7.account-popover');

            if (accountPopover.options.iframelink.indexOf(origin) !== 0) {
              console.error('Ignored message of type ' + messageType + ' because origin ' + origin + ' didn\'t match iframe link ' + accountPopover.options.iframelink);
            } else {
              accountPopover.onMessage(messageType, data);
            }
          });
        }
      } catch (error) {}
    })
  });

})(jQuery);

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

      this.onScreenResize();

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
          var headerTextHeight = $('.id7-header-text').height();

          // FIXME magic number for xs - this comes into play where we have a parent site header
          if (headerTextHeight > 52) {
            offsetTop += (headerTextHeight - 52);
          }

          $h1.affix({
            offset: {
              top: offsetTop
            }
          });
        }
      },

      affixNav: function affixNav() {
        var $nav = this.$container;

        var $h1 = $('.id7-header-text h1');
        var offsetTop;
        if ($h1.length) {
          offsetTop = $h1.offset().top;

          var headerTextHeight = $('.id7-header-text').height();

          // FIXME magic number for xs - this comes into play where we have a parent site header
          if (headerTextHeight > 52) {
            offsetTop += (headerTextHeight - 52);
          }
        } else {
          offsetTop = $nav.offset().top;
        }

        $nav.affix({
          offset: {
            top: offsetTop
          }
        });
      },

      _screenConfig: function screenConfig() {
        return _.find(Config.ScreenSizes, function (screenConfig) {
          return screenConfig.test();
        });
      },

      onScreenResize: function onResize(e, force) {
        // Which stop-point are we on?
        var screenConfig = this._screenConfig();

        // Early exit if the width is the same. xs is variable width so can't be clever :(
        if (!force && screenConfig.name !== 'xs' && screenConfig.name === this.lastScreenConfig) return;

        if (this.options.fitToWidth) this.fitToWidth(screenConfig);
        if (this.options.fixedHeader) this.markHeaderFixedPosition();
        if (this.options.fixedNav) this.markFixedPosition();

        this.lastScreenConfig = screenConfig.name;
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
        } else {
          $(window).on('load', $.proxy(function () {
            if (this.options.fixedNav) this.affixNav();
            if (this.options.fixedHeader) this.affixHeader();
          }, this));
        }

        if (this.options.fitToWidth) {
          $(window).on('resize.id7.navigation.onScreenResize', $.proxy(this.onScreenResize, this));

          // ID-30 on load (i.e. after fonts have loaded) run this, forcing a resize
          if (document.readyState == 'complete') {
            this.onScreenResize({}, true);
          } else {
            $(window).on('load', $.proxy(function (e) {
              this.onScreenResize(e, true);
            }, this));
          }
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
      var nav = new Navigation($.extend(o, {
        container: $container
      }));

      $container.data('id7.navigation', nav);
    }

    return this.each(attach);
  };

  $(function () {
    $('.id7-navigation').id7Navigation();
  });
})(jQuery);

/*global _:false, Modernizr:false */

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
      }).on('keydown', function ($e) {
        var keyCode = $e.which || $e.keyCode;
        switch (keyCode) {
          case 38: // up
          case 40: // down
            // Only if no modifier
            if (!($e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey)) {
              $e.stopPropagation();
            }
        }
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
      // ID-89 On xs, set the min length to 3, not 2, and only show 3 results
      var minLength = 3;
      var maxResults = 3;

      if (Modernizr.mq('only all and (min-width: 768px)')) {
        minLength = 2;
        maxResults = 6;
      }

      $(el).searchSuggest({
        name: 'go',
        source: function (query, cb) {
          $.getJSON('//sitebuilder.warwick.ac.uk/sitebuilder2/api/go/redirects.json?maxResults=' + maxResults + '&prefix=' + encodeURIComponent(query) + '&callback=?', cb);
        },
        displayKey: 'path',
        minLength: minLength,
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

/*global Modernizr:false */

(function () {
  'use strict';
  // querySelector
  Modernizr.addTest('not-selector', function () {
    var doc = window.document;
    if (!('querySelectorAll' in doc)) {
      return false;
    }

    try {
      doc.querySelectorAll(':not(html)');
      return true;
    } catch (e) {
      return false;
    }
  });
})();

/*global Modernizr:false */

(function () {
  'use strict';
  // querySelector
  Modernizr.addTest('style-update', function () {
    var doc = window.document;
    if (!('createElement' in doc && 'createTextNode' in doc)) {
      return false;
    }

    try {
      var el = doc.createElement('style');
      el.setAttribute('type', 'text/css');

      var contents = doc.createTextNode('modernizr { property: slime; }');
      el.appendChild(contents);

      return true;
    } catch (e) {
      return false;
    }
  });
})();
