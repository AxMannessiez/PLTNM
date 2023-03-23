import _ from 'lodash';

export default function getSamples(list, n) {
  return _.sampleSize(list, n);
}
