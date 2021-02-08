/* eslint-env browser */
const $ = window.jQuery;

/*
 * Add dropdowns to links, navigation etc. Required for ID7 dropdown navigation
 */
require('bootstrap/js/dropdown');


// ID-294 We use non-standard dropdowns that need to have different click actions..

// Bootstrap devs were lazy when they implemented Esc key support, and just triggered
// a click on the dropdown trigger. Hence, hitting Escape will perform the click action.

// We monkey patch the keydown function here.

$(document).off('keydown.bs.dropdown.data-api', '[data-toggle="dropdown"]', $.fn.dropdown.Constructor.prototype.keydown);
$(document).off('keydown.bs.dropdown.data-api', '.dropdown-menu', $.fn.dropdown.Constructor.prototype.keydown);

const backdrop = '.dropdown-backdrop';

/* eslint-disable */

function getParent($this) {
  var selector = $this.attr('data-target')

  if (!selector) {
    selector = $this.attr('href')
    selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
  }

  var $parent = selector !== '#' ? $(document).find(selector) : null

  return $parent && $parent.length ? $parent : $this.parent()
}

$.fn.dropdown.Constructor.prototype.keydown = function (e) {
    if ((/input|textarea/i.test(e.target.tagName)) || (!/(38|40|27|32)/.test(e.which) && (e.which < 65 || e.which > 90))) return;

    if (e.ctrlKey || e.altKey) { // don't hijack user's hotkeys
        return;
    }

    const $this = $(this);

    e.preventDefault();
    e.stopPropagation();

    if ($this.is('.disabled, :disabled')) return;

    const $parent = getParent($this);
    const isActive = $parent.hasClass('open');

    if (!isActive && e.which !== 27 || isActive && e.which === 27) {
        if (e.which === 27) $parent.find('[data-toggle="dropdown"]').trigger('focus');
        // Begin Warwick (don't send click event)
        $(backdrop).remove();
        $('[data-toggle="dropdown"]').each(function () {
            var relatedTarget = {relatedTarget: this};

            if (!$parent.hasClass('open')) return;

            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

            $this.attr('aria-expanded', 'false');
            $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget));
        });
        // End Warwick
    }

    const desc = ' li:not(.disabled):visible a';
    const $items = $parent.find('.dropdown-menu' + desc);

    if (!$items.length) return;

    let index = $items.index(e.target);
    // Begin Warwick (wrap around)
    if (e.which === 38) index = (index - 1) % $items.length;         // up
    if (e.which === 40) index = (index + 1) % $items.length;         // down

    if (e.which >= 65 && e.which <= 90 && $items.length < 100) {
        var letter = e.key.toLowerCase();
        let originalIndex = $items.index(e.target);

        // linear search
        var $matches = $items.filter(function () { return $(this).text().trim().toLowerCase().indexOf(letter) === 0; });
        $matches.each(function() {
            var $el = $(this);
            var relativeIndex = $items.index($el);
            if (relativeIndex > originalIndex || $(e.target).text().trim().toLowerCase().charAt(0) !== letter) {
                index = relativeIndex;
                return false;
            }
        });

        if (index === originalIndex && $matches.length > 0) {
            index = $items.index($matches.eq(0));
        }
    }
    // End Warwick

    $items.eq(index).trigger('focus');
};

/* eslint-enable */

$(document).on('keydown.bs.dropdown.data-api', '[data-toggle="dropdown"]', $.fn.dropdown.Constructor.prototype.keydown);
$(document).on('keydown.bs.dropdown.data-api', '.dropdown-menu', $.fn.dropdown.Constructor.prototype.keydown);
