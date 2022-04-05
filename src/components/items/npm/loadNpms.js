import throttleOnce from '../../../utils/throttleOnce';
import loadJson from './loadJson';

const NAME = 'Npms.io'
, NPMS_URI = 'https://api.npms.io/v2/package/'
, WAIT_MLS = 3000

, _crNpmsUri = packageName => `${NPMS_URI}${packageName}`

, _loadNpms = ({
  packageName,
  onLoad
}) => loadJson({
  name: NAME,
  uri: _crNpmsUri(packageName),
  onLoad
})

, loadNpms = throttleOnce(_loadNpms, WAIT_MLS);

export default loadNpms
