/*global _:false */

(function ($) {
  'use strict';

  /**
   * Use Twitter typeahead to provide Go.Warwick suggestions on an <input>
   *
   * @see https://twitter.github.io/typeahead.js/
   */
  var SearchSuggest = (function () {
    function SearchSuggest(o) {
      o = o || {};
      var $input = o.input;
      $input.typeahead({
        minLength: o.minLength,
        hint: o.hint
      }, {
        name: o.name,
        source: o.source,
        displayKey: o.displayKey,
        templates: o.templates
      });
    }

    return SearchSuggest;
  })();

  $.fn.searchSuggest = function (o) {
    o = o || {};

    function attach(i, element) {
      var $input = $(element);
      var searchSuggest = new SearchSuggest($.extend(o, {
        input: $input
      }));

      $input.data('id7.search-suggest', searchSuggest);
    }

    return this.each(attach);
  };

  $(function () {
    $('input[data-suggest="go"]').each(function (i, el) {
      $(el).searchSuggest({
        name: 'go',
        source: function (query, cb) {
          $.getJSON('//sitebuilder.warwick.ac.uk/sitebuilder2/api/go/redirects.json?maxResults=6&prefix=' + encodeURIComponent(query) + '&callback=?', cb);
        },
        displayKey: 'path',
        minLength: 2,
        hint: false,
        templates: {
          suggestion: _.template([
            '<p class="go-path"><%= path %></p>',
            '<p class="go-description"><% if (typeof description !== "undefined") { print(description); } %></p>'
          ].join(''))
        }
      });

      var tt = $(el).data('ttTypeahead');
      tt.input.onSync('queryChanged', function (evtName, query) {
        $(el).data('original-query', query);
      });

      $(el).on('typeahead:selected', function (evt, redirect) {
        window.location =
          'http://go.warwick.ac.uk/' + redirect.path +
          '?goSearchReferer=' + encodeURIComponent(window.location) +
          '&goSearchQuery=' + encodeURIComponent($(this).data('original-query'));
      });
    });
  });

})(jQuery);
