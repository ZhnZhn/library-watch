import fUseKey from './fUseKey';

const _isKeyEscape = evt =>
  evt.keyCode === 27 || evt.key === 'Escape'
, useKeyEscape = fUseKey(_isKeyEscape);

export default useKeyEscape
