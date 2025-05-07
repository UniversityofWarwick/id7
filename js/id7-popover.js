import $ from 'jquery';


/*
 Customised Popover wrapper. Implements click away to dismiss.
 */
$.fn.id7Popover = function id7Popover(options) {
  let $items = this;
  const initClass = 'id7Popover-init';
  const dismissHandlerClass = 'id7Popover-dismissHandler';

  // filter already initialized popovers
  $items = $items.not(`.${initClass}`);

  // set options, with defaults
  const defaults = {
    template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><button type="button" class="close"><i class="fas fa-times" aria-hidden="true"></i><span class="sr-only">Close</span></button><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
    sanitize: false,
  };
  const opts = $.extend({}, defaults, options);


  $items.on('click', (e) => {
    const $target = $(e.currentTarget);
    $target.tooltip('disable');
    $target.trigger('mouseout');

    // don't popover disabled
    if ($target.hasClass('disabled')) {
      e.stopImmediatePropagation();
    }
    // Prevent propagation of click event to parent DOM elements
    e.preventDefault();
    e.stopPropagation();
  });


  // TAB-7486 If we want the popover to be tabbed into
  // i.e. when we don't have a focus trigger, bind an enter trigger to click
  const $nonFocusItems = $items.filter((i, el) => {
    const elOpts = {
      ...opts,
      trigger: $(el).data('trigger'),
    };
    return (elOpts.trigger || '').indexOf('focus') === -1;
  });
  $nonFocusItems.on('keypress', function handleEnter(event) {
    if (event.keyCode === 13) {
      // Prevent default behaviour for Enter
      event.stopPropagation();
      event.preventDefault();
      $(this).triggerHandler('click');
      return false;
    }
    return true;
  });

  // TAB-2920
  $items.on('hidden', (e) => {
    e.stopPropagation();
  });

  $items.on('hidden.bs.popover', '.use-tooltip', (e) => {
    const $target = $(e.currentTarget);
    $target.tooltip('enable');
  });

  // Dismiss popovers when clicking away
  function closePopover($popover) {
    const $creator = $popover.data('creator');
    if ($creator) {
      $creator.popover('hide');
      $creator.tooltip('enable');
      $creator.data('bs.popover').inState.click = false;
    }
  }

  // Click away to dismiss (TAB-7577 - make sure to only bind ONCE)
  $('html')
    .not(`.${dismissHandlerClass}`)
    // unbind in case asynchronous runs get pass our class guard
    .off('click.id7PopoverDismiss')
    .on('click.id7PopoverDismiss', (e) => {
      const $target = $(e.target);

      // if clicking anywhere other than the popover itself
      if ($target.closest('.popover').length === 0 && $(e.target).closest('.has-popover').length === 0) {
        $('.popover').each((i, popover) => closePopover($(popover)));
      } else if ($target.closest('.close').length > 0) {
        closePopover($target.closest('.popover'));
      }
    })
    .off('keyup.popoverDismiss')
    .on('keyup.popoverDismiss', (e) => {
      const key = e.which || e.keyCode;
      if (key === 27) {
        $('.popover').each((i, popover) => closePopover($(popover)));
      }
    })
    .addClass(dismissHandlerClass);

  // TAB-945 support popovers within fix-on-scroll
  $items.closest('.fix-on-scroll').on('fixed', () => {
    // Re-position any currently shown popover whenever we trigger a change in fix behaviour
    $items.each((i, el) => {
      const $item = $(el);
      const popover = $item.popover().data('bs.popover');
      const $tip = popover.tip();
      if ($tip.is(':visible')) {
        // Re-position. BUT HOW?
        $item.popover('show');
      }
    });
  });

  /* SPECIAL: popovers don't inherently know their progenitor, yet popover methods
   * (eg. hide) are *only* callable on *that original element*. So to close
   * a specific popover (or introductory) programmatically you need to jump hoops.
   * Lame.
   *
   * Workaround is to handle the shown event on the calling element,
   * call its popover() method again to get an object reference and then go diving
   * for a reference to the new popover itself in the DOM.
   */
  $items.on('shown.bs.popover', (e) => {
    const $po = $(e.currentTarget).popover().data('bs.popover').tip();
    $po.data('creator', $(e.currentTarget));
  });

  // now that's all done, bind the popover
  $items.each((i, el) => {
    // allow each popover to override the container via a data attribute
    $(el).popover($.extend({}, opts, {
      container: $(el).data('container'),
      trigger: $(el).data('trigger'),
    })).addClass(initClass);
  });

  // ensure popovers/introductorys override title with data-title attribute where available
  $items.each((i, el) => {
    if ($(el).attr('data-title')) {
      $(el).attr('data-original-title', $(el).attr('data-title'));
    }
  });

  return $items;
};
