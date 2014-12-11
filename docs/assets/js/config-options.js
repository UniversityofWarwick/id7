var ALL_CLASSES = ['brand-default', 'brand-purple', 'brand-grey', 'brand-yellow', 'brand-blue', 'brand-orange', 'brand-green', 'brand-red', 'brand-red-bold'];

jQuery(function($) {
    $('[data-toggle-class]').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        var clazz = $(this).data('toggle-class');
        $.each(ALL_CLASSES, function(i, clz) {
            if (clz != clazz) {
                $('body').removeClass(clz).addClass(clazz);
            }
        });
    });

    $('[data-toggle="className"]').on('change', function(e) {
        var $cb = $(this);
        var $target = $($cb.attr('data-target'));
        var className = $cb.attr('data-className');

        if ($cb.is(':checked')) {
            $target.addClass(className);
        } else {
            $target.removeClass(className);
        }
    }).trigger('change');

    $('#border-width').on('change', function(e) {
        var width = $(this).val();
        $('#id7-left-border').css('border-right-width', width + 'px');
        $('#id7-right-border').css('border-left-width', width + 'px');
    }).trigger('change');

    $('#border-colour').on('change', function(e) {
        var colour = $(this).val();
        $('#id7-left-border, #id7-right-border').css('border-color', colour);
    }).trigger('change');

    $('#shadow-blur, #shadow-opacity').on('change', function(e) {
        var blur = $('#shadow-blur').val();
        var opacity = $('#shadow-opacity').val();

        $('#id7-fixed-width-container.shadowed').css('box-shadow', '0 0 ' + blur + 'px rgba(0, 0, 0, ' + opacity + ')');
    }).trigger('change');

    $('#strapline-position').on('change', function(e) {
        var classes = 'strapline ' + $(this).val();
        $('#id7-header-image-container .strapline').attr('class', classes);
    }).trigger('change');

    $('#site-imagery').on('change', function(e) {
        var allClasses = $(this).find('option').map(function() { return $(this).attr('value'); }).get();

        $.each(allClasses, function(i, clz) { $('html').removeClass(clz); });
        $('html').addClass($(this).val());
    }).trigger('change');
});