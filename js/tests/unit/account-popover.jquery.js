$(function () {
  'use strict';

  module('account popover jquery plugin')

  test('should be defined on jquery object', function () {
    ok($(document.body).accountPopover, 'accountPopover method is defined')
  });

  module('accountPopover', {
    setup: function () {

    },
    teardown: function () {

    }
  })

  test('should return jQuery collection containing the element', function () {
    var $el = $('<div/>');
    var $accountPopover = $el.accountPopover({ logoutlink: 'http://websignon.warwick.ac.uk/logout' });
    ok($accountPopover instanceof $, 'returns jquery collection');
    strictEqual($accountPopover[0], $el[0], 'collection contains element');
  });

  test('should render popover element', function () {
    var $popover = $('<a href="#">Account information</a>')
      .appendTo('#qunit-fixture')
      .accountPopover({ logoutlink: 'http://websignon.warwick.ac.uk/logout' }).popover('show');

    notEqual($('.popover.hybrid-overlay.fade.in').length, 0, 'popover was inserted');
    $popover.popover('hide');
    equal($('.popover.hybrid-overlay.fade.in').length, 0, 'popover removed');
  });


  test('should store popover instance in popover data object', function () {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({ logoutlink: 'http://websignon.warwick.ac.uk/logout' });

    ok($popover.data('id7.account-popover'), 'popover instance exists');
  });

  test('should store popover trigger in popover instance data object', function () {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({ logoutlink: 'http://websignon.warwick.ac.uk/logout' });

    $popover.popover('show');

    equal($popover.data('id7.account-popover').$trigger[0], $popover[0], 'trigger should be stored in instance object');
  });

  test('should populate popover from iframe link and logout link', function () {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({
          useMwIframe: false,
          legacyIframeLink: 'http://websignon.warwick.ac.uk/origin/account',
          logoutlink: 'http://websignon.warwick.ac.uk/logout'
        });

    $popover.popover('show');

    equal($('.popover.hybrid-overlay .account-info iframe').attr('src'), 'http://websignon.warwick.ac.uk/origin/account', 'iframe link inserted correctly');
    equal($('.popover.hybrid-overlay .btn-default').attr('href'), 'http://websignon.warwick.ac.uk/logout', 'logout link correctly inserted');
  });

  test('should respect custom template', function () {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({
          logoutlink: 'http://websignon.warwick.ac.uk/logout',
          template: '<div class="popover foobar"><div class="arrow"></div><div class="inner"><h3 class="title"/><div class="content"><p/></div></div></div>'
        });

    $popover.popover('show');

    notEqual($('.popover.fade.in').length, 0, 'popover was inserted');
    ok($('.popover.fade.in').hasClass('foobar'), 'custom class is present');

    $popover.popover('hide');
    equal($('.popover.fade.in').length, 0, 'popover was removed');
  });

  test('popover should be dismissed by clicking outside it', function () {
    $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({ logoutlink: 'http://websignon.warwick.ac.uk/logout', useMwIframe: false }).popover('show');

    notEqual($('.popover.hybrid-overlay.fade.in').length, 0, 'popover was inserted');

    // Not dismissed by clicking inside the popover itself
    $('.popover.hybrid-overlay.fade.in').trigger('click');
    notEqual($('.popover.hybrid-overlay.fade.in').length, 0, 'popover was inserted');

    $('html').trigger('click');
    equal($('.popover.hybrid-overlay.fade.in').length, 0, 'popover removed');
  });

});
