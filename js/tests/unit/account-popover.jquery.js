jQuery(function ($) {
  'use strict';

  QUnit.module('account popover jquery plugin');

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.ok($(document.body).accountPopover, 'accountPopover method is defined')
  });

  QUnit.module('accountPopover', {
    setup: function () {

    },
    teardown: function () {

    }
  });

  QUnit.test('should return jQuery collection containing the element', function (assert) {
    var $el = $('<div/>');
    var $accountPopover = $el.accountPopover({ logoutlink: 'http://websignon.warwick.ac.uk/logout' });
    assert.ok($accountPopover instanceof $, 'returns jquery collection');
    assert.strictEqual($accountPopover[0], $el[0], 'collection contains element');
  });

  QUnit.test('should render popover element', function (assert) {
    var $popover = $('<a href="#">Account information</a>')
      .appendTo('#qunit-fixture')
      .accountPopover({ logoutlink: 'http://websignon.warwick.ac.uk/logout' }).popover('show');

    assert.notEqual($('.popover.hybrid-overlay.fade.in').length, 0, 'popover was inserted');
    $popover.popover('hide');
    assert.equal($('.popover.hybrid-overlay.fade.in').length, 0, 'popover removed');
  });


  QUnit.test('should store popover instance in popover data object', function (assert) {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({ logoutlink: 'http://websignon.warwick.ac.uk/logout' });

    assert.ok($popover.data('id7.account-popover'), 'popover instance exists');
  });

  QUnit.test('should store popover trigger in popover instance data object', function (assert) {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({ logoutlink: 'http://websignon.warwick.ac.uk/logout' });

    $popover.popover('show');

    assert.equal($popover.data('id7.account-popover').$trigger[0], $popover[0], 'trigger should be stored in instance object');
  });

  QUnit.test('should populate popover from iframe link and logout link', function (assert) {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({
          useMwIframe: false,
          legacyIframeLink: 'http://websignon.warwick.ac.uk/origin/account',
          logoutlink: 'http://websignon.warwick.ac.uk/logout'
        });

    $popover.popover('show');

    assert.equal($('.popover.hybrid-overlay .account-info iframe').attr('src'), 'http://websignon.warwick.ac.uk/origin/account', 'iframe link inserted correctly');
    assert.equal($('.popover.hybrid-overlay .btn-default').attr('href'), 'http://websignon.warwick.ac.uk/logout', 'logout link correctly inserted');
  });

  QUnit.test('should respect custom template', function (assert) {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({
          logoutlink: 'http://websignon.warwick.ac.uk/logout',
          template: '<div class="popover foobar"><div class="arrow"></div><div class="inner"><h3 class="title"/><div class="content"><p/></div></div></div>'
        });

    $popover.popover('show');

    assert.notEqual($('.popover.fade.in').length, 0, 'popover was inserted');
    assert.ok($('.popover.fade.in').hasClass('foobar'), 'custom class is present');

    $popover.popover('hide');
    assert.equal($('.popover.fade.in').length, 0, 'popover was removed');
  });

  QUnit.test('popover should be dismissed by clicking outside it', function (assert) {
    $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({ logoutlink: 'http://websignon.warwick.ac.uk/logout', useMwIframe: false }).popover('show');

    assert.notEqual($('.popover.hybrid-overlay.fade.in').length, 0, 'popover was inserted');

    // Not dismissed by clicking inside the popover itself
    $('.popover.hybrid-overlay.fade.in').trigger('click');
    assert.notEqual($('.popover.hybrid-overlay.fade.in').length, 0, 'popover was inserted');

    $('html').trigger('click');
    assert.equal($('.popover.hybrid-overlay.fade.in').length, 0, 'popover removed');
  });

});
