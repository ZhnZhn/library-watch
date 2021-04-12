import loadJson from './loadJson';

const C = {
  NAME: 'Npms.io',
  NPMS_URI: 'https://api.npms.io/v2/package/'
};

const _crNpmsUri = packageName => `${C.NPMS_URI}${packageName}`;

const loadNpms = ({ packageName, onLoad }) => loadJson({
  name: C.NAME,
  uri: _crNpmsUri(packageName),
  onLoad
});

export default loadNpms
