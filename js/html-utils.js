
const MAPPINGS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const HTML_CHARS_PATTERN = /[&<>"']/g;

export function escape(str) {
  return str.replace(HTML_CHARS_PATTERN, (c) => MAPPINGS[c]);
}
