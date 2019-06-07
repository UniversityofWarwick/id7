/* eslint-env browser */
import $ from 'jquery';
import _ from 'lodash-es';

import currentScreenSize from './screen-sizes';
import changeLocationHash from './change-location-hash';

const Config = {
  Templates: {
    moreContainer: `<ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fas fa-caret-down"></i></a>
          <ul class="dropdown-menu" role="menu"></ul>
        </li>
      </ul>`.trim(),
    marker: '<div class="id7-navigation-marker"></div>',
  },
  Defaults: {
    fixedHeader: true,
    fixedNav: true,
    fitToWidth: false,
    collapseSmallscreen: false,
    trimLinkTitles: {
      maxLength: 60,
      append: '&hellip;',
    },
  },
  HeadroomEvents: {
    onPin() { $(this.elem).trigger('id7:headroom:onPin'); },
    onUnpin() { $(this.elem).trigger('id7:headroom:onUnpin'); },
  },
};

class Navigation {
  constructor(options) {
    const o = $.extend({}, Config.Defaults, options);
    this.$container = o.container;

    // Allow trimLinkTitles: true, replace with config options
    if (o.trimLinkTitles && typeof o.trimLinkTitles !== 'object') {
      o.trimLinkTitles = $.extend({}, Config.Defaults.trimLinkTitles);
    }

    this.options = o;

    if (this.options.fixedHeader) Navigation.markHeaderFixedPosition();
    if (this.options.fixedNav) this.markFixedPosition();

    if (o.trimLinkTitles) this.trimLinkTitles();

    this.wireEventHandlers();
  }

  trimLinkTitles() {
    const { maxLength, append } = this.options.trimLinkTitles;

    this.$container.find('.nav a').filter(function isOverLength() {
      return $.trim($(this).text()).length > maxLength;
    }).each(function trimTitle() {
      const $link = $(this);
      const linkTitle = $.trim($link.text());

      // Split on spaces to avoid breaking in the middle of a word
      const words = linkTitle.split(/\s+/g);
      const newLinkTitle = [];

      $.each(words, (i, word) => {
        const currentLinkTitle = newLinkTitle.join(' ');
        if ((`${currentLinkTitle} ${word}`).length > maxLength) {
          return false; // break
        }

        newLinkTitle.push(word);

        return true;
      });

      $link.attr('title', linkTitle).text(newLinkTitle.join(' ')).append(append);
    });
  }

  static affixHeader() {
    const $h1 = $('.id7-header-text h1');
    if ($h1.length) {
      // Set height in stone
      Navigation.markHeaderFixedPosition();

      const offsetTop = $('.id7-header-text').offset().top;
      let headroomOffset = offsetTop;

      const $mainContent = $('.id7-main-content-area');

      if ($mainContent.length > 0) {
        headroomOffset = $mainContent.offset().top;
      }

      const headroomConfig = $.extend(Config.HeadroomEvents, { offset: headroomOffset });

      $h1.affix({
        offset: {
          top: offsetTop,
        },
      }).headroom(headroomConfig);
    }
  }

  affixNav() {
    const $nav = this.$container;

    const $h1 = $('.id7-header-text h1');
    let offsetTop;
    if ($h1.length) {
      offsetTop = $h1.offset().top;
    } else {
      offsetTop = $nav.offset().top;
    }

    let headroomOffset = offsetTop;

    if ($('.id7-main-content-area').length > 0) {
      headroomOffset = $('.id7-main-content-area').offset().top;
    }

    const headroomConfig = $.extend(Config.HeadroomEvents, { offset: headroomOffset });

    $nav.affix({
      offset: {
        top: offsetTop,
      },
    }).headroom(headroomConfig);
  }

  fitToWidth(screenConfig) {
    const { options } = this;

    this.$container.find('.navbar:not(.navbar-secondary)').each(function fitNavbarToWidth() {
      const $navbar = $(this);
      const $nav = $navbar.find('> .nav').first();
      let $moreContainer = $navbar.find('> .navbar-right');

      // Move existing collapsed links back into the nav
      $moreContainer.find('> .dropdown > .dropdown-menu > li').each(function moveCollapsedLinks() {
        const $li = $(this);
        $nav.append($li);
      });

      // Insert a more container if one doesn't exist
      if ($moreContainer.length === 0) {
        $moreContainer = $(Config.Templates.moreContainer);
        $navbar.append($moreContainer);
      }

      $moreContainer.addClass('hidden');

      if (!options.collapseSmallscreen || screenConfig.name !== 'xs') {
        const isWrapped = () => _.some(
          _.union($nav.find('> li').get(), $moreContainer.get()),
          el => $(el).is(':visible') && $(el).position().top > 0,
        );

        if (isWrapped()) {
          $moreContainer.removeClass('hidden');

          do {
            // Remove the last element and prepend it to the more container
            $moreContainer.find('> .dropdown > .dropdown-menu').prepend($nav.find('> li:not(.nav-breadcrumb)').last().css('height', ''));
          } while (isWrapped() && $nav.find('> li:not(.nav-breadcrumb)').length > 0);

          // enable highlighting of menu icon if it contains an active link
          const $moreMenu = $moreContainer.find('> .dropdown');
          $moreMenu.toggleClass('active', $moreMenu.find('li.active').length > 0);
        }
      }
    });
  }

