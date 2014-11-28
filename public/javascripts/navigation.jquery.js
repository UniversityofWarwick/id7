(function($) {
    var Config = {
        Breadcrumbs: {
            ICON_OPEN: 'fa-play fa-rotate-90',
            ICON_CLOSED: 'fa-home'
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
        }
    };

    var Navigation = (function() {
        var defaults = {
            fixed: true,
            flipBreadcrumbIcons: true,
            fitToWidth: true
        };

        function Navigation(o) {
            o = $.extend({}, defaults, o);
            this.$container = o.container;
            this.options = o;

            if (o.fixed) this.affix();
            if (o.flipBreadcrumbIcons) this.flipBreadcrumbIcons();
            if (o.fitToWidth) this.fitToWidth();

            this.wireEventHandlers();
        }

        $.extend(Navigation.prototype, {
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
                    var $icon = $trigger.find('.fa');

                    var $element = $($trigger.attr('data-target'));

                    $element.on('show.bs.collapse', function() {
                        $icon.removeClass(Config.Breadcrumbs.ICON_CLOSED).addClass(Config.Breadcrumbs.ICON_OPEN);
                    });
                    $element.on('hide.bs.collapse', function() {
                        $icon.addClass(Config.Breadcrumbs.ICON_CLOSED).removeClass(Config.Breadcrumbs.ICON_OPEN);
                    });
                });
            },

            _screenConfig: function screenConfig() {
                return _.find(Config.ScreenSizes, function(screenConfig) { return screenConfig.test(); });
            },

            fitToWidth: function fitToWidth() {
                // Which stop-point are we on?
                var screenConfig = this._screenConfig();
                if (screenConfig.name === this.lastScreenConfig);

                // Put the bunnies back in the box
                this.$container.find('.navbar-collapse').each(function() {
                    var $collapse = $(this);
                    var $nav = $collapse.find('> .nav').first();
                    var $moreContainer = $collapse.find('> .navbar-right');

                    $moreContainer.find('> .dropdown > .dropdown-menu > li').each(function() {
                        var $li = $(this);
                        $nav.append($li);
                    });
                    $moreContainer.remove();

                    if (screenConfig.name != 'xs') {
                        var isWrapped = function () {
                            return _.some(_.union($nav.find('> li').get(), $collapse.find('> .navbar-right').get()), function (el) {
                                return $(el).position().top > 0;
                            });
                        };

                        if (isWrapped()) {
                            $moreContainer = $(Config.Templates.moreContainer);
                            $collapse.append($moreContainer);

                            do {
                                // Remove the last element and prepend it to the more container
                                $moreContainer.find('> .dropdown > .dropdown-menu').prepend($nav.find('> li').last());
                            } while (isWrapped());
                        }
                    }
                });

                this.lastScreenConfig = screenConfig.name;
            },

            wireEventHandlers: function wireEventHandlers() {
                if (this.options.fitToWidth) {
                    $(window).on('resize.id7.navigation', $.proxy(this.fitToWidth, this))
                }
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