(function ($) {
    'use strict';

    var Config = {
        Templates: {
            Popover: _.template([
                '<div>',
                '</div>'
            ].join(''))
        },
        Defaults: {
            container: '.id7-masthead',
            template: [
                '<div class="popover megamenu-links">',
                '<div class="arrow"></div>',
                '<div class="popover-inner">',
                '<div class="popover-content"><p></p></div>',
                '</div>',
                '</div>'
            ].join('')
        }
    };

    /**
     * Display a megamenu popover
     */
    var MoreLinksPopover = (function () {
        function MoreLinksPopover(o) {
            o = $.extend({}, Config.Defaults, o);
            this.$trigger = o.trigger;
            this.options = o;

            this.wireEventHandlers();
        }

        $.extend(MoreLinksPopover.prototype, {
            wireEventHandlers: function wireEventHandlers() {
                var $trigger = this.$trigger;

                $trigger.on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }).popover({
                    container: this.options.container,
                    content: Config.Templates.Popover(this.options),
                    template: this.options.template,
                    html: true,
                    placement: 'bottom',
                    title: 'More links',
                    trigger: 'click'
                });

                // Click away to dismiss
                $('html').on('click.popoverDismiss', function (e) {
                    // if clicking anywhere other than the popover itself
                    if ($(e.target).closest('.popover').length === 0 && $(e.target).closest('.use-popover').length === 0) {
                        $trigger.popover('hide');
                    }
                });
            }
        });

        return MoreLinksPopover;
    })();

    $.fn.moreLinksPopover = function (o) {
        o = o || {};

        function attach(i, element) {
            var $trigger = $(element);
            var moreLinksPopover = new MoreLinksPopover($.extend({}, $trigger.data(), o, {
                trigger: $trigger
            }));

            $trigger.data('id7.more-links-popover', moreLinksPopover);
        }

        return this.each(attach);
    };

    $(function() {
        $('[data-toggle="id7:megamenu-popover"]').moreLinksPopover();

        $('body')
            .scrollspy({ target: '.carousel-nav' })
            .panelSnap({
                //$menu: $('.carousel-nav'),
                //menuSelector: 'a[href^="#"]',
                panelSelector: '.jumbotron-carousel > article',
                keyboardNavigation: {
                    enabled: true,
                    wrapAround: false
                }
            });
        $('.carousel-nav').on('activate.bs.scrollspy', function () {
            $(this).find('li.active a[href^="#"]').each(function () {
                var colour = $(this.hash).data('masthead-colour');
                if (colour) {
                    $('.id7-page-header').css('background-color', colour);
                } else {
                    $('.id7-page-header').css('background-color', null);
                }
            });
        });

        // Smooth scroll
        $('.carousel-nav a[href^="#"]').on('click', function(e) {
            // prevent default anchor click behavior
            e.preventDefault();

            // store hash
            var hash = this.hash;

            // animate
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, function(){
                // when done, add hash to url
                // (default click behaviour)
                window.location.hash = hash;
            });
        });
    });
})(jQuery);