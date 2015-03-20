(function ($) {
    'use strict';

    $(function() {
      $('body').scrollspy({ target: '.carousel-nav' });

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