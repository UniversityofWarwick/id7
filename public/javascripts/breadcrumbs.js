(function($) { 'use strict';
    var Breadcrumbs = {
        ICON_OPEN: 'fa-caret-down',
        ICON_CLOSED: 'fa-home'
    };

    $(function() {
        $('.primary-navigation .navbar-brand[data-target]').each(function() {
            var $trigger = $(this);
            var $icon = $trigger.find('.fa');

            var $element = $($trigger.attr('data-target'));

            $element.on('show.bs.collapse', function() {
                $icon.removeClass(Breadcrumbs.ICON_CLOSED).addClass(Breadcrumbs.ICON_OPEN);
            });
            $element.on('hide.bs.collapse', function() {
                $icon.addClass(Breadcrumbs.ICON_CLOSED).removeClass(Breadcrumbs.ICON_OPEN);
            });
        });
    });
})(jQuery);