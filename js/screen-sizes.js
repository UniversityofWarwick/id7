/* eslint-env browser */
import _ from 'lodash-es';
import FeatureDetect from './feature-detect';

const ScreenSizes = [
  {
    name: 'lg', test() { return FeatureDetect.mq('only all and (min-width: 1200px)'); }, container: 1170,
  },
  {
    name: 'md', test() { return FeatureDetect.mq('only all and (min-width: 992px)'); }, container: 970,
  },
  {
    name: 'sm', test() { return FeatureDetect.mq('only all and (min-width: 768px)'); }, container: 750,
  },
  {
    name: 'xs', test() { return true; },
  },
];

export default function currentScreenSize() {
  return _.find(ScreenSizes, (screenConfig) => screenConfig.test());
}
