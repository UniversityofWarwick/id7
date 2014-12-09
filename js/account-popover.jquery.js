/*global _:false */

(function ($) {
  'use strict';

  var Config = {
    Template: _.template([
      '<div class="account-info row">',
      '<div class="col-xs-4">',
      '<img src="<%- photo %>">',
      '</div>',
      '<div class="col-xs-8">',
      '<div class="full-name"><%= fullName %></div>',
      '<div class="email"><%= email %></div>',
      '<div class="user-id"><%= userId %></div>',
      '<div class="description"><%= description %></div>',
      '</div>',
      '</div>',
      '<div class="row actions">',
      '<div class="btn-group btn-group-justified">',
      '<div class="btn-group">',
      '<button data-action="change-password" type="button" class="btn btn-default">Change password</button>' +
      '</div>',
      '<div class="btn-group">',
      '<button data-action="sign-out" type="button" class="btn btn-default">Sign out</button>',
      '</div>',
      '</div>',
      '</div>'
    ].join('')),
    Defaults: {
      container: false,
      template: [
        '<div class="popover account-information">',
        '<div class="arrow"></div>',
        '<div class="popover-inner">',
        '<div class="popover-content"><p></p></div>',
        '</div>',
        '</div>'
      ].join('')
    }
  };

  /**
   * Display a popover with account information
   */
  var AccountPopover = (function () {
    function AccountPopover(o) {
      o = $.extend({}, Config.Defaults, o);
      this.$trigger = o.trigger;
      this.options = o;

      this.wireEventHandlers();
    }

    $.extend(AccountPopover.prototype, {
      wireEventHandlers: function wireEventHandlers() {
        var $trigger = this.$trigger;

        $trigger.on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }).popover({
          container: this.options.container,
          content: Config.Template({
            photo: 'http://www.gravatar.com/avatar/ed08722fea72ddf208e404d92c20b01d',
            fullName: 'Mathew Mannion',
            email: 'M.Mannion@warwick.ac.uk',
            userId: 'u0672089',
            description: 'Staff, IT Services'
          }),
          template: this.options.template,
          html: true,
          placement: 'bottom',
          title: 'Account information',
          trigger: 'click'
        });

        // Click away to dismiss
        $('html').on('click.popoverDismiss', function (e) {
          // if clicking anywhere other than the popover itself
          if ($(e.target).closest('.popover').length === 0 && $(e.target).closest('.use-popover').length === 0) {
            $trigger.popover('hide');
          }
        });
      }
    });

    return AccountPopover;
  })();

  $.fn.accountPopover = function (o) {
    o = o || {};

    function attach(i, element) {
      var $trigger = $(element);
      var accountPopover = new AccountPopover($.extend(o, {
        trigger: $trigger
      }));

      $trigger.data('id7.account-popover', accountPopover);
    }

    return this.each(attach);
  };

  $(function () {
    $('[data-toggle="id7:account-popover"]').accountPopover();
  });

})(jQuery);
