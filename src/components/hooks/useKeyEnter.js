import fUseKey from './fUseKey';

const _isKeyEnter = event => 
 event.keyCode === 13 || event.key === 'Enter'
, useKeyEnter = fUseKey(_isKeyEnter);

export default useKeyEnter
