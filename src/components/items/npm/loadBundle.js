import throttleOnce from '../../../utils/throttleOnce';
import loadJson from './loadJson';

const NAME = 'Bundlephobia.com'
, BUNDLE_URI = 'https://bundlephobia.com/api/size?package='
, WAIT_MLS = 3000;

const _crBundleUri = packageName => `${BUNDLE_URI}${packageName}`;

const _loadBundle = ({
  packageName,
  onLoad
}) => loadJson({
  name: NAME,
  uri: _crBundleUri(packageName),
  onLoad
});

const loadBundle = throttleOnce(_loadBundle, WAIT_MLS);

export default loadBundle
