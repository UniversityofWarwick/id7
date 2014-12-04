(function($) { 'use strict';
    var Config = {
        Breadcrumbs: {
            ICON_OPEN: 'fa-ellipsis-h fa-rotate-90',
            ICON_CLOSED: 'fa-ellipsis-h'
        },
        ScreenSizes: [
            { name: 'lg', test: function() { return window.matchMedia("(min-width: 1200px)").matches; }, container: 1170 },
            { name: 'md', test: function() { return window.matchMedia("(min-width: 992px)").matches; }, container: 970 },
            { name: 'sm', test: function() { return window.matchMedia("(min-width: 768px)").matches; }, container: 750 },
            { name: 'xs', test: function() { return true; } }
        ],
        Templates: {
            moreContainer: [
                '<ul class="nav navbar-nav navbar-right">',
                    '<li class="dropdown">',
                        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">More <span class="caret"></span></a>',
                        '<ul class="dropdown-menu" role="menu"></ul>',
                    '</li>',
                '</ul>'
            ].join('')
        },
        Defaults: {
            fixed: true,
            flipBreadcrumbIcons: true,
            fitToWidth: true,
            equaliseHeight: true,
            trimLinkTitles: {
                maxLength: 60,
                append: '&hellip;'
            }
        }
    };

    var Navigation = (function() {
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

            this.wireEventHandlers();
        }

        $.extend(Navigation.prototype, {
            trimLinkTitles: function trimLinkTitles() {
                var options = this.options.trimLinkTitles;

                this.$container.find('.nav a').filter(function() {
                    return $.trim($(this).text()).length > options.maxLength;
                }).each(function() {
                    var $link = $(this);
                    var linkTitle = $.trim($link.text());

                    // Split on spaces to avoid breaking in the middle of a word
                    var words = linkTitle.split(/\s+/g);
                    var newLinkTitle = [];

                    $.each(words, function(i, word) {
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
                        top: this.$container.offset().top - $('#utility-bar').height()
                    }
                });
            },

            flipBreadcrumbIcons: function flipBreadcrumbIcons() {
                this.$container.find('.navbar-brand[data-target]').each(function() {
                    var $trigger = $(this);
                    var $icon = $trigger.find('.fa').addClass(Config.Breadcrumbs.ICON_CLOSED);

                    var $element = $($trigger.attr('data-target'));

                    $element.on('show.bs.collapse', function() {
                        $icon.removeClass(Config.Breadcrumbs.ICON_CLOSED).addClass(Config.Breadcrumbs.ICON_OPEN);
                    });
                    $element.on('hide.bs.collapse', function() {
                        $icon.removeClass(Config.Breadcrumbs.ICON_OPEN).addClass(Config.Breadcrumbs.ICON_CLOSED);
                    });
                });
            },

            _screenConfig: function screenConfig() {
                return _.find(Config.ScreenSizes, function(screenConfig) { return screenConfig.test(); });
            },

            onScreenResize: function onResize() {
                // Which stop-point are we on?
                var screenConfig = this._screenConfig();
                if (screenConfig.name === this.lastScreenConfig) return;

                if (this.options.fitToWidth) this.fitToWidth(screenConfig);
                if (this.options.equaliseHeight) this.equaliseHeight(screenConfig);

                this.lastScreenConfig = screenConfig.name;
            },

            fitToWidth: function fitToWidth(screenConfig) {
                this.$container.find('.navbar-collapse').each(function() {
                    var $collapse = $(this);
                    var $nav = $collapse.find('> .nav').first();
                    var $moreContainer = $collapse.find('> .navbar-right');

                    $moreContainer.find('> .dropdown > .dropdown-menu > li').each(function() {
                        var $li = $(this);
                        $nav.append($li);
                    });

                    if ($moreContainer.length == 0) {
                        $moreContainer = $(Config.Templates.moreContainer);
                        $collapse.append($moreContainer);
                    }

                    $moreContainer.hide();

                    if (screenConfig.name != 'xs') {
                        var isWrapped = function () {
                            return _.some(_.union($nav.find('> li').get(), $collapse.find('> .navbar-right').get()), function (el) {
                                return $(el).position().top > 0;
                            });
                        };

                        if (isWrapped()) {
                            $moreContainer.show();

                            var i = 100; // Infinite loop protection
                            do {
                                // Remove the last element and prepend it to the more container
                                $moreContainer.find('> .dropdown > .dropdown-menu').prepend($nav.find('> li').last());
                            } while (isWrapped() & --i > 0);
                        }
                    }
                });
            },

            equaliseHeight: function equaliseHeight(screenConfig) {
                this.$container.find('.nav-fixed-width').closest('.navbar').each(function() {
                    var $navbar = $(this);
                    var $nav = $navbar.find('.navbar-collapse > .nav').first();
                    var $header = $navbar.find('> .navbar-header > .navbar-brand');
                    var $right = $navbar.find('.navbar-right > .dropdown').first();

                    if ($nav.length > 0) {
                        // Convert all the candidates into their height
                        var candidates = _.union($nav.find('> li').get(), $header.get(), $right.get());
                        _.each(candidates, function(candidate) { $(candidate).css('height', ""); });

                        if (screenConfig.name != 'xs') {
                            var heights = _.map(candidates, function(candidate) { return $(candidate).outerHeight(); });

                            var maxHeight = _.max(heights);

                            _.each(candidates, function(candidate) { $(candidate).css('height', maxHeight + 'px'); });
                        }
                    }
                });
            },

            wireEventHandlers: function wireEventHandlers() {
                if (this.options.fitToWidth || this.options.equaliseHeight) {
                    $('html').on('id7:fonts-loaded', $.proxy(this.onScreenResize, this));

                    // Catch the situation where we're missing the event being fired
                    if ($('html').data('fonts-loaded')) {
                        this.onScreenResize();
                    }

                    $(window).on('resize.id7.navigation.fitToWidth', $.proxy(this.onScreenResize, this));
                }

                this.$container.on('click', '.nav > li', function(e) {
                    var $targetLink = $(e.target).closest('a');
                    if ($targetLink.length > 0) {
                        return; // Let the default handler take it
                    }

                    $targetLink = $(this).find('a').first();
                    if ($targetLink.length > 0) {
                        e.stopPropagation();
                        e.preventDefault();
                        window.location = $targetLink.attr('href');

                        return false;
                    }
                });
            }
        });

        return Navigation;
    })();

    $.fn.id7Navigation = function(o) {
        o = o || {};
        return this.each(attach);
        function attach() {
            var $container = $(this), nav;
            nav = new Navigation($.extend(o, {
                container: $container
            }));

            $container.data('id7.navigation', nav);
        };
    };

    $(function() {
        $('#navigation').id7Navigation();
    });
})(jQuery);