/* eslint-env browser */
import $ from 'jquery';
import _ from 'lodash-es';
import FeatureDetect from './feature-detect';

/**
 * Use Bootstrap 3 typeahead to provide Go.Warwick suggestions on an <input>
 */
function SearchSuggest(options) {
  const o = options || {};
  const $input = o.input;
  $input.attr('autocomplete', 'off').typeahead({
    minLength: o.minLength,
    source: o.source,
    displayText: o.displayText,
    appendTo: o.appendTo !== undefined ? $(o.appendTo) : undefined,
    fitToElement: o.fitToElement,
    matcher: () => true, // All data received from the server matches the query
    highlighter: (html) => html,
    changeInputOnSelect: false,
    changeInputOnMove: false,
    followLinkOnSelect: true,
    openLinkInNewTab: false,
    selectOnBlur: false,
    selectOnTab: false,
    showHintOnFocus: true,
    itemLink: o.itemLink,
    afterSelect: () => $input.trigger('blur'),
  }).on('keydown', ($e) => {
    const keyCode = $e.which || $e.keyCode;
    switch (keyCode) {
      case 38: // up
      case 40: // down
        // Only if no modifier
        if (!($e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey)) {
          $e.stopPropagation();
        }
        break;
      default:
        // do nothing
    }
  });
}

$.fn.searchSuggest = function searchSuggestPlugin(options) {
  const o = options || {};

  function attach(i, element) {
    const $input = $(element);
    SearchSuggest($.extend({}, $input.data(), o, {
      input: $input,
    }));
  }

  return this.each(attach);
};

$.fn.goSearchSuggest = function goSearchSuggestPlugin(options = {}) {
  function attach(i, el) {
    // ID-156 find the icon next to it
    $(el).next('.fa,.fas,.fal,.fab,.far').on('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      $(el).closest('form').submit();
    });

    // ID-89 On xs, set the min length to 3, not 2, and only show 3 results
    let minLength = 3;
    let maxResults = 3;

    if (FeatureDetect.mq('only all and (min-width: 768px)')) {
      minLength = 2;
      maxResults = 6;
    }

    const $trigger = $(el);
    $trigger.searchSuggest($.extend(options, $trigger.data(), {
      source: (query, callback) => {
        $.getJSON(`https://sitebuilder.warwick.ac.uk/sitebuilder2/api/go/redirects.json?maxResults=${maxResults}&prefix=${encodeURIComponent(query)}`, callback);
      },
      minLength,
      display: (item) => item.path,
      displayText: (o) => `<div><p class="go-path">${_.escape(o.path)}</p><p class="go-description">${(typeof o.description !== 'undefined' ? _.escape(o.description) : '')}</p></div>`,
      itemLink: (item) => `https://go.warwick.ac.uk/${item.path}?goSearchReferer=${encodeURIComponent(window.location)}&goSearchQuery=${encodeURIComponent($(el).val())}`,
    }));

    // ID-145
    if ($trigger.width() < 88) {
      $trigger.attr('placeholder', 'Search');
    }
  }

  return this.each(attach);
};

$(() => $('input[data-suggest="go"]').goSearchSuggest());
