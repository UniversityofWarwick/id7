/*global _:false, Modernizr:false */

(function ($) {
    'use strict';

    var Config = {
        PanelsCSSTemplate: _.template([
            'body .id7-masthead .id7-search .id7-search-box {',
                'border-color: <%= colour %>;',
            '}',
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
                '.carousel-nav a[href="#<%= panel.id %>"]:hover {',
                    'color: <%= panel.lighter_colour %>;',
                '}',
            '<% }); %>'
        ].join('')),
        Defaults: {
            menu: '.carousel-nav',
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

                var $menu = $container.find(this.options.menu);
                var onChangePanel = $.proxy(this.onChangePanel, this);

                $menu.find('a[href^="#"]').off('click.id7.homepage');

                if (isDesktop) {
                    $container.scrollspy({ target: options.menu }); // Idempotent, safe to call multiple times

                    // Smooth scroll
                    $menu.find('a[href^="#"]').on('click.id7.homepage', function (e) {
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
                    });

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
                                var hex = c.toString(16);
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

                            var lighten_factor = 0.2; // 20%

                            var r_brighter = lighten(r, lighten_factor);
                            var g_brighter = lighten(g, lighten_factor);
                            var b_brighter = lighten(b, lighten_factor);

                            panelColours.push({
                                id: id,
                                colour: colour,
                                lighter_colour: rgbToHex(r_brighter, g_brighter, b_brighter),
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
                            applyPanelStyles('#7b428e');
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