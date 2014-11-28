(function($) { 'use strict';

    // Use the Bootstrap affix plugin to fix primary navigation to the top of the screen
    $(function() {
        var $nav = $('#navigation');

        $nav.affix({
            offset: {
                top: $nav.offset().top
            }
        });
    });

})(jQuery);