import fUseKey from './fUseKey';

const _isKeyDelete = evt => evt.keyCode === 46
, useKeyDelete = fUseKey(_isKeyDelete);

export default useKeyDelete
