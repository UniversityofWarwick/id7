(function($) { 'use strict';

    /**
     * Use Twitter typeahead to provide Go.Warwick suggestions on an <input>
     *
     * @see https://twitter.github.io/typeahead.js/
     */
    var SearchSuggest = (function() {
        function SearchSuggest(o) {
            o = o || {};
            var $input = o.input;
            $input.typeahead({
                minLength: o.minLength,
                hint: o.hint
            },{
                name: o.name,
                source: o.source,
                displayKey: o.displayKey,
                templates: o.templates
            });
        };

        return SearchSuggest;
    })();

    $.fn.searchSuggest = function(o) {
        o = o || {};
        return this.each(attach);
        function attach() {
            var $input = $(this), searchSuggest;
            searchSuggest = new SearchSuggest($.extend(o, {
                input: $input
            }));

            $input.data('id7.search-suggest', searchSuggest);
        };
    };

    $(function() {
        $('input[data-suggest="go"]').searchSuggest({
            name: 'go',
            source: function(query, cb) {
                $.getJSON('//sitebuilder.warwick.ac.uk/sitebuilder2/api/go/redirects.json?maxResults=6&prefix=' + encodeURIComponent(query) + '&callback=?', cb);
            },
            displayKey: 'path',
            minLength: 2,
            hint: false,
            templates: {
                suggestion: _.template([
                    '<p class="go-path"><%= path %></p>',
                    '<p class="go-description"><%= description %></p>'
                ].join(''))
            }
        }).on('typeahead:selected', function(evt, redirect) {
            window.location =
                'http://go.warwick.ac.uk/' + redirect.path +
                '?goSearchReferer=' + encodeURIComponent(window.location) +
                'goSearchQuery=' + $(this).val(); // FIXME this will always contain the selected path name, not the query
        });
    });

})(jQuery);