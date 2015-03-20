(function ($) {
    'use strict';

    $(function() {
      $('body').scrollspy({ target: '.carousel-nav' });
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

      $('[data-toggle="popover"]').popover().on('click', function(e) { e.preventDefault(); });
    });
})(jQuery);