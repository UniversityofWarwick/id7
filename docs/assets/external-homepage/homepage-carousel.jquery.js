/*global _:false, Modernizr:false */

(function ($) {
    'use strict';

    var Config = {
        PanelsCSSTemplate: _.template([
            'body .id7-masthead .id7-search .fa {',
                'color: rgba(<%= colour_r %>, <%= colour_g %>, <%= colour_b %>, 0.5);',
            '}',
            'body .id7-masthead .id7-search .twitter-typeahead:hover + .fa {',
                'color: <%= colour %>;',
            '}',
            'body .id7-masthead .id7-search .twitter-typeahead .tt-suggestion.tt-cursor {',
                'background: <%= colour %>;',
            '}',
            'body .form-control:focus {',
                'border-color: <%= colour %>;',
                '-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(<%= colour_r %>, <%= colour_g %>, <%= colour_b %>, 0.6);',
                'box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(<%= colour_r %>, <%= colour_g %>, <%= colour_b %>, 0.6);',
            '}',
            '.id7-page-header {',
                'background: <%= colour %>;',
            '}',
            '.id7-masthead .id7-logo-row nav {',
                'opacity: 1;',
                'filter: alpha(opacity=100);',
            '}',
            '.id7-masthead .id7-logo-row nav a {',
                'color: <%= colour %> !important;',
            '}'
        ].join('')),
        NavCSSTemplate: _.template([
            '<% _.each(panels, function (panel) { %>',
                '.carousel-nav a[href="#<%= panel.id %>"]:hover, .carousel-nav li.active a[href="#<%= panel.id %>"] {',
                    'color: <%= panel.lighter_colour %>;',
                '}',
            '<% }); %>'
        ].join('')),
        Defaults: {
            menu: '.carousel-nav',
            logo: '.id7-logo a',
            panels: '.jumbotron-carousel > article:visible',
            animation: {
                length: 300,
                easing: 'swing'
            },
            keyboardNavigation: {
                enabled: true,
                wrapAround: false
            },
            defaultImageFocalPoint: 'center center',
            defaultImageScaling: 'cover',
            showFullpageImageCarouselTest: function () {
                // As per ID-94, if a browser can't do Flexbox (and therefore can't do panel layouts), serve the mobile hp
                return Modernizr.mq('only all and (min-width: 768px)') && Modernizr.flexbox;
            }
        }
    };

    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and l in the set [0, 1].
     *
     * @param   Number  r       The red color value
     * @param   Number  g       The green color value
     * @param   Number  b       The blue color value
     * @return  Array           The HSL representation
     */
    function rgbToHsl(r, g, b){
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min){
            h = s = 0; // achromatic
        }else{
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return {
            hue: h,
            saturation: s,
            lightness: l
        };
    }

    function hue2rgb(p, q, t){
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h, s, and l are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     *
     * @param   Number  h       The hue
     * @param   Number  s       The saturation
     * @param   Number  l       The lightness
     * @return  Array           The RGB representation
     */
    function hslToRgb(h, s, l){
        var r, g, b;

        if(s == 0){
            r = g = b = l; // achromatic
        } else{
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return {
            red: r * 255,
            green: g * 255,
            blue: b * 255
        };
    }

    /**
     * Display a megamenu popover
     */
    var HomepageCarousel = (function () {
        function HomepageCarousel(o) {
            o = $.extend({}, Config.Defaults, o);
            this.$container = o.container;
            this.options = o;

            // Apply the colour from the first panel - on mobile, this is the only one ever applied
            this.applyPanelStyles(this.$container.find(this.options.panels + '[data-colour]').first().data('colour'));
            this.onScreenResize();
            this.wireEventHandlers();
        }

        $.extend(HomepageCarousel.prototype, {
            wireEventHandlers: function wireEventHandlers() {
                $(window).on('resize.id7.homepage', $.proxy(this.onScreenResize, this));

                // ID-30 on load (i.e. after fonts have loaded) run this, forcing a resize
                $(window).on('load', $.proxy(function (e) {
                    this.onScreenResize(e, true);
                }, this));

                var $container = this.$container;

                // When popovers are open, disable the panel snap
                $(document.body)
                    .on('shown.bs.popover', function () {
                        if ($container.data('plugin_panelSnap')) {
                            $container.panelSnap('disable');
                        }
                    })
                    .on('hidden.bs.popover', function () {
                        if ($container.data('plugin_panelSnap')) {
                            $container.panelSnap('enable');
                        }
                    });
            },

            onScreenResize: function onResize() {
                var isOnLoad = (typeof this.lastIsDesktop === 'undefined');

                // Which stop-point are we on?
                var isDesktop = this.options.showFullpageImageCarouselTest();

                // Early exit if we're not transitioning
                if (isDesktop === this.lastIsDesktop) return;

                this.initPanelSnap(isOnLoad, isDesktop);
                this.initMenu(isOnLoad, isDesktop);
                this.initBackgroundImages(isOnLoad, isDesktop);
                this.initBackgroundColours(isOnLoad, isDesktop);
                this.initHashChangeListener(isOnLoad, isDesktop);
                this.initCaptionIcons(isOnLoad, isDesktop);
                this.initScrollWatcher(isOnLoad, isDesktop);

                this.lastIsDesktop = isDesktop;
            },

            initPanelSnap: function initPanelSnap(isOnLoad, isDesktop) {
                var $container = this.$container;
                var options = this.options;

                var onChangePanel = $.proxy(this.onChangePanel, this);

                if ($container.data('plugin_panelSnap')) {
                    if (isDesktop) {
                        $container.panelSnap('enable');
                    } else {
                        $container.panelSnap('disable');
                    }
                } else if (isDesktop) {
                    // First time init
                    $container.panelSnap({
                        panelSelector: options.panels,
                        slideSpeed: options.animation.length,
                        easing: options.animation.easing,
                        keyboardNavigation: options.keyboardNavigation,
                        onActivate: onChangePanel,
                        onSnapStart: onChangePanel,
                        onSnapFinish: $.proxy(this.onChangePanelComplete, this)
                    });
                }

                // Scroll to right panel on page load
                if (isDesktop && isOnLoad && window.location.hash.length > 0 && $container.find(options.panels + window.location.hash).length) {
                    setTimeout(function() {
                        $('html, body').scrollTop($(window.location.hash).offset().top);
                    }, 100);
                }
            },

            initMenu: function initMenu(isOnLoad, isDesktop) {
                var $container = this.$container;
                var options = this.options;

                var $menu = $container.find(options.menu);
                var $logo = $(options.logo);
                var onChangePanel = $.proxy(this.onChangePanel, this);

                $menu.find('a[href^="#"]').off('click.id7.homepage');
                $logo.off('click.id7.homepage');

                // Link the logo to the first item in the menu
                $logo.attr('href', $menu.find('a[href^="#"]').first().attr('href'));

                if (isDesktop) {
                    $container.scrollspy({ target: options.menu }); // Idempotent, safe to call multiple times

                    var smoothScrollToTarget = function (e) {
                        // prevent default anchor click behavior
                        e.preventDefault();

                        // store hash
                        var hash = this.hash;
                        onChangePanel($(hash));

                        // animate
                        $('html, body').animate({
                            scrollTop: $(hash).offset().top
                        }, options.animation.length, function () {
                            if (!$('.megamenu-links.popover').is(':visible')) {
                                window.location.hash = hash;
                            }
                        });
                    };

                    $menu.find('a[href^="#"]').on('click.id7.homepage', smoothScrollToTarget);
                    $logo.on('click.id7.homepage', smoothScrollToTarget);

                    if ($('#homepage-style-rules-nav').is(':empty')) {
                        var panelColours = [];
                        $container.find(options.panels + '[id][data-colour]').each(function () {
                            function screen(cb, cs) {
                                return Math.round((cb + cs) - ((cb * cs) / 255));
                            }

                            function lighten(cb, ratio) {
                                return Math.min(255, Math.round(cb + (255 * ratio)));
                            }

                            function componentToHex(c) {
                                var hex = Math.round(c).toString(16);
                                return hex.length == 1 ? "0" + hex : hex;
                            }

                            function rgbToHex(r, g, b) {
                                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
                            }

                            var $panel = $(this);
                            var id = $panel.attr('id');
                            var colour = $panel.data('colour');

                            var r = parseInt(colour.substring(1, 3), 16);
                            var g = parseInt(colour.substring(3, 5), 16);
                            var b = parseInt(colour.substring(5, 7), 16);

                            var hsl = rgbToHsl(r, g, b);
                            var rgb_lighter = hslToRgb(hsl.hue, hsl.saturation, 0.9);

                            panelColours.push({
                                id: id,
                                colour: colour,
                                lighter_colour: rgbToHex(rgb_lighter.red, rgb_lighter.green, rgb_lighter.blue),
                                colour_r: parseInt(colour.substring(1, 3), 16),
                                colour_g: parseInt(colour.substring(3, 5), 16),
                                colour_b: parseInt(colour.substring(5, 7), 16)
                            });
                        });

                        $('#homepage-style-rules-nav').text(Config.NavCSSTemplate({
                            panels: panelColours
                        }));
                    }
                }
            },

            initBackgroundColours: function initBackgroundColours(isOnLoad, isDesktop) {
                var $container = this.$container;

                // Init background colours
                $container.find('[data-colour]').each(function () {
                    var $panel = $(this);
                    var colour = $panel.data('colour');
                    var colour_r = parseInt(colour.substring(1, 3), 16);
                    var colour_g = parseInt(colour.substring(3, 5), 16);
                    var colour_b = parseInt(colour.substring(5, 7), 16);

                    $panel.css('background-color', colour);
                    var $content = $panel.find('.caption-content');
                    $content.css('background-color', colour);

                    if (isDesktop) {
                        $content.css('background-color', 'rgba(' + colour_r + ', ' + colour_g + ', ' + colour_b + ', 0.9)');
                    }
                });
            },

            initBackgroundImages: function initBackgroundColours(isOnLoad, isDesktop) {
                var $container = this.$container;
                var options = this.options;

                // Background images
                if (isDesktop) {
                    $container.find('[data-image]').each(function () {
                        var $panel = $(this);

                        $panel.css('background-image', 'url(' + $panel.data('image') + ')');

                        var position = $panel.data('image-focal-point') || options.defaultImageFocalPoint;
                        $panel.css('background-position', position);

                        var scaling = $panel.data('image-scaling') || options.defaultImageScaling;
                        $panel.css('background-size', scaling);
                    });
                } else {
                    $container.find('[data-image]').css({
                        'background-image': '',
                        'background-position': '',
                        'background-size': ''
                    });
                }
            },

            initCaptionIcons: function initCaptionIcons(isOnLoad, isDesktop) {
                var $container = this.$container;

                if (!isDesktop) {
                    $container.find('[data-icon]').each(function () {
                        var $caption = $(this);

                        var $target = $caption;

                        var $icon = $('<img />').addClass('caption-icon').attr({
                            alt: $caption.find('h2').first().text(),
                            src: $caption.data('icon')
                        });

                        if ($caption.find('a').length > 0) {
                            // Shallow clone
                            var $iconLink = $($caption.find('a')[0].cloneNode(false)).addClass('caption-icon-link');
                            $target.prepend($iconLink.append($icon));
                        } else {
                            $target.prepend($icon);
                        }
                    });
                } else {
                    $container.find('[data-icon] .caption-icon-link').remove();
                    $container.find('[data-icon] .caption-icon').remove();
                }
            },

            initHashChangeListener: function initHashChangeListener (isOnLoad, isDesktop) {
                // Handle in-page bookmarks.
                if (isOnLoad && !isDesktop && window.location.hash) this.hashChanged();
                $(window).off('hashchange.id7.homepage');

                if (!Modernizr.mq('only all and (min-width: 768px)')) {
                    $(window).on('hashchange.id7.homepage', $.proxy(this.hashChanged, this));
                }
            },

            hashChanged: function onHashChange() {
                var scrollY = $('.id7-page-header').outerHeight();
                setTimeout(function () {
                    window.scrollBy(0, -scrollY);
                }, 1);
            },

            initScrollWatcher: function initScrollWatcher (isOnLoad, isDesktop) {
                $(window).off('scrollstop.id7.homepage');

                if (!isDesktop) {
                    var $container = this.$container;
                    var options = this.options;
                    var fixedHeight = $('.id7-page-header').outerHeight();
                    var onChangePanel = $.proxy(this.onChangePanel, this);
                    var applyPanelStyles = $.proxy(this.applyPanelStyles, this);

                    $(window).on('scrollstop.id7.homepage', function (e) {
                        var scrollY = fixedHeight + $(window).scrollTop();

                        var beforeScroll = $container.find(options.panels + '[data-colour]:visible').filter(function () {
                            var $panel = $(this);
                            var offsetY = $panel.offset().top;

                            return offsetY <= scrollY;
                        });

                        if (beforeScroll.length == $container.find(options.panels + '[data-colour]:visible').length) {
                            // We've scrolled past all of them, use Warwick Aubergine
                            applyPanelStyles('#5b3069');
                        } else {
                            var $panel = (beforeScroll.length > 0) ? beforeScroll.last() : $container.find(options.panels + '[data-colour]:visible').first();
                            onChangePanel($panel);
                        }
                    });
                }
            },

            onChangePanel: function ($panel) {
                this.applyPanelStyles($panel.data('colour'));
            },

            applyPanelStyles: function (colour) {
                //cb + cs - cb * cs
                //function screen (cb, cs) {
                //    return Math.round((cb + cs) - ((cb * cs) / 255));
                //}
                //
                //function componentToHex(c) {
                //    var hex = c.toString(16);
                //    return hex.length == 1 ? "0" + hex : hex;
                //}
                //
                //function rgbToHex(r, g, b) {
                //    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
                //}

                var r = parseInt(colour.substring(1, 3), 16);
                var g = parseInt(colour.substring(3, 5), 16);
                var b = parseInt(colour.substring(5, 7), 16);

                //var screen_factor = 102; // #666666
                //
                //var r_brighter = screen(r, screen_factor);
                //var g_brighter = screen(g, screen_factor);
                //var b_brighter = screen(b, screen_factor);

                // Note: all this screen/brightening stuff not currently used.

                try {
                    $('#homepage-style-rules-panels').text(Config.PanelsCSSTemplate({
                        colour: colour,
                        //brighter_colour: rgbToHex(r_brighter, g_brighter, b_brighter),
                        colour_r: r,
                        colour_g: g,
                        colour_b: b
                    }));
                } catch (e) {
                    // This fails on IE8. Just accept the default colours
                }
            },

            onChangePanelComplete: function ($panel) {
                // when done, add hash to url
                // (default click behaviour)
                // Only if the more links popover is not open
                if (!$('.megamenu-links.popover').is(':visible')) {
                    window.location.hash = $panel.attr('id');
                }
            }
        });

        return HomepageCarousel;
    })();

    $.fn.homepageCarousel = function (o) {
        o = o || {};

        function attach(i, element) {
            var $container = $(element);
            var homepageCarousel = new HomepageCarousel($.extend({}, $container.data(), o, {
                container: $container
            }));

            $container.data('id7.homepage-carousel', homepageCarousel);
        }

        return this.each(attach);
    };

    $(function() {
        $('body').homepageCarousel();
    });
})(jQuery);