jQuery(function ($) {
  'use strict';

  QUnit.module('reflowEvent jquery plugin')

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.ok($(document.body).reflow, 'reflow method is defined')
  })

  QUnit.module('reflow', {
    setup: function () {

    },
    teardown: function () {

    }
  })

  QUnit.test('should return jquery collection containing the element', function (assert) {
    var $el = $('<div/>');
    var $reflow = $el.reflow();

    assert.ok($reflow instanceof $, 'returns jquery collection');
    assert.strictEqual($reflow[0], $el[0], 'collection contains element');
  });
});