$(function () {
  'use strict';

  module('reflowEvent jquery plugin')

  test('should be defined on jquery object', function () {
    ok($(document.body).reflow, 'reflow method is defined')
  })

  module('reflow', {
    setup: function () {

    },
    teardown: function () {

    }
  })

  test('should return jquery collection containing the element', function () {
    var $el = $('<div/>');
    var $reflow = $el.reflow();

    ok($reflow instanceof $, 'returns jquery collection');
    strictEqual($reflow[0], $el[0], 'collection contains element');
  });
});