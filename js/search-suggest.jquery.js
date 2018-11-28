/* eslint-env browser */
import $ from 'jquery';
import _ from 'lodash-es';
import Modernizr from 'modernizr';

/**
 * Use Bootstrap 3 typeahead to provide Go.Warwick suggestions on an <input>
 */
function SearchSuggest(options) {
  const o = options || {};
  const $input = o.input;
  $input.typeahead({
    minLength: o.minLength,
    source: o.source,
    displayText: o.displayText,
    matcher: () => true, // All data received from the server matches the query
    highlighter: html => html,
    changeInputOnSelect: false,
    changeInputOnMove: false,
    followLinkOnSelect: true,
    openLinkInNewTab: false,
    selectOnBlur: false,
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
    $(el).next('.fa').on('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      $(el).closest('form').submit();
    });

    // ID-89 On xs, set the min length to 3, not 2, and only show 3 results
    let minLength = 3;
    let maxResults = 3;

    if (Modernizr.mq('only all and (min-width: 768px)')) {
      minLength = 2;
      maxResults = 6;
    }

    $(el).searchSuggest($.extend(options, {
      source: (query, callback) => {
        $.getJSON(`//sitebuilder.warwick.ac.uk/sitebuilder2/api/go/redirects.json?maxResults=${maxResults}&prefix=${encodeURIComponent(query)}&callback=?`, callback);
      },
      minLength,
      display: item => item.path,
      displayText: o => `<div><p class="go-path">${_.escape(o.path)}</p><p class="go-description">${(typeof o.description !== 'undefined' ? _.escape(o.description) : '')}</p></div>`,
      itemLink: item => `https://go.warwick.ac.uk/${item.path}?goSearchReferer=${encodeURIComponent(window.location)}&goSearchQuery=${encodeURIComponent($(el).val())}`,
    }));

    // ID-145
    if ($(el).width() < 88) {
      $(el).attr('placeholder', 'Search');
    }
  }

  return this.each(attach);
};

$(() => $('input[data-suggest="go"]').goSearchSuggest());
