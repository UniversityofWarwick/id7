/* eslint-env browser */
import _ from 'lodash-es';

const ScreenSizes = [
  {
    name: 'lg', matcher() { return window.matchMedia('(min-width: 1200px)'); }, container: 1170,
  },
  {
    name: 'md', matcher() { return window.matchMedia('(min-width: 992px) and (max-width: 1199px)'); }, container: 970,
  },
  {
    name: 'sm', matcher() { return window.matchMedia('(min-width: 768px) and (max-width: 991px)'); }, container: 750,
  },
  {
    name: 'xs', matcher() { return window.matchMedia('(max-width: 767px)'); },
  },
];

export default function currentScreenSize() {
  return _.find(ScreenSizes, (screenConfig) => screenConfig.matcher().matches);
}

export function allScreenSizes() {
  return ScreenSizes;
}
