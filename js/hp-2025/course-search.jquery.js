/* eslint-env browser */
import $ from 'jquery';
import * as html from '../html-utils';

const Config = {
  Defaults: {
    delay: 200,
    changeInputOnSelect: false,
    changeInputOnMove: false,
    selectOnBlur: false,
    showHintOnFocus: true,
    fitToElement: true,
  },
};

class CourseSearch {
  constructor(options) {
    const o = $.extend({}, Config.Defaults, options);
    this.$form = o.form;
    this.options = o;

    this.init();
  }

  init() {
    const { $form, options } = this;

    // Replace the radio buttons with FontAwesome icons
    const $radios = $form.find('input[type=radio]');
    const $infos = $radios.closest('.radio');

    $radios.each((i, el) => {
      $(el).after(
        $('<i />').addClass('fal fa-fw fa-circle'),
        $('<i />').addClass('far fa-fw fa-dot-circle'),
      );
    });

    const updateRadios = () => {
      $infos.each((index, info) => {
        const $info = $(info);
        const checked = $info.find('input[type=radio]').is(':checked');
        $info.toggleClass('selected', checked);
      });
    };

    $radios.on('change', updateRadios);
    $radios.on('focus blur', (e) => {
      $(e.target).closest('.radio').toggleClass('focused', e.target.focused);
    });
    updateRadios();

    const $search = $form.find('input[type="search"]');

    // ID-89 On xs, set the min length to 3, not 2, and only show 10 results
    let minLength = 3;
    let maxResults = 10;

    if (matchMedia('only all and (min-width: 768px)')?.matches) {
      minLength = 2;
      maxResults = 20;
    }

    $search.attr('autocomplete', 'off').typeahead($.extend({}, options, {
      name: 'course',
      minLength,
      source: (query, sync, async) => {
        const searchQuery = encodeURIComponent(`(title:${query})OR(keywords:${query})OR(title:${query}*)OR(keywords:${query}*)`);

        // SBTWO-8712 Search under multiple locations for undergraduate course information
        const pathQueries = $.map($radios.filter(':checked').data('paths').split(','), (path) => `path:${path.replace(/\//g, '\\/')}\\/*`);
        const pathQuery = encodeURIComponent(`(${pathQueries.join(' OR ')})`);

        $.getJSON(
          `//warwick.ac.uk/ajax/lvsch/query.json?resultsPerPage=${maxResults}&pagenumber=1&q=(${searchQuery})%20AND%20${pathQuery}&fileFormat=text%2Fhtml&callback=?`,
          (results) => async(results.results),
        );
      },
      matcher: () => true, // All data received from the server matches the query
      sorter: (results) => results, // Don't sort
      displayText: (o) => `<div><p class="title">${html.escape(o.title)}</p></div>`,
      highlighter: (html) => html,
      followLinkOnSelect: true,
      showHintOnFocus: false, // ID-381 minLength has no effect unless this is false
      itemLink: (result) => {
        if (result) {
          return result.link;
        }

        return undefined;
      },
      afterSelect: () => $search.trigger('blur'),
    }));
  }
}

$.fn.courseSearch = function initPlugin(o = {}) {
  function attach(i, element) {
    const $form = $(element);
    const courseSearch = new CourseSearch($.extend({}, $form.data(), o, {
      form: $form,
    }));

    $form.data('id7.course-search', courseSearch);
  }

  return this.each(attach);
};

$(() => {
  $('form.course-search-form').courseSearch();
});
