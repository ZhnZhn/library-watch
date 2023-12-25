import { HAS_KEYBOARD_FOCUS } from '../has';
import fUseKey from './fUseKey';

const _isKeyEscape = evt => evt.keyCode === 27
 || evt.key === 'Escape'
, FN_VOID = void 0
, useKeyEscape = HAS_KEYBOARD_FOCUS
   ? fUseKey(_isKeyEscape)
   : FN_VOID;

export default useKeyEscape
