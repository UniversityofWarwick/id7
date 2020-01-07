jQuery(function($) {
    var first = true;
    $(window).on('id7:reflow', function(evData, screen) {
        console.log(evData);
        const $textarea = $('textarea');
        $textarea.val($textarea.val() + (first ? '' : '\n') + '[' + screen.name + '] id7:reflow at ' + (new Date()).toLocaleTimeString());
        first = false;
        $textarea.scrollTop($textarea[0].scrollHeight);
    });
    
    $('.clear-textarea').click(function() {
        $('textarea').val('');
        first = true;
    });
});
