/* eslint-env browser */
import Modernizr from 'modernizr';
import _ from 'lodash-es';

const ScreenSizes = [
  {
    name: 'lg', test() { return Modernizr.mq('only all and (min-width: 1200px)'); }, container: 1170,
  },
  {
    name: 'md', test() { return Modernizr.mq('only all and (min-width: 992px)'); }, container: 970,
  },
  {
    name: 'sm', test() { return Modernizr.mq('only all and (min-width: 768px)'); }, container: 750,
  },
  {
    name: 'xs', test() { return true; },
  },
];

export default function currentScreenSize() {
  return _.find(ScreenSizes, screenConfig => screenConfig.test());
}
