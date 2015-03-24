(function ($) {
    'use strict';

    var Config = {
        CSSTemplate: _.template([
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
            '.id7-masthead .id7-logo-row nav a {',
                'color: <%= colour %> !important;',
            '}'
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
                        window.location.hash = hash;
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
            },

            onChangePanel: function ($panel) {
                var colour = $panel.data('colour');

                $('#homepage-style-rules').text(Config.CSSTemplate({
                    colour: colour,
                    colour_r: parseInt(colour.substring(1, 3), 16),
                    colour_g: parseInt(colour.substring(3, 5), 16),
                    colour_b: parseInt(colour.substring(5, 7), 16)
                }));
            },

            onChangePanelComplete: function ($panel) {
                // when done, add hash to url
                // (default click behaviour)
                window.location.hash = $panel.attr('id');
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