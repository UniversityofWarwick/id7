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
    var protectedContent = '<i class="fas fa-padlock" aria-hidden="true"></i><span class="sr-only">Protected content</span>';
    var tooLong = 'A really long link title that goes over the sixty char threshold and needs trimming';
    var tooLongTrunc = 'A really long link title that goes over the sixty char…';
    var $el = $(`<div class="affix-top">
                <nav class="navbar navbar-primary" role="navigation">
                <ul class="nav navbar-nav">
                <li><a href="#">Short link title</a></li>
                <li><a href="#">${tooLong}</a></li>
                <li><a href="#">${tooLong}${protectedContent}</a></li>
                <li><a href="#">A link that isn\'t actually too long but suddenly${protectedContent}</a></li>
                </ul>
                </nav>
                </div>`)
        .appendTo('#qunit-fixture')
        .id7Navigation({ fitToWidth: false });

    assert.equal($el.find('li').length, 4, 'should be four links');
    assert.equal($el.find('li').eq(0).children().html(), 'Short link title', 'first link title should not have been truncated');
    assert.equal($el.find('li').eq(1).children().html(), `<span class="sr-only">${tooLong}</span>${tooLongTrunc}`, 'second link title should have been truncated, but not in middle of word');
    assert.equal($el.find('li').eq(2).children().html(), `<span class="sr-only">${tooLong}</span>${tooLongTrunc}${protectedContent}`, 'third link title should have been truncated, but keep extra markup');
    assert.equal($el.find('li').eq(3).children().html(), `A link that isn\'t actually too long but suddenly${protectedContent}`, 'fourth link title should not have been truncated if you exclude the sr-only text');
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

  QUnit.test('should be keyboard navigable', (assert) => {
    var $el = $(`
      <div>
        <nav class="navbar navbar-primary" role="navigation">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="/examples/" data-toggle="dropdown">Examples</a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="/examples/bacon-ipsum/">Subpage 1</a></li>
                <li><a href="/examples/subsite-homepage/">Subpage 2</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      `)
      .appendTo('#qunit-fixture')
      .id7Navigation({ fitToWidth: false });

    const $doc = $(document);
    const $dropdown = $('.dropdown');
    const $parentLink = $dropdown.find('> a');
    const $button = $parentLink.next();
    const $menu = $dropdown.find('ul');

    assert.equal($button.length, 1);
    assert.equal($button[0].tagName, 'BUTTON');

    assert.equal($parentLink.attr('aria-expanded'), undefined, 'Initial ARIA value');
    assert.equal($parentLink.attr('aria-haspopup'), 'true', 'Initial ARIA value');

    $button.trigger('click');

    assert.equal($parentLink.attr('aria-expanded'), 'true', 'Expanded ARIA value');
    assert.equal($button.attr('aria-expanded'), 'true', 'Expanded ARIA value');

    $button.trigger('click');

    assert.equal($parentLink.attr('aria-expanded'), 'false', 'Collapsed ARIA value');
    assert.equal($button.attr('aria-expanded'), 'false', 'Collapsed ARIA value');
  });

});
