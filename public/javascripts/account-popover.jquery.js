(function($) { 'use strict';

    var Config = {
        Template: _.template([
            '<div class="account-info row">',
                '<div class="col-xs-6">',
                    '<img src="">',
                '</div>',
                '<div class="col-xs-6">',
                '</div>',
            '</div>'
        ].join('')),
        Defaults: {
            container: false,
            template: [
                '<div class="popover">',
                    '<div class="arrow"></div>',
                    '<div class="popover-inner">',
                        '<button type="button" class="close" aria-hidden="true">&#215;</button>',
                        '<h3 class="popover-title"></h3>',
                        '<div class="popover-content"><p></p></div>',
                    '</div>',
                '</div>'
            ].join('')
        }
    };

    /**
     * Display a popover with account information
     */
    var AccountPopover = (function() {
        function AccountPopover(o) {
            o = $.extend({}, Config.Defaults, o);
            this.$trigger = o.trigger;
            this.options = o;

            this.wireEventHandlers();
        };

        $.extend(AccountPopover.prototype, {
            wireEventHandlers: function wireEventHandlers() {
                var $trigger = this.$trigger;

                $trigger.on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }).popover({
                    container: this.options.container,
                    content: Config.Template({}),
                    template: this.options.template,
                    html: true,
                    placement: 'bottom',
                    title: 'Account information',
                    trigger: 'click'
                });

                // Click away to dismiss
                $('html').on('click.popoverDismiss', function(e) {
                    // if clicking anywhere other than the popover itself
                    if ($(e.target).closest('.popover').length === 0 && $(e.target).closest('.use-popover').length === 0) {
                        $trigger.popover('hide');
                    }
                });
            }
        });

        return AccountPopover;
    })();

    $.fn.accountPopover = function(o) {
        o = o || {};
        return this.each(attach);
        function attach() {
            var $trigger = $(this), accountPopover;
            accountPopover = new AccountPopover($.extend(o, {
                trigger: $trigger
            }));

            $trigger.data('id7.account-popover', accountPopover);
        };
    };

    $(function() {
        $('[data-toggle="id7:account-popover"]').accountPopover();
    });

})(jQuery);