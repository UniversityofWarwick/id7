import $ from 'jquery';

$(() => {
  const $siteLinks = $('.id7-site-links');
  const lastSiteLink = $siteLinks.find(':focusable').last()[0];

  $siteLinks.on('keyup', (event) => {
    if (event.key === 'Escape') {
      const $focusableElements = $(':focusable');
      $focusableElements.each((index, element) => {
        if ($focusableElements[index - 1] === lastSiteLink && index > 0) {
          element.focus();
        }
      });
    }
  });
});
