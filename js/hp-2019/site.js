/* eslint-env browser */

import $ from 'jquery';

$(() => {
  const $footer = $('.id7-site-footer');
  const $mapLocation = $('.map-location', $footer);
  const $mapColumn = $('.map-column', $footer);

  $mapLocation
    .on('hover mouseover focus', 'a', () => $mapColumn.addClass('hovered'))
    .on('blur mouseout', 'a', () => $mapColumn.removeClass('hovered'));
});
