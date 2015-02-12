$(function () {
  'use strict';

  module('id7Navigation jquery plugin');

  test('should be defined on jquery object', function () {
    ok($(document.body).id7Navigation, 'id7Navigation method is defined');
  });

  module('id7Navigation', {
    setup: function () {

    },
    teardown: function () {

    }
  });

  test('should return jquery collection containing the element', function () {
    var $el = $('<div/>');
    var $nav = $el.id7Navigation({ fitToWidth: false });
    ok($nav instanceof $, 'returns jquery collection');
    strictEqual($nav[0], $el[0], 'collection contains element');
  });

  test('should store navigation instance in navigation data object', function () {
    var $nav = $('<div/>')
        .appendTo('#qunit-fixture')
        .id7Navigation({ fitToWidth: false });

    ok($nav.data('id7.navigation'), 'navigation instance exists');
  });

  test('should trim link titles', function () {
    var $el = $('<div id="id7-navigation" class="affix-top">' +
                '<nav id="id7-primary-navigation" class="navbar navbar-primary" role="navigation">' +
                '<ul class="nav navbar-nav">' +
                '<li><a href="#">Short link title</a></li>' +
                '<li><a href="#">A really long link title that goes over the sixty char threshold and needs trimming</a></li>' +
                '</ul>' +
                '</nav>' +
                '</div>')
        .appendTo('#qunit-fixture')
        .id7Navigation({ fitToWidth: false });

    equal($el.find('li').length, 2, 'should be two links');
    equal($el.find('li').eq(0).text(), 'Short link title', 'first link title should not have been truncated');
    equal($el.find('li').eq(1).text(), 'A really long link title that goes over the sixty char…', 'second link title should have been truncated, but not in middle of word');
  });

  test('should affix', function () {
    var $el = $('<div id="id7-navigation" class="affix-top">' +
                '<nav id="id7-primary-navigation" class="navbar navbar-primary" role="navigation">' +
                '<ul class="nav navbar-nav">' +
                '<li><a href="#">Primary nav link</a></li>' +
                '</ul>' +
                '</nav>' +
                '</div>')
        .appendTo('#qunit-fixture')
        .id7Navigation({ fitToWidth: false });

    ok($el.data('bs.affix'), 'affix instance exists');
  });

  test('should toggle breadcrumb icon', function () {
    var $el = $('<div id="id7-navigation" class="affix-top">' +
                '<nav id="id7-primary-navigation" class="navbar navbar-primary" role="navigation">' +
                '<div class="navbar-header">' +
                '<button type="button" class="btn-link navbar-brand collapsed" data-toggle="collapse" data-target="#id7-breadcrumbs">' +
                '<span class="sr-only">Toggle breadcrumbs</span>' +
                '<i class="fa fa-fw fa-compass"></i>' +
                '</button>' +
                '</div>' +
                '<ul class="nav navbar-nav">' +
                '<li><a href="#">Primary nav link</a></li>' +
                '</ul>' +
                '</nav>' +
                '<nav class="breadcrumbs navbar navbar-breadcrumbs collapse navbar-breadcrumb-collapse" id="id7-breadcrumbs">' +
                '<div class="container-fluid">' +
                '<ul class="nav navbar-nav">' +
                '<li><a href="/">Uni home</a></li>' +
                '<li class="active navbar-text">Subsite homepage</li>' +
                '</ul>' +
                '</div>' +
                '</nav>' +
                '</div>')
        .appendTo('#qunit-fixture')
        .id7Navigation({ fitToWidth: false });

    var $icon = $el.find('i.fa');

    ok(!$icon.hasClass('active'), 'should not have active class');

    $icon.trigger('click');

    ok($el.find('.breadcrumbs').hasClass('collapsing'), 'does not have class "collapsing"');
    ok($icon.hasClass('active'), 'should have active classname');
  });
});