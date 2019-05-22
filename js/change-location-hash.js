/* eslint-env browser */
export default function changeLocationHash(hash) {
  if ('replaceState' in window.history) {
    if (hash) {
      window.history.replaceState({}, null, hash);
    } else {
      window.history.replaceState({}, null, window.location.pathname + window.location.search);
    }
  } else {
    window.location.hash = hash;
  }
}
