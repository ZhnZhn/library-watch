import throttleOnce from '../../utils/throttleOnce';
import loadJson from './loadJson';

const C = {
  NAME: 'Npms.io',
  NPMS_URI: 'https://api.npms.io/v2/package/',
  WAIT: 3000
};

const _crNpmsUri = packageName => `${C.NPMS_URI}${packageName}`;

const _loadNpms = ({ packageName, onLoad }) => loadJson({
  name: C.NAME,
  uri: _crNpmsUri(packageName),
  onLoad
});

const loadNpms = throttleOnce(_loadNpms, C.WAIT);

export default loadNpms
