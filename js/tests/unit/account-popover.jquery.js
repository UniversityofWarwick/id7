$(function () {
  'use strict';

  module('account popover jquery plugin')

  test('should be defined on jquery object', function () {
    ok($(document.body).accountPopover, 'accountPopover method is defined')
  });

  var user = {
    photo: 'http://www.gravatar.com/avatar/ed08722fea72ddf208e404d92c20b01d',
    fullName: 'Mathew Mannion',
    email: 'M.Mannion@warwick.ac.uk',
    userId: 'u0672089',
    description: 'Staff, IT Services'
  };

  module('accountPopover', {
    setup: function () {

    },
    teardown: function () {

    }
  })

  test('should return jquery collection containing the element', function () {
    var $el = $('<div/>');
    var $accountPopover = $el.accountPopover({ user: user });
    ok($accountPopover instanceof $, 'returns jquery collection');
    strictEqual($accountPopover[0], $el[0], 'collection contains element');
  });

  test('should render popover element', function () {
    var $popover = $('<a href="#">Account information</a>')
      .appendTo('#qunit-fixture')
      .accountPopover({ user: user }).popover('show');

    notEqual($('.popover.account-information.fade.in').length, 0, 'popover was inserted');
    $popover.popover('hide');
    equal($('.popover.account-information.fade.in').length, 0, 'popover removed');
  });


  test('should store popover instance in popover data object', function () {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({ user: user });

    ok($popover.data('id7.account-popover'), 'popover instance exists');
  });

  test('should store popover trigger in popover instance data object', function () {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({ user: user });

    $popover.popover('show');

    equal($popover.data('id7.account-popover').$trigger[0], $popover[0], 'trigger should be stored in instance object');
  });

  test('should populate popover from user object', function () {
    var user = {
      photo: 'http://www.gravatar.com/avatar/ed08722fea72ddf208e404d92c20b01d',
      fullName: 'Mathew Mannion',
      email: 'M.Mannion@warwick.ac.uk',
      userId: 'u0672089',
      description: 'Staff, IT Services'
    };

    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({ user: user });

    $popover.popover('show');

    equal($('.popover.account-information .account-info .photo').attr('src'), user.photo, 'photo correctly inserted');
    equal($('.popover.account-information .account-info .full-name').text(), user.fullName, 'name correctly inserted');
    equal($('.popover.account-information .account-info .email').text(), user.email, 'email correctly inserted');
    equal($('.popover.account-information .account-info .user-id').text(), user.userId, 'user-id correctly inserted');
    equal($('.popover.account-information .account-info .description').text(), user.description, 'description correctly inserted');
  });

  test('should respect custom template', function () {
    var $popover = $('<a href="#">Account information</a>')
        .appendTo('#qunit-fixture')
        .accountPopover({
          user: user,
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
        .accountPopover({ user: user }).popover('show');

    notEqual($('.popover.account-information.fade.in').length, 0, 'popover was inserted');

    // Not dismissed by clicking inside the popover itself
    $('.popover.account-information.fade.in').trigger('click');
    notEqual($('.popover.account-information.fade.in').length, 0, 'popover was inserted');

    $('html').trigger('click');
    equal($('.popover.account-information.fade.in').length, 0, 'popover removed');
  });

});