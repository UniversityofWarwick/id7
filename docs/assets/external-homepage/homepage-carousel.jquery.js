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
            //'.id7-page-header::after {',
            //    'background: <%= colour %>;',
            //'}',
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
            panels: '.jumbotron-carousel > article',
            animation: {
                length: 300,
                easing: 'swing'
            },
            keyboardNavigation: {
                enabled: true,
                wrapAround: false
            },
            defaultImageFocalPoint: 'center center',
            defaultImageScaling: 'cover'
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

            this.init();
        }

        $.extend(HomepageCarousel.prototype, {
            init: function init() {
                var $container = this.$container;
                var $menu = $container.find(this.options.menu);
                var options = this.options;

                var onChangePanel = $.proxy(this.onChangePanel, this);

                $container
                    .scrollspy({ target: options.menu })
                    .panelSnap({
                        //$menu: $menu,
                        //menuSelector: 'a[href^="#"]',
                        panelSelector: options.panels,
                        slideSpeed: options.animation.length,
                        easing: options.animation.easing,
                        keyboardNavigation: options.keyboardNavigation,
                        onActivate: onChangePanel,
                        onSnapStart: onChangePanel,
                        onSnapFinish: $.proxy(this.onChangePanelComplete, this)
                    });

                // Smooth scroll
                $menu.find('a[href^="#"]').on('click', function(e) {
                    // prevent default anchor click behavior
                    e.preventDefault();

                    // store hash
                    var hash = this.hash;
                    onChangePanel($(hash));

                    // animate
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, options.animation.length, function() {
                        if (!$('.megamenu-links.popover').is(':visible')) {
                            window.location.hash = hash;
                        }
                    });
                });

                // Init background colours
                $container.find('[data-colour]').each(function () {
                    var $panel = $(this);
                    var colour = $panel.data('colour');
                    var colour_r = parseInt(colour.substring(1, 3), 16);
                    var colour_g = parseInt(colour.substring(3, 5), 16);
                    var colour_b = parseInt(colour.substring(5, 7), 16);

                    $panel.css('background-color', colour);
                    $panel.find('.caption-content')
                        .css('background-color', colour)
                        .css('background-color', 'rgba(' + colour_r + ', ' + colour_g + ', ' + colour_b + ', 0.9)');
                });

                // Background images
                $container.find('[data-image]').each(function () {
                    var $panel = $(this);

                    $panel.css('background-image', 'url(' + $panel.data('image') + ')');

                    var position = $panel.data('image-focal-point') || options.defaultImageFocalPoint;
                    $panel.css('background-position', position);

                    var scaling = $panel.data('image-scaling') || options.defaultImageScaling;
                    $panel.css('background-size', scaling);
                });

                var panelColours = [];
                $container.find(options.panels + '[id][data-colour]').each(function () {
                    function screen (cb, cs) {
                        return Math.round((cb + cs) - ((cb * cs) / 255));
                    }

                    function lighten (cb, ratio) {
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

                // Scroll to right panel on page load
                if (window.location.hash && $container.find(options.panels + window.location.hash).length) {
                    setTimeout(function() {
                        $('html, body').scrollTop($(window.location.hash).offset().top);
                    }, 100);
                }
            },

            onChangePanel: function ($panel) {
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

                var colour = $panel.data('colour');

                var r = parseInt(colour.substring(1, 3), 16);
                var g = parseInt(colour.substring(3, 5), 16);
                var b = parseInt(colour.substring(5, 7), 16);

                //var screen_factor = 102; // #666666
                //
                //var r_brighter = screen(r, screen_factor);
                //var g_brighter = screen(g, screen_factor);
                //var b_brighter = screen(b, screen_factor);

                // Note: all this screen/brightening stuff not currently used.

                $('#homepage-style-rules-panels').text(Config.PanelsCSSTemplate({
                    colour: colour,
                    //brighter_colour: rgbToHex(r_brighter, g_brighter, b_brighter),
                    colour_r: r,
                    colour_g: g,
                    colour_b: b
                }));
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