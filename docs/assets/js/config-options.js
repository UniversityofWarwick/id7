jQuery(function($) {
    document.querySelectorAll('[data-toggle-class]').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        const list = document.documentElement.classList;
        list.forEach(function(clz) {
          if (clz.startsWith('id7-brand-')) {
            list.remove(clz);
          }
        });
        list.add(el.dataset.toggleClass);
      });
    });

    document.querySelectorAll('[data-toggle="className"]').forEach(function(el) {
      el.addEventListener('change', function(cb) {
        var target = document.querySelector(el.dataset.target);
        var className = el.dataset.className;

        if (!target) {
          console.warn('No target found for', el);
          return;
        }

        if (el.checked) {
            target.classList.add(className);
        } else {
            target.classList.remove(className);
        }
      });
      el.dispatchEvent(new Event('change'));
    });

    $('#border-width').on('change', function(e) {
        var width = $(this).val();
        $('.id7-left-border').css('border-right-width', width + 'px');
        $('.id7-right-border').css('border-left-width', width + 'px');
    }).trigger('change');

    $('#border-colour').on('change', function(e) {
        var colour = $(this).val();
        $('.id7-left-border, .id7-right-border').css('border-color', colour);
    }).trigger('change');

    $('#shadow-blur, #shadow-opacity').on('change', function(e) {
        var blur = $('#shadow-blur').val();
        var opacity = $('#shadow-opacity').val();

        $('.id7-fixed-width-container.shadowed').css('box-shadow', '0 0 ' + blur + 'px rgba(0, 0, 0, ' + opacity + ')');
    }).trigger('change');

    $('#site-imagery').on('change', function(e) {
        var allClasses = $(this).find('option').map(function() { return $(this).attr('value'); }).get();

        $.each(allClasses, function(i, clz) { $('html').removeClass(clz); });
        $('html').addClass($(this).val());
    }).trigger('change');

    document.querySelector('#toggle-evolved').addEventListener('click', function() {
        document.documentElement.classList.toggle('id7-evolved');
        document.documentElement.classList.toggle('id7-borderless');
    });
});
