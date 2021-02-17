/* eslint-env browser */
import $ from 'jquery';
import _ from 'lodash-es';

import currentScreenSize from './screen-sizes';
import changeLocationHash from './change-location-hash';
import { getVisibleTextNodesIn, wrapNode } from './dom-utils';

// Get Headroom from window instead of importing it so that if an app doesn't want to use Headroom
// at all, they can just define window.Headroom = { cutsTheMustard: false };
// eslint-disable-next-line prefer-destructuring
const Headroom = window.Headroom;

const Config = {
  Templates: {
    moreContainer: `<ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fas fa-caret-down" aria-hidden="true"></i><span class="sr-only">Display more items</span></a>
          <ul class="dropdown-menu" role="menu"></ul>
        </li>
      </ul>`.trim(),
    marker: '<div class="id7-navigation-marker"></div>',
  },
  Defaults: {
    fixedHeader: Headroom.cutsTheMustard,
    fixedNav: Headroom.cutsTheMustard,
    fitToWidth: false,
    collapseSmallscreen: false,
    keyboard: true,
    trimLinkTitles: {
      maxLength: 60,
      append: '…',
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

    function ariaHiddenSpan() {
      const span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      return span;
    }

    this.$container.find('.nav a').each(function trimTitle() {
      // All text nodes that aren't contained in an .sr-only element
      const textNodes = getVisibleTextNodesIn(this);
      const originalText = $(textNodes).text();

      if (originalText.length <= maxLength) {
        return true;
      }

      const $link = $(this);
      $link.prepend($('<span>').addClass('sr-only').text(originalText));
      $link.attr('title', originalText);

      // Iterate through the text nodes, adding up the length. When we are about to
      // go over the limit, truncate that last text node and remove all text nodes after that.

      let runningLength = 0;
      let overLength = false;
      $.each(textNodes, (i, textNode) => {
        const textLength = textNode.length;
        if (overLength) {
          // We already started trimming, remove the rest of the nodes.
          textNode.parentNode.removeChild(textNode);
        } else if (runningLength + textLength <= maxLength) {
          // We're under budget, leave this node as-is and continue
          runningLength += textLength;
          wrapNode(textNode, ariaHiddenSpan());
        } else {
          // This text node will take us over the limit - let's trim it

          // Tell outer loop to delete any text nodes after this one.
          overLength = true;

          // Split into words to avoid stopping mid-word.
          const words = textNode.textContent.split(/\s+/g);
          const textBuilder = [];
          $.each(words, (i2, word) => {
            if ((`${textBuilder.join(' ')} ${word}`).length > maxLength) {
              return false; // break
            }
            textBuilder.push(word);
            return true;
          });

          // eslint-disable-next-line no-param-reassign
          textNode.textContent = textBuilder.join(' ') + append;
          // Don't really need to do this because overLength=true takes over. Shrug
          runningLength += textNode.length;
          wrapNode(textNode, ariaHiddenSpan());
        }
      });

      return true;
    });
  }

  static affixHeader() {
    const $header = $('.id7-header-text');
    if ($header.length) {
      // Set height in stone
      Navigation.markHeaderFixedPosition();

      const offsetTop = $header.offset().top;
      let headroomOffset = offsetTop;

      const $mainContent = $('.id7-main-content-area');

      if ($mainContent.length > 0) {
        headroomOffset = $mainContent.offset().top;
      }

      const headroomConfig = $.extend(Config.HeadroomEvents, { offset: headroomOffset });

      $header.affix({
        offset: {
          top: offsetTop,
        },
      }).headroom(headroomConfig);
    }
  }

  affixNav() {
    const $nav = this.$container;

    const $header = $('.id7-header-text');
    let offsetTop;
    if ($header.length) {
      offsetTop = $header.offset().top;
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
          (el) => $(el).is(':visible') && $(el).position().top > 0,
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
    if (this.options.fixedHeader) height += $('.id7-header-text').outerHeight();
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
    const $header = $('.id7-header-text');
    const $parent = $header.parent();
    $parent.css('height', '');

    const isAlreadyAffixed = $header.hasClass('affix');

    if (isAlreadyAffixed) $header.removeClass('affix');

    $parent.height($parent.height());

    if (isAlreadyAffixed) $header.addClass('affix');
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

    // Begin accessibility
    // Opt-out mechanism (data-keyboard="false" on .id7-navigation)
    if (!this.options.keyboard) {
      return;
    }

    this.$container.on('keydown', (ev) => {
      const $focus = $(document.activeElement);

      const $li = $focus.parent();
      const isDown = ev.key === 'ArrowDown';
      const isUp = ev.key === 'ArrowUp';

      const dropdownOpen = $li.find('.dropdown-menu').parent().hasClass('open');

      // Allow opening and closing the focused dropdown with up/down
      // BUG closing doesn't work because $li is the wrong element
      if ($li.hasClass('dropdown') && ((isDown && !dropdownOpen) || (isUp && dropdownOpen))) {
        $li.find('> a').dropdown('toggle');
        ev.preventDefault();
        const $elementToFocus = dropdownOpen
          ? $li.find('> a')
          : $li.find('.dropdown-menu').find('li:first-child a'); // first item of just-opened menu

        $elementToFocus.focus();
        return false;
      }

      //                            <li>     <ul class="nav navbar-nav">
      const primaryNavItemInFocus = $li.parent().hasClass('navbar-nav');

      //                          <li>     <ul class="dropdown-menu">
      const dropdownItemInFocus = $li.parent().hasClass('dropdown-menu');

      // If we hit right with a nav item focused
      const arrowRight = ev.key === 'ArrowRight';
      if (arrowRight && primaryNavItemInFocus) {
        if ($li.next().length > 0 && $li.next().children().length > 0) {
          $li.next().children().first().focus();
        } else {
          Navigation.tryNextNav($focus);
        }
      } else if (arrowRight && dropdownItemInFocus) {
        // We're inside a dropdown
        // Move to the right hand nav element, opening its dropdown
        // and closing this one in the process

        //                           li.dropdown
        const $nextNav = $li.parents().eq(1).next();
        Navigation.openOrFocusNav($li, $nextNav);
        return false;
      }

      // if we hit left with a nav item focused
      const arrowLeft = ev.key === 'ArrowLeft';
      if (arrowLeft && primaryNavItemInFocus) {
        if ($li.prev().length > 0 && $li.prev().children().length > 0) {
          $li.prev().children().first().focus();
        } else {
          Navigation.tryPrevNav($focus);
        }
      } else if (arrowLeft && dropdownItemInFocus) {
        // We're inside a dropdown
        // Move to the left hand nav element, opening its dropdown
        // and closing this one in the process

        //                           li.dropdown
        const $nextNav = $li.parents().eq(1).prev();
        Navigation.openOrFocusNav($li, $nextNav);
        return false;
      }

      return true;
    });

    $('.dropdown-menu', this.$container).each((i, el) => {
      const $el = $(el);
      const $linkElement = $el.parent().find('> a');
      const EXPECTED_DATA_TOGGLE_VALUE = 'dropdown';
      if ($linkElement.length > 0 && $linkElement.attr('data-toggle') !== EXPECTED_DATA_TOGGLE_VALUE) {
        $linkElement.attr('data-toggle', EXPECTED_DATA_TOGGLE_VALUE);
        $linkElement.dropdown(); // we added it afterwards, need to manually call dropdown()
      }
      if ($linkElement.length > 0 && $linkElement.attr('aria-haspopup') !== 'true') {
        $linkElement.attr('aria-haspopup', 'true');
      }

      // Add a separate show-dropdown button for screen readers
      const $buttonSpan = $('<span></span>');
      function updateButtonText(expanded) {
        const verb = expanded ? 'Hide' : 'Show';
        $buttonSpan.text(`${verb} submenu`);
        $buttonSpan.append($('<span class="sr-only"></span>').text(` for ${$linkElement.text()}`));
      }
      updateButtonText(false);
      const $button = $('<button class="nav-dropdown-button sr-only sr-only-focusable"></button>')
        .append($buttonSpan);
      // Enter key on the button toggles the dropdown
      $button.on('click', (e) => {
        e.preventDefault();
        const expanded = Navigation.toggleDropdown($el);
        $button.attr('aria-expanded', $linkElement.attr('aria-expanded'));
        if (expanded) {
          // Standard dropdown code refocuses the main link, but we just activated the button
          // so steal focus back
          $button.focus();
        }
        updateButtonText(expanded);
        return false;
      });
      $linkElement.after($button);

      $el.parent().find('> ul > li').attr('role', 'menuitem');
      $linkElement.on('click keypress', (ev) => {
        if (ev.type !== 'click' && ev.key !== 'Enter') {
          return;
        }
        if (typeof $linkElement.attr('href') !== 'undefined') {
          window.location = $linkElement.attr('href');
        }
        ev.stopPropagation();
      });
    });
  }

  /**
   * Toggle the dropdown that contains this element
   * @param $el jQuery object of any element contained by the .dropdown item
   * @return {boolean} whether the dropdown is now expanded
   */
  static toggleDropdown($el) {
    const $a = $el.closest('.dropdown').find('> a');
    $a.dropdown('toggle');
    return $a.attr('aria-expanded') === 'true';
  }

  /**
   * For a given $nextNav, open its dropdown (if it has one)
   * or otherwise just focus on it.
   *
   * Closes $li's dropdown.
   */
  static openOrFocusNav($li, $nextNav) {
    if ($nextNav.length === 0) {
      return;
    }
    Navigation.toggleDropdown($li); // close current dropdown

    if ($nextNav.hasClass('dropdown')) {
      $nextNav.find('> a').dropdown('toggle');
      $nextNav.find('> ul > li:first-child > a').focus();
    } else {
      $nextNav.find('> a').focus();
    }
  }

  static tryNextNav($focus) {
    Navigation.tryNextPrevNav($focus.parents('.navbar'), true);
  }

  static tryPrevNav($focus) {
    Navigation.tryNextPrevNav($focus.parents('.navbar'), false);
  }

  static tryNextPrevNav($el, next) {
    const $subsequentNav = next ? $el.next('.navbar') : $el.prev('.navbar');
    const $visibleLinks = $subsequentNav.find('a:visible');
    if ($subsequentNav.length > 0 && $visibleLinks.length > 0) {
      const $elementToFocus = next ? $visibleLinks.first() : $visibleLinks.last();
      $elementToFocus.focus();
    } if ($subsequentNav.length > 0) {
      return this.tryNextPrevNav($subsequentNav.first(), next); // recurse
    }
    return undefined;
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
  const $navs = $('.id7-navigation');
  $navs.id7Navigation();

  if (!document.body.hasAttribute('id')) {
    document.body.setAttribute('id', 'top');
  }

  // add jump to navigation link if site author hasn't updated template
  const DEFAULT_NAV_ID = 'primary-nav';

  const $skipToContent = $('.sr-only.sr-only-focusable[href="#main"]');
  const $primaryNav = $navs.first();

  const hasSkipToContent = $skipToContent.length === 1;
  const hasPrimaryNav = $primaryNav.length === 1;
  const doesNotHaveSkipToNav = $(`.sr-only.sr-only-focusable[href="#${DEFAULT_NAV_ID}"]`).length === 0;
  if (hasPrimaryNav && $primaryNav.attr('id') === undefined) {
    $primaryNav.attr('id', DEFAULT_NAV_ID);
  }

  if (doesNotHaveSkipToNav && hasSkipToContent && hasPrimaryNav) {
    const $link = $('<a>').addClass('sr-only').addClass('sr-only-focusable').attr('href', `#${$primaryNav.attr('id')}`)
      .text('Skip to navigation');
    $skipToContent.after($link);
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
  $('.nav-tabs a').on('shown.bs.tab.id7Navigation', (e) => changeLocationHash(e.target.hash));
});
