$(function () {
  'use strict';

  module('id7Navigation jquery plugin')

  test('should be defined on jquery object', function () {
    ok($(document.body).id7Navigation, 'id7Navigation method is defined')
  })

  module('id7Navigation', {
    setup: function () {

    },
    teardown: function () {

    }
  })

  test('should return jquery collection containing the element', function () {
    var $el = $('<div/>');
    var $nav = $el.id7Navigation();
    ok($nav instanceof $, 'returns jquery collection');
    strictEqual($nav[0], $el[0], 'collection contains element');
  });
});