/* eslint-env browser */
export default function changeLocationHash(hash) {
  if ('replaceState' in window.history) {
    window.history.replaceState({}, null, hash);
  } else {
    window.location.hash = hash;
  }
}
