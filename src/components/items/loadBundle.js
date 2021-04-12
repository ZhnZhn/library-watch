import loadJson from './loadJson'

const C = {
  NAME: 'Bundlephobia.com',
  URI: 'https://bundlephobia.com/api/size?package='
};

const _crBundleUri = packageName => `${C.URI}${packageName}`;

const loadBundle = ({ packageName, onLoad }) => loadJson({
  name: C.NAME,
  uri: _crBundleUri(packageName),
  onLoad
});

export default loadBundle