  updateWrappedState() {
    this.$container.find('.navbar').each(function updateState() {
      const $navbar = $(this);
      const wasWrapped = $navbar.hasClass('navbar-wrapped');

      const $item = $navbar.find('> .nav > li:last');
      const isWrapped = $item.length && $item.position().top > 0;

      if (isWrapped !== wasWrapped) {
        $navbar.addClass('important-no-transition');
        $navbar.toggleClass('navbar-wrapped', isWrapped);

        _.defer(() => $navbar.removeClass('important-no-transition'));
      }
    });
  }

  updateDropdownBehaviour(screenConfig) {
    this.$container.find('.navbar').each(function updateDropdowns() {
      const $navbar = $(this);

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
          .parent()
          .removeClass('open');
      }
    });
  }

  // Return the total height of affixed elements (whether affixed or not)
  getAffixedHeight() {
    let height = 0;
    if (this.options.fixedHeader) height += $('.id7-header-text h1').outerHeight();
    if (this.options.fixedNav) height += this.$container.outerHeight();
    return height;
  }

  // Called when a page is loaded with a hash, or a hash changes (e.g. an inline
  // bookmark is clicked). Scrolls up by the height of the affixed area.
  hashChanged() {
    const scrollY = this.getAffixedHeight();
    setTimeout(() => window.scrollBy(0, -scrollY), 1);
  }

  static markHeaderFixedPosition() {
    const $headerText = $('.id7-header-text');
    $headerText.css('height', '');

    const $h1 = $('.id7-header-text h1');
    const isAlreadyAffixed = $h1.hasClass('affix');

    if (isAlreadyAffixed) $h1.removeClass('affix');

    $headerText.height($headerText.height());

    if (isAlreadyAffixed) $h1.addClass('affix');
  }

  markFixedPosition() {
    let $marker = this.$container.next('.id7-navigation-marker');

    if ($marker.length === 0) {
      $marker = $(Config.Templates.marker);
      this.$container.after($marker);
    }

    $marker.height(this.$container.height());
  }

  wireEventHandlers() {
    if (document.readyState === 'complete') {
      if (this.options.fixedNav) this.affixNav();
      if (this.options.fixedHeader) Navigation.affixHeader();
      this.updateWrappedState();
    } else {
      $(window).on('load', $.proxy(function onLoad() {
        if (this.options.fixedNav) this.affixNav();
        if (this.options.fixedHeader) Navigation.affixHeader();
        this.updateWrappedState();
      }, this));
    }

    const onReflow = $.proxy(function onReflow(e, screenConfig) {
      if (this.options.fitToWidth) this.fitToWidth(screenConfig);
      if (this.options.fixedHeader) Navigation.markHeaderFixedPosition();
      if (this.options.fixedNav) this.markFixedPosition();
      this.updateWrappedState();
      this.updateDropdownBehaviour(screenConfig);
    }, this);

    $(window).on('id7:reflow', onReflow);

    // If the document is already loaded this won't be fired as expected, so fire it manually
    if (document.readyState === 'complete' && typeof $(window).data('id7.reflow') !== 'undefined') {
      // Call reflow immediately
      onReflow({}, currentScreenSize());
    }

    this.$container.on('click', '.nav > li', function onClick(e) {
      let $targetLink = $(e.target).closest('a');
      if ($targetLink.length > 0) {
        return undefined; // Let the default handler take it
      }

      $targetLink = $(this).find('a').first();
      if ($targetLink.length > 0) {
        e.stopPropagation();
        e.preventDefault();

        $targetLink[0].click();

        return false;
      }

      return undefined;
    });

    // Handle in-page bookmarks.
    if (document.location.hash) this.hashChanged();
    $(window).on('hashchange', $.proxy(this.hashChanged, this));
  }
}

$.fn.id7Navigation = function navigationPlugin(options) {
  const o = options || {};

  function attach(i, element) {
    const $container = $(element);
    const nav = new Navigation($.extend({}, $container.data(), o, {
      container: $container,
    }));

    $container.data('id7.navigation', nav);
  }

  return this.each(attach);
};

$(() => {
  $('.id7-navigation').id7Navigation();

  if (!document.body.hasAttribute('id')) {
    document.body.setAttribute('id', 'top');
  }

  // jump to a tab if specified
  const url = document.location.toString();
  if (url.match('#') && url.split('#')[1].length) {
    const $tabLink = $(`.nav-tabs a[href="#${url.split('#')[1]}"]`);
    if ($tabLink) {
      $tabLink.tab('show');
    }
  }

  // Change hash for page-reload
  $('.nav-tabs a').on('shown.bs.tab.id7Navigation', e => changeLocationHash(e.target.hash));
});
