$(function () {
  'use strict';

  module('wideTables jquery plugin')

  test('should be defined on jquery object', function () {
    ok($(document.body).wideTables, 'wideTables method is defined')
  })

  module('wideTables', {
    setup: function () {

    },
    teardown: function () {

    }
  })

  test('should return jquery collection containing the element', function () {
    var $el = $('<div/>');
    var $wideTables = $el.wideTables();

    ok($wideTables instanceof $, 'returns jquery collection');
    strictEqual($wideTables[0], $el[0], 'collection contains element');
  });

  test('should store wideTables instance in wideTables data object', function () {
    var $el = $('<div/>')
        .appendTo('#qunit-fixture')
        .wideTables();

    ok($el.data('id7.wide-tables'), 'wideTables instance exists');
  });
});