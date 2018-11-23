jQuery(function ($) {
  'use strict';

  QUnit.module('id7Navigation jquery plugin');

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.ok($(document.body).id7Navigation, 'id7Navigation method is defined');
  });

  QUnit.module('id7Navigation', {
    setup: function () {

    },
    teardown: function () {

    }
  });

  QUnit.test('should return jquery collection containing the element', function (assert) {
    var $el = $('<div/>');
    var $nav = $el.id7Navigation({ fitToWidth: false });
    assert.ok($nav instanceof $, 'returns jquery collection');
    assert.strictEqual($nav[0], $el[0], 'collection contains element');
  });

  QUnit.test('should store navigation instance in navigation data object', function (assert) {
    var $nav = $('<div/>')
        .appendTo('#qunit-fixture')
        .id7Navigation({ fitToWidth: false });

    assert.ok($nav.data('id7.navigation'), 'navigation instance exists');
  });

  QUnit.test('should trim link titles', function (assert) {
    var $el = $('<div class="affix-top">' +
                '<nav class="navbar navbar-primary" role="navigation">' +
                '<ul class="nav navbar-nav">' +
                '<li><a href="#">Short link title</a></li>' +
                '<li><a href="#">A really long link title that goes over the sixty char threshold and needs trimming</a></li>' +
                '</ul>' +
                '</nav>' +
                '</div>')
        .appendTo('#qunit-fixture')
        .id7Navigation({ fitToWidth: false });

    assert.equal($el.find('li').length, 2, 'should be two links');
    assert.equal($el.find('li').eq(0).text(), 'Short link title', 'first link title should not have been truncated');
    assert.equal($el.find('li').eq(1).text(), 'A really long link title that goes over the sixty char…', 'second link title should have been truncated, but not in middle of word');
  });

  QUnit.test('should affix', function (assert) {
    var $el = $('<div class="affix-top">' +
                '<nav class="navbar navbar-primary" role="navigation">' +
                '<ul class="nav navbar-nav">' +
                '<li><a href="#">Primary nav link</a></li>' +
                '</ul>' +
                '</nav>' +
                '</div>')
        .appendTo('#qunit-fixture')
        .id7Navigation({ fitToWidth: false });

    assert.ok($el.data('bs.affix'), 'affix instance exists');
  });

  QUnit.test('should headroom', function (assert) {
    var $el = $('<div class="affix-top">' +
                '<nav class="navbar navbar-primary" role="navigation">' +
                '<ul class="nav navbar-nav">' +
                '<li><a href="#">Primary nav link</a></li>' +
                '</ul>' +
                '</nav>' +
                '</div>')
        .appendTo('#qunit-fixture')
        .id7Navigation({ fitToWidth: false });

    assert.ok($el.data('headroom'), 'headroom instance exists');
  });

  QUnit.test('should not throw an error on empty navigation', function (assert) {
    var $el = $('<div>' +
                '<nav class="navbar navbar-primary" role="navigation">' +
                '<ul class="nav navbar-nav">' +
                '</ul>' +
                '</nav>' +
                '</div>')
        .appendTo('#qunit-fixture')
        .id7Navigation({ fitToWidth: false });

    assert.ok($el.data('id7.navigation'), 'navigation instance exists');
  });

});