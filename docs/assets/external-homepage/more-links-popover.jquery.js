(function ($) {
    'use strict';

    var Config = {
        Defaults: {
            container: 'body', // Needed to avoid being drawn under the nav carousel which is fixed in the body
            template: [
                '<div class="popover megamenu-links">',
                '<div class="arrow"></div>',
                '<div class="popover-inner">',
                '<div class="popover-content container-fluid"></div>',
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
                var options = this.options;

                $trigger.on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }).popover({
                    container: options.container,
                    content: $(options.target).find('> .container').html(),
                    template: options.template,
                    html: true,
                    placement: 'bottom',
                    title: 'More links',
                    trigger: 'click'
                }).on('show.bs.popover', function () {
                    $trigger.data('previous-hash', window.location.hash);
                    window.location.hash = options.target;
                }).on('hide.bs.popover', function () {
                    if ($trigger.data('previous-hash')) {
                        window.location.hash = $trigger.data('previous-hash');
                    }
                });

                if (window.location.hash == options.target) {
                    $trigger.popover('show');
                }

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
    });
})(jQuery);