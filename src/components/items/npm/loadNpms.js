import throttleFn from '../../../utils/throttleFn';
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

, loadNpms = throttleFn(_loadNpms, WAIT_MLS);

export default loadNpms
