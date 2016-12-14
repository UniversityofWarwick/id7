(function ($) {
  'use strict';

  $(function () {
    // Scrollspy
    var $window = $(window)
    var $body = $(document.body)

    $body.scrollspy({
      target: '.id7-docs-sidebar'
    });
    $window.on('load', function () {
      $body.scrollspy('refresh')
    });

    // Kill links
    $('[href="#"]').click(function (e) {
      e.preventDefault()
    });

    // Sidenav affixing
    setTimeout(function () {
      var $sideBar = $('.id7-docs-sidebar')

      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop = $sideBar.offset().top;
            var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10);

            return (this.top = offsetTop - sideBarMargin);
          },
          bottom: function () {
            return (this.bottom = $('.id7-page-footer').outerHeight(true));
          }
        }
      })
    }, 100);
  });
})(jQuery);
