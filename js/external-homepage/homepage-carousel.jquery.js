/* eslint-env browser */
import $ from 'jquery';
import _ from 'lodash-es';
import PanelSnap from 'panelsnap';

import FeatureDetect from '../feature-detect';
import changeLocationHash from '../change-location-hash';

const Config = {
  /**
   * @return {string}
   */
  PanelsCSSTemplate(o) {
    return `body .id7-masthead .id7-search .fa {color: rgba(${_.escape(o.colour_r)}, ${_.escape(o.colour_g)}, ${_.escape(o.colour_b)}, 0.5);}
      body .id7-masthead .id7-search .twitter-typeahead:hover + .fa {color: ${_.escape(o.colour)};}
      body .id7-masthead .id7-search .twitter-typeahead .tt-suggestion.tt-cursor {background: ${_.escape(o.colour)};}
      body .form-control:focus {border-color: ${_.escape(o.colour)}; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(${_.escape(o.colour_r)}, ${_.escape(o.colour_g)}, ${_.escape(o.colour_b)}, 0.6); box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(${_.escape(o.colour_r)}, ${_.escape(o.colour_g)}, ${_.escape(o.colour_b)}, 0.6);}
      .id7-page-header {background: ${_.escape(o.colour)};}
      .id7-masthead .id7-logo-row nav {opacity: 1; filter: alpha(opacity=100);}
      .id7-masthead .id7-logo-row nav a {color: ${_.escape(o.colour)} !important;}`;
  },
  /**
   * @return {string}
   */
  NavCSSTemplate(o) {
    return _.map(o.panels, panel => `.carousel-nav a[href="#${_.escape(panel.id)}"]:hover, .carousel-nav li.active a[href="#${_.escape(panel.id)}"] {color: ${_.escape(panel.lighter_colour)};}`).join('');
  },
  Defaults: {
    menu: '.carousel-nav',
    logo: '.id7-logo a',
    panels: '.jumbotron-carousel > article',
    menuSelector: 'a',
    animation: {
      length: 300,
      easing: 'swing',
    },
    defaultImageFocalPoint: 'center center',
    defaultImageScaling: 'cover',
    showFullpageImageCarouselTest() {
      // As per ID-94, if a browser can't do Flexbox (and therefore can't do panel layouts),
      // serve the mobile hp
      return FeatureDetect.mq('only all and (min-width: 768px)') && FeatureDetect.cssSupports('display', 'flex');
    },
  },
};

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   red: number       The red color value
 * @param   green: number       The green color value
 * @param   blue: number       The blue color value
 * @return  {saturation: number, lightness: number, hue: number}   The HSL representation
 */
function rgbToHsl(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h;
  let s;
  const l = (max + min) / 2;

  if (max === min) {
    h = 0;
    s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: throw new Error();
    }
    h /= 6;
  }

  return {
    hue: h,
    saturation: s,
    lightness: l,
  };
}

