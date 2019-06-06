/* eslint-env browser */

import $ from 'jquery';

$(() => {
  const $footer = $('.id7-site-footer');

  $footer
    .on('hover mouseover focus', '.map-location a, .map-column a', () => $footer.addClass('hovered'))
    .on('blur mouseout', '.map-location a, .map-column a', () => $footer.removeClass('hovered'));
});
