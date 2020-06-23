
/**
 * Recursively traverses a node for text nodes, but skips any elements with the
 * Bootstrap sr-only class because they are visually hidden.
 *
 * @param {Node} node
 * @returns {Node[]} Array of text nodes
 */
export function getVisibleTextNodesIn(node) {
  const textNodes = [];

  function walkTextNodes(n) {
    if (n.nodeType === Node.ELEMENT_NODE && n.classList.contains('sr-only')) {
      // skip this element and contents - it's for screenreaders only.
    } else if (n.nodeType === Node.TEXT_NODE) {
      textNodes.push(n);
    } else {
      for (let i = 0, len = n.childNodes.length; i < len; i += 1) {
        walkTextNodes(n.childNodes[i]);
      }
    }
  }

  walkTextNodes(node);
  return textNodes;
}