function hue2rgb(p, q, rawT) {
  let t = rawT;
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   h: number       The hue
 * @param   s: number       The saturation
 * @param   l: number       The lightness
 * @return  {red: number, green: number, blue: number}           The RGB representation
 */
function hslToRgb(h, s, l) {
  let r;
  let g;
  let b;

  if (s === 0) {
    r = l;
    g = l;
    b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    red: r * 255,
    green: g * 255,
    blue: b * 255,
  };
}

/**
 * Display a megamenu popover
 */
class HomepageCarousel {
  constructor(options) {
    const o = $.extend({}, Config.Defaults, options);
    this.$container = o.container;
    this.options = o;

    // Apply the colour from the first panel - on mobile, this is the only one ever applied
    HomepageCarousel.applyPanelStyles(this.$container.find(`${this.options.panels}[data-colour]`).first().data('colour'));
    this.onScreenResize();
    this.wireEventHandlers();
  }

  wireEventHandlers() {
    $(window).on('resize.id7.homepage', $.proxy(this.onScreenResize, this));

    // ID-30 on load (i.e. after fonts have loaded) run this, forcing a resize
    $(window).on('load', $.proxy(function onLoad(e) {
      this.onScreenResize(e, true);
    }, this));

    const { $container } = this;

    // When popovers are open, disable the panel snap
    $(document.body)
      .on('shown.bs.popover', () => {
        if ($container.data('panelSnap')) {
          $container.data('panelSnap').disable();
        }
      })
      .on('hidden.bs.popover', () => {
        if ($container.data('panelSnap')) {
          $container.data('panelSnap').enable();
        }
      });
  }

  onScreenResize() {
    const isOnLoad = (typeof this.lastIsDesktop === 'undefined');

    // Which stop-point are we on?
    const isDesktop = this.options.showFullpageImageCarouselTest();

    // Don't re-init if we're not transitioning
    if (isDesktop !== this.lastIsDesktop) {
      this.initPanelSnap(isOnLoad, isDesktop);
      this.initMenu(isOnLoad, isDesktop);
      this.initBackgroundImages(isOnLoad, isDesktop);
      this.initIframes(isOnLoad, isDesktop);
      this.initBackgroundColours(isOnLoad, isDesktop);
      HomepageCarousel.initHashChangeListener(isOnLoad, isDesktop);
      this.initCaptionIcons(isOnLoad, isDesktop);
      this.initScrollWatcher(isOnLoad, isDesktop);

      this.lastIsDesktop = isDesktop;
    }

    // Warning: be careful about what events you're looking for here
    this.resizeIframes(isOnLoad, isDesktop);
  }

  initPanelSnap(isOnLoad, isDesktop) {
    const { $container, options } = this;

    if ($container.data('panelSnap')) {
      if (isDesktop) {
        $container.data('panelSnap').enable();
      } else {
        $container.data('panelSnap').disable();
      }
    } else if (isDesktop) {
      // First time init
      const panelSnap = new PanelSnap({
        container: $container.get()[0],
        panelSelector: options.panels,
        duration: options.animation.length,
        easing: options.animation.easing,
      });

      panelSnap.on('activatePanel', HomepageCarousel.onChangePanel);
      panelSnap.on('snapStart', HomepageCarousel.onChangePanel);
      panelSnap.on('snapStop', HomepageCarousel.onChangePanelComplete);

      $container.data('panelSnap', panelSnap);

      $(options.menu).on('click', options.menuSelector, function snapToPanel(e) {
        const $target = $($(this).attr('href'));
        if ($target.length) {
          e.stopPropagation();
          e.preventDefault();

          panelSnap.snapToPanel($target.get()[0]);
        }
      });
    }

    // Scroll to right panel on page load
    if (isDesktop
      && isOnLoad
      && window.location.hash.length > 0
      && $container.find(options.panels + window.location.hash).length
    ) {
      setTimeout(() => $('html, body').scrollTop($(window.location.hash).offset().top), 100);
    }
  }

  initMenu(isOnLoad, isDesktop) {
    const { $container, options } = this;

    const $menu = $container.find(options.menu);
    const $logo = $(options.logo);

    $menu.find('a[href^="#"]').off('click.id7.homepage');
    $logo.off('click.id7.homepage');

    // Link the logo to the first item in the menu
    $logo.attr('href', $menu.find('a[href^="#"]').first().attr('href'));

    if (isDesktop) {
      $container.scrollspy({ target: options.menu }); // Idempotent, safe to call multiple times

      const smoothScrollToTarget = function smoothScrollToTarget(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        const { hash } = this;
        HomepageCarousel.onChangePanel($(hash));

        // animate
        $('html, body').animate({
          scrollTop: $(hash).offset().top,
        }, options.animation.length, () => {
          if (!$('.megamenu-links.popover').is(':visible')) {
            changeLocationHash(hash);
          }
        });
      };

      $menu.find('a[href^="#"]').on('click.id7.homepage', smoothScrollToTarget);
      $logo.on('click.id7.homepage', smoothScrollToTarget);

      const $navStyles = $('#homepage-style-rules-nav');

      if ($navStyles.is(':empty')) {
        const panelColours = [];
        $container.find(`${options.panels}[id][data-colour]`).each(function collatePanelColours() {
          function componentToHex(c) {
            const hex = Math.round(c).toString(16);
            return hex.length === 1 ? `0${hex}` : hex;
          }

          function rgbToHex(r, g, b) {
            return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
          }

          const $panel = $(this);
          const id = $panel.attr('id');
          const colour = $panel.data('colour');

          const r = parseInt(colour.substring(1, 3), 16);
          const g = parseInt(colour.substring(3, 5), 16);
          const b = parseInt(colour.substring(5, 7), 16);

          const hsl = rgbToHsl(r, g, b);
          const lighterRGB = hslToRgb(hsl.hue, hsl.saturation, 0.9);

          panelColours.push({
            id,
            colour,
            lighter_colour: rgbToHex(lighterRGB.red, lighterRGB.green, lighterRGB.blue),
            colour_r: parseInt(colour.substring(1, 3), 16),
            colour_g: parseInt(colour.substring(3, 5), 16),
            colour_b: parseInt(colour.substring(5, 7), 16),
          });
        });

        $navStyles.text(Config.NavCSSTemplate({
          panels: panelColours,
        }));
      }
    }
  }

  initBackgroundColours(isOnLoad, isDesktop) {
    const { $container } = this;

    // Init background colours
    $container.find('[data-colour]').each(function setBackgroundColour() {
      const $panel = $(this);
      const colour = $panel.data('colour');
      const red = parseInt(colour.substring(1, 3), 16);
      const green = parseInt(colour.substring(3, 5), 16);
      const blue = parseInt(colour.substring(5, 7), 16);

      $panel.css('background-color', colour);
      const $content = $panel.find('.caption-content');
      $content.css('background-color', colour);

      if (isDesktop) {
        $content.css('background-color', `rgba(${red}, ${green}, ${blue}, 0.9)`);
      }
    });
  }

  initBackgroundImages(isOnLoad, isDesktop) {
    const { $container, options } = this;

    // Background images
    if (isDesktop) {
      $container.find('[data-image]').each(function setPanelBackground() {
        const $panel = $(this);

        $panel.css('background-image', `url(${$panel.data('image')})`);

        const position = $panel.data('image-focal-point') || options.defaultImageFocalPoint;
        $panel.css('background-position', position);

        const scaling = $panel.data('image-scaling') || options.defaultImageScaling;
        $panel.css('background-size', scaling);
      });
    } else {
      $container.find('[data-image]').css({
        'background-image': '',
        'background-position': '',
        'background-size': '',
      });
    }
  }

  initIframes(isOnLoad, isDesktop) {
    const { $container } = this;

    // Embedded content (mostly video)
    if (isDesktop) {
      $container.find('[data-iframe]').each(function embedVideo() {
        const $panel = $(this);

        if ($panel.find('> .iframe-container').length) return;

        $panel.prepend(
          $('<div />').addClass('iframe-container').append(
            $('<iframe />')
              .attr({
                src: $panel.data('iframe'),
                frameborder: 0,
              })
              .prop('allowfullscreen', true),
          ),
        );
      });
    } else {
      $container.find('[data-iframe]').find('> .iframe-container').remove();
    }
  }

  resizeIframes(isOnLoad, isDesktop) {
    const { $container } = this;

    if (isDesktop) {
      $container.find('[data-iframe]').each(function resizeIframe() {
        const $panel = $(this);
        const panelWidth = $panel.width();
        const panelHeight = $panel.height();

        const aspectRatio = panelWidth / panelHeight;
        const targetAspectRatio = 1920 / 1080;

        let width;
        let height;
        if (aspectRatio > targetAspectRatio) {
          width = panelWidth;
          height = Math.ceil(panelWidth / targetAspectRatio);
        } else {
          height = panelHeight;
          width = Math.ceil(panelHeight * targetAspectRatio);
        }

        $panel.find('> .iframe-container > iframe').attr({ width, height });
      });
    }
  }

  initCaptionIcons(isOnLoad, isDesktop) {
    const { $container } = this;

    if (!isDesktop) {
      $container.find('[data-icon]').each(function initCaptionIcon() {
        const $caption = $(this);

        const $target = $caption;

        const $icon = $('<img />').addClass('caption-icon').attr({
          alt: $caption.find('h2').first().text(),
          src: $caption.data('icon'),
        });

        if ($caption.find('a').length > 0) {
          // Shallow clone
          const $iconLink = $($caption.find('a')[0].cloneNode(false)).addClass('caption-icon-link');
          $target.prepend($iconLink.append($icon));
        } else {
          $target.prepend($icon);
        }
      });
    } else {
      $container.find('[data-icon] .caption-icon-link').remove();
      $container.find('[data-icon] .caption-icon').remove();
    }
  }

  static initHashChangeListener(isOnLoad, isDesktop) {
    // Handle in-page bookmarks.
    if (isOnLoad && !isDesktop && window.location.hash) HomepageCarousel.hashChanged();
    $(window).off('hashchange.id7.homepage');

    if (!FeatureDetect.mq('only all and (min-width: 768px)')) {
      $(window).on('hashchange.id7.homepage', HomepageCarousel.hashChanged);
    }
  }

  static hashChanged() {
    const scrollY = $('.id7-page-header').outerHeight();
    setTimeout(() => window.scrollBy(0, -scrollY), 1);
  }

  initScrollWatcher(isOnLoad, isDesktop) {
    $(window).off('scrollstop.id7.homepage');

    if (!isDesktop) {
      const { $container, options } = this;

      const fixedHeight = $('.id7-page-header').outerHeight();

      $(window).on('scrollstop.id7.homepage', () => {
        const scrollY = fixedHeight + $(window).scrollTop();

        const beforeScroll = $container.find(`${options.panels}[data-colour]:visible`).filter(function isAboveScroll() {
          const $panel = $(this);
          const offsetY = $panel.offset().top;

          return offsetY <= scrollY;
        });

        if (beforeScroll.length === $container.find(`${options.panels}[data-colour]:visible`).length) {
          // We've scrolled past all of them, use Warwick Aubergine
          HomepageCarousel.applyPanelStyles('#5b3069');
        } else {
          const $panel = (beforeScroll.length > 0) ? beforeScroll.last() : $container.find(`${options.panels}[data-colour]:visible`).first();
          HomepageCarousel.onChangePanel($panel);
        }
      });
    }
  }

  static onChangePanel(panel) {
    HomepageCarousel.applyPanelStyles($(panel).data('colour'));
  }

  static applyPanelStyles(colour) {
    if (!colour) return;

    const r = parseInt(colour.substring(1, 3), 16);
    const g = parseInt(colour.substring(3, 5), 16);
    const b = parseInt(colour.substring(5, 7), 16);

    try {
      $('#homepage-style-rules-panels').text(Config.PanelsCSSTemplate({
        colour,
        // brighter_colour: rgbToHex(r_brighter, g_brighter, b_brighter),
        colour_r: r,
        colour_g: g,
        colour_b: b,
      }));
    } catch (e) {
      // This fails on IE8. Just accept the default colours
    }
  }

  static onChangePanelComplete(panel) {
    // when done, add hash to url
    // (default click behaviour)
    // Only if the more links popover is not open
    if (!$('.megamenu-links.popover').is(':visible')) {
      changeLocationHash(`#${$(panel).attr('id')}`);
    }
  }
}

$.fn.homepageCarousel = function initPlugin(o = {}) {
  function attach(i, element) {
    const $container = $(element);
    const homepageCarousel = new HomepageCarousel($.extend({}, $container.data(), o, {
      container: $container,
    }));

    $container.data('id7.homepage-carousel', homepageCarousel);
  }

  return this.each(attach);
};

$(() => $('body').homepageCarousel());
