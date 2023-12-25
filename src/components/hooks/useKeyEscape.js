import { FN_NOOP } from '../uiApi'
import { HAS_KEYBOARD_FOCUS } from '../has';
import fUseKey from './fUseKey';

const _isKeyEscape = evt => evt.keyCode === 27
 || evt.key === 'Escape'
, useKeyEscape = HAS_KEYBOARD_FOCUS
   ? fUseKey(_isKeyEscape)
   : FN_NOOP;

export default useKeyEscape
