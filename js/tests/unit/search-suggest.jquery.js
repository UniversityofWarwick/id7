jQuery(function ($) {
  'use strict';

  QUnit.module('searchSuggest jquery plugin')

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.ok($(document.body).searchSuggest, 'searchSuggest method is defined')
  })

  QUnit.module('searchSuggest', {
    setup: function () {

    },
    teardown: function () {

    }
  })

  QUnit.test('should return jquery collection containing the element', function (assert) {
    var $el = $('<div/>');
    var $searchSuggest = $el.searchSuggest({
      source: function (query, cb) {
        cb([]);
      }
    });

    assert.ok($searchSuggest instanceof $, 'returns jquery collection');
    assert.strictEqual($searchSuggest[0], $el[0], 'collection contains element');
  });
});