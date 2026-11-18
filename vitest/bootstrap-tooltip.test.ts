import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { JSDOM } from 'jsdom';
import jqueryFactory from 'jquery';
import { expect, test } from 'vitest';

declare global {
  interface JQuery<TElement = HTMLElement> {
    tooltip(options?: string | Record<string, unknown>): this;
  }
}

// Some security patches have been made to sanitizeHtml to prevent DOM clobbering attacks.
// This test ensures that the sanitizeHtml function still works.
test('sanitizeHtml removes unsafe attributes and URLs', async () => {
  const dom = new JSDOM();
  const $ = jqueryFactory(dom.window) as unknown as JQueryStatic;
  const source = await readFile(new URL('../bootstrap/js/tooltip.js', import.meta.url), 'utf8');

  const win = dom.window;
  const doc = win.document;

  // Evaluate tooltip.js code in a new context with a safe Document and jQuery
  runInNewContext(source, {
    DOMParser: win.DOMParser,
    document: doc,
    jQuery: $,
    window: win,
  });

  // I don't think JSDOM actually implements DOM like a browser to the extent that
  // we could test DOM clobbering, so this part may be doing nothing. We no longer
  // rely on document.implementation existing so we should be safe.
  const badimg = doc.createElement('img');
  badimg.setAttribute('name', 'implementation'); // DOM clobbering attempt
  doc.body.appendChild(badimg);

  const element = doc.createElement('button');
  $(element).tooltip({ trigger: 'manual' });

  expect($(element).data('bs.tooltip').sanitizeHtml(
    '<a href="javascript:alert(1)" onclick="alert(1)">safe</a>',
  )).toBe('<a>safe</a>');

  dom.window.close();
});
