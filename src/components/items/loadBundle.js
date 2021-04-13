import throttleOnce from '../../utils/throttleOnce';
import loadJson from './loadJson';

const C = {
  NAME: 'Bundlephobia.com',
  URI: 'https://bundlephobia.com/api/size?package=',
  WAIT: 3000
};

const _crBundleUri = packageName => `${C.URI}${packageName}`;

const _loadBundle = ({ packageName, onLoad }) => loadJson({
  name: C.NAME,
  uri: _crBundleUri(packageName),
  onLoad
});

const loadBundle = throttleOnce(_loadBundle, C.WAIT);

export default loadBundle
