$(function () {
  'use strict';

  module('searchSuggest jquery plugin')

  test('should be defined on jquery object', function () {
    ok($(document.body).searchSuggest, 'searchSuggest method is defined')
  })

  module('searchSuggest', {
    setup: function () {

    },
    teardown: function () {

    }
  })

  test('should return jquery collection containing the element', function () {
    var $el = $('<div/>');
    var $searchSuggest = $el.searchSuggest({
      source: function (query, cb) {
        cb([]);
      }
    });

    ok($searchSuggest instanceof $, 'returns jquery collection');
    strictEqual($searchSuggest[0], $el[0], 'collection contains element');
  });
});