jQuery(function ($) {
  'use strict';

  QUnit.module('wideTables jquery plugin')

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.ok($(document.body).wideTables, 'wideTables method is defined')
  })

  QUnit.module('wideTables', {
    setup: function () {

    },
    teardown: function () {

    }
  })

  QUnit.test('should return jquery collection containing the element', function (assert) {
    var $el = $('<div/>');
    var $wideTables = $el.wideTables();

    assert.ok($wideTables instanceof $, 'returns jquery collection');
    assert.strictEqual($wideTables[0], $el[0], 'collection contains element');
  });

  QUnit.test('should store wideTables instance in wideTables data object', function (assert) {
    var $el = $('<div/>')
        .appendTo('#qunit-fixture')
        .wideTables();

    assert.ok($el.data('id7.wide-tables'), 'wideTables instance exists');
  });
});