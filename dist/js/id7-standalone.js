/*!
 * University of Warwick ID7
 */
/* globals _:false, Modernizr:false */

(function ($) {
  'use strict';
  var Config = {
    Defaults: {
      screenSizes: [
        {
          name: 'lg', test: function () { return Modernizr.mq('only all and (min-width: 1200px)'); }, container: 1170
        },
        {
          name: 'md', test: function () { return Modernizr.mq('only all and (min-width: 992px)'); }, container: 970
        },
        {
          name: 'sm', test: function () { return Modernizr.mq('only all and (min-width: 768px)'); }, container: 750
        },
        {
          name: 'xs', test: function () { return true; }
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
        if (document.readyState === 'complete') {
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

/*global _:false, console:false, JSON:false */

(function ($) {
  'use strict';

  function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
  }

  var Config = {
    Templates: {
      Popover: function (o) { return '<div class="account-info"><iframe src="' + escapeHtml(o.useMwIframe ? o.iframelink + '?embedded' : o.legacyIframeLink) + '" scrolling="auto" frameborder="0" allowtransparency="true" seamless sandbox="allow-same-origin allow-scripts allow-top-navigation allow-forms allow-popups"></iframe></div><div class="actions"><div class="btn-group btn-group-justified"><div class="btn-group sign-out"><a href="' + escapeHtml(o.logoutlink) + '" class="btn btn-default">Sign out</a></div></div></div>'; },
      Action: function (o) { return '<div class="btn-group"><a href="' + escapeHtml(o.href) + '" title="' + escapeHtml(o.tooltip) + '" class="btn btn-default ' + escapeHtml(o.classes) + '">' + escapeHtml(o.title) + '</a></div>'; }
    },
    Defaults: {
      container: false,
      iframelink: 'https://my.warwick.ac.uk/',
      notificationsApi: 'https://my.warwick.ac.uk/api/id7/notifications/unreads',
      legacyIframeLink: 'https://websignon.warwick.ac.uk/origin/account/popover',
      showNotificationsBadge: true,
      useMwIframe: true,
      maxNumberNotifications: 99,
      template: [
        '<div class="popover my-warwick hybrid-overlay">',
        '<div class="arrow"></div>',
        '<div class="popover-inner">',
        '<div class="popover-content"><p></p></div>',
        '</div>',
        '</div>'
      ].join('')
    },
    MessagePrefix: 'message.id7.account-popover.'
  };

  var fetchNotificationData = (function (endpoint, callback, errorHandler) {
    // avoid fetch for compatibility
    $.ajax({
      url: endpoint,
      success: callback,
      error: errorHandler,
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      }
    });
  });

  /**
   * Display a popover with account information
   */
  var AccountPopover = (function () {
    function AccountPopover(o) {
      o = $.extend({}, Config.Defaults, o);
      this.$trigger = o.trigger;
      this.options = o;

      if (typeof this.options.logoutlink === 'undefined') {
        this.options.logoutlink = this.$trigger.attr('href');
      }

      this.wireEventHandlers();
    }

    $.extend(AccountPopover.prototype, {
      createPopover: function ($trigger) {
        var opts = {
          container: this.options.container,
          content: Config.Templates.Popover(this.options),
          template: this.options.template,
          html: true,
          placement: 'bottom',
          title: 'Account information',
          trigger: 'manual'
        };
        $trigger.popover(opts);
      },
      isBlacklistedDevice: function isBlacklistedDevice() {
        var userAgent = navigator.userAgent;
        var iPadInUse = userAgent.indexOf('iPad') !== -1;
        // ref https://stackoverflow.com/questions/45171905/
        return iPadInUse;
      },
      isMwFeatureAvailable: function isMwFeatureAvailable() {
        return !this.isBlacklistedDevice();
      },
      wireEventHandlers: function wireEventHandlers() {
        var $trigger = this.$trigger;
        var that = this;
        var iframeLink = this.options.iframelink;

        if (this.options.name) {
          var badgeHtml = '<span class="fa-stack id7-notifications-badge">  <i class="fa fa-circle fa-stack-2x"></i>  <strong class="fa-stack-1x fa fa-spinner fa-spin brand-text counter-value"></strong> </span>';
          if (!this.isMwFeatureAvailable() || !this.options.showNotificationsBadge) {
            badgeHtml = '';
          }
          $trigger.html(this.options.name + badgeHtml + '<span class="caret"></span>');
        }

        var $badge = $trigger.find('.id7-notifications-badge');
        $trigger.on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          $trigger.popover('toggle');
          $badge.find('.counter-value:not(.fa-exclamation-triangle):not(.fa-spinner)').text('0');
          that.options.iframelink = iframeLink;
          $trigger.data('bs.popover').options.content = Config.Templates.Popover(that.options);
          $badge.removeClass('animating');
          $trigger.blur();
          return false;
        });
        this.createPopover($trigger);

        if (this.options.showNotificationsBadge && this.isMwFeatureAvailable()) {
          fetchNotificationData(this.options.notificationsApi, function (data) {
            var unreads = Math.min(data.unreads, 99);
            $badge.find('.counter-value').removeClass('fa-spinner').removeClass('fa-spin').addClass('slideInDown').text(unreads);
            if (unreads > 0) {
              $badge.fadeIn().addClass('animating');
              that.options.iframelink = iframeLink + 'alerts';
              $trigger.data('bs.popover').options.content = Config.Templates.Popover(that.options);
            }
          }, function () {
            $badge.find('.counter-value').removeClass('fa-spinner')
              .removeClass('fa-spin').addClass('fa-exclamation-triangle');
            $badge.attr('title', 'There was a problem communicating with the MyWarwick notifications service');
          });
        }

        // Click away to dismiss
        $('html').on('click.popoverDismiss', function (e) {
          var $target = $(e.target);
          if ($target.closest('.popover').length === 0 && $target.closest('.use-popover').length === 0 && $target.closest($trigger).length === 0) {
            $trigger.popover('hide');
          }
        });

        // Smaller screens get the old popover
        var onReflow = $.proxy(function (e, screenConfig) {
          this.options.useMwIframe = screenConfig.name !== 'xs'
            && $(window).height() >= 580 && this.isMwFeatureAvailable();

          $trigger.find('.id7-notifications-badge').toggle(this.options.useMwIframe);

          if ($trigger.data('bs.popover') !== undefined) {
            $trigger.data('bs.popover').options.content = Config.Templates.Popover(this.options);

            var toAdd = this.options.useMwIframe && this.isMwFeatureAvailable() ? 'my-warwick' : 'account-information';
            var $bsPopover = $trigger.data('bs.popover');
            $bsPopover.tip().removeClass('account-information', 'my-warwick').addClass(toAdd);

            // trigger a reposition if the popover is open
            // Note that this ends up reloading the iFrame, so remove the loaded class
            if ($bsPopover.tip().hasClass('in')) {
              $trigger.popover('show');
              $trigger.next('.popover').removeClass('loading');
            }
          }
        }, this);

        $(window).on('id7:reflow', onReflow);

        // If the document is already loaded this won't be fired as expected, so fire it manually
        if (document.readyState === 'complete' && typeof $(window).data('id7.reflow') !== 'undefined') {
          // Call reflow immediately
          var screenConfig = $(window).data('id7.reflow')._screenConfig();
          onReflow({}, screenConfig);
        }
      },
      onMessage: function onMessage(messageType, data) {
        var $popover = this.$trigger.next('.popover');

        switch (messageType) {
          case 'addAction':
            _.defaults(data, { classes: '', tooltip: '' });

            $popover.find('.actions > .btn-group').prepend(Config.Templates.Action(data));
            $popover.find('.actions > .btn-group > .btn-group').first().find('[title]:not([title=""])').tooltip({
              placement: 'bottom'
            });
            break;
          case 'resizeIframe':
            $popover.find('.account-info iframe').height(data.height);
            break;
          case 'layoutDidMount':
            $popover.addClass('loaded');
            this.updateColourTheme(data.colourTheme);
            break;
          case 'colourThemeChange':
            this.updateColourTheme(data.colourTheme);
            break;
          case 'signedOut':
            var loginlink = this.options.loginlink;
            $popover.find('.actions > .btn-group > .sign-out').replaceWith(Config.Templates.Action({ href: loginlink, classes: 'sign-in', title: 'Sign in', tooltip: '' }));
            break;
          default:
            console.error('Unexpected message type: ' + messageType);
        }
      },
      updateColourTheme: function updateColourTheme(colourTheme) {
        this.$trigger.next('.popover').removeClass(function (i, className) {
          return $.grep(className.split(' '), function (singleClass) { return singleClass.indexOf('theme-') === 0; }).join(' ');
        }).addClass('theme-' + colourTheme);
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

            if (accountPopover.options.iframelink.indexOf(origin) !== 0 && accountPopover.options.legacyIframeLink.indexOf(origin) !== 0) {
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
        name: 'lg', test: function () { return Modernizr.mq('only all and (min-width: 1200px)'); }, container: 1170
      },
      {
        name: 'md', test: function () { return Modernizr.mq('only all and (min-width: 992px)'); }, container: 970
      },
      {
        name: 'sm', test: function () { return Modernizr.mq('only all and (min-width: 768px)'); }, container: 750
      },
      {
        name: 'xs', test: function () { return true; }
      }
    ],
    Templates: {
      moreContainer: [
        '<ul class="nav navbar-nav navbar-right">',
        '<li class="dropdown">',
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fas fa-caret-down"></i></a>',
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
    },
    HeadroomEvents: {
      onPin : function () { $(this.elem).trigger('id7:headroom:onPin'); },
      onUnpin : function () { $(this.elem).trigger('id7:headroom:onUnpin'); }
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

          var headroomConfig = $.extend(Config.HeadroomEvents, { offset: headroomOffset });

          $h1.affix({
            offset: {
              top: offsetTop
            }
          }).headroom(headroomConfig);
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

        var headroomConfig = $.extend(Config.HeadroomEvents, { offset: headroomOffset });

        $nav.affix({
          offset: {
            top: offsetTop
          }
        }).headroom(headroomConfig);
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

          if (screenConfig.name === 'xs') {
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
        if (document.readyState === 'complete') {
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

        var onReflow = $.proxy(function (e, screenConfig) {
          if (this.options.fitToWidth) this.fitToWidth(screenConfig);
          if (this.options.fixedHeader) this.markHeaderFixedPosition();
          if (this.options.fixedNav) this.markFixedPosition();
          this.updateWrappedState();
          this.updateDropdownBehaviour(screenConfig);
        }, this);

        $(window).on('id7:reflow', onReflow);

        // If the document is already loaded this won't be fired as expected, so fire it manually
        if (document.readyState === 'complete' && typeof $(window).data('id7.reflow') !== 'undefined') {
          // Call reflow immediately
          var screenConfig = $(window).data('id7.reflow')._screenConfig();
          onReflow({}, screenConfig);
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
    $('.nav-tabs a').on('shown.bs.tab.id7Navigation', function (e) {
      if ('replaceState' in window.history) {
        window.history.replaceState({}, null, e.target.hash);
      } else {
        window.location.hash = e.target.hash;
      }
    });
  });
})(jQuery);

/*global Modernizr:false */

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
        display: o.display,
        templates: o.templates,
        async: true,
        limit: 1000
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
      var searchSuggest = new SearchSuggest($.extend({}, $input.data(), o, {
        input: $input
      }));

      $input.data('id7.search-suggest', searchSuggest);
    }

    return this.each(attach);
  };

  $(function () {
    function escapeHtml(unsafe) {
      return unsafe
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;');
    }

    $('input[data-suggest="go"]').each(function (i, el) {
      // ID-156 find the icon next to it
      $(el).next('.fa').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $(el).closest('form').submit();
      });

      // ID-89 On xs, set the min length to 3, not 2, and only show 3 results
      var minLength = 3;
      var maxResults = 3;

      if (Modernizr.mq('only all and (min-width: 768px)')) {
        minLength = 2;
        maxResults = 6;
      }

      $(el).searchSuggest({
        name: 'go',
        source: function (query, sync, async) {
          $.getJSON('//sitebuilder.warwick.ac.uk/sitebuilder2/api/go/redirects.json?maxResults=' + maxResults + '&prefix=' + encodeURIComponent(query) + '&callback=?', async);
        },
        display: 'path',
        minLength: minLength,
        hint: false,
        templates: {
          suggestion: function (o) { return '<div><p class="go-path">' + escapeHtml(o.path) + '</p><p class="go-description">' + (typeof o.description !== 'undefined' ? escapeHtml(o.description) : '') + '</p></div>'; }
        }
      });

      var tt = $(el).data('ttTypeahead');
      tt.input.onSync('queryChanged', function (evtName, query) {
        $(el).data('original-query', query);
      });

      $(el).on('typeahead:select', function (evt, redirect) {
        window.location =
          'http://go.warwick.ac.uk/' + redirect.path +
          '?goSearchReferer=' + encodeURIComponent(window.location) +
          '&goSearchQuery=' + encodeURIComponent($(this).data('original-query'));
      });

      // ID-145
      if ($(el).width() < 88) {
        $(el).attr('placeholder', 'Search');
      }
    });
  });

})(jQuery);

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
          return $(this).parents('.no-wide-tables').length === 0;
        }).filter(function () {
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

/*global Modernizr:false */

// ID-199
//
// :'(

(function () {
  'use strict';

  Modernizr.addTest('safari', function () {
    var ua = window.navigator.userAgent;

    return ua.indexOf('Safari/') >= 0 && ua.indexOf('Chrome/') == -1;
  });
})();


/*global Modernizr:false */

(function () {
  'use strict';

  Modernizr.addTest('ie-or-edge', function () {
    var ua = window.navigator.userAgent;

    return /MSIE 10/i.test(ua) || /MSIE 9/i.test(ua) || /rv:11.0/i.test(ua) || /Edge\/\d./i.test(ua);
  });
})();


/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    );
    document.querySelector('head').appendChild(msViewportStyle);
  }
})();
