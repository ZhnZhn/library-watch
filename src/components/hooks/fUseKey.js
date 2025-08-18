import { FN_NOOP, useCallback } from '../uiApi'
import { HAS_KEYBOARD_FOCUS } from '../has';

/*eslint-disable react-hooks/exhaustive-deps */
const fUseKey = isKey => (
  fn, {
    deps,
    isPropagation
  } = {}
) => useCallback(evt => {
  if (isKey(evt)) {
    evt.preventDefault()
    if (!isPropagation) {
      evt.stopPropagation()
    }
    fn(event)
  }
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

const _isKeyEscape = evt => evt.keyCode === 27
 || evt.key === 'Escape'
export const useKeyEscape = HAS_KEYBOARD_FOCUS
  ? fUseKey(_isKeyEscape)
  : FN_NOOP

const _isKeyDelete = evt => evt.keyCode === 46
export const useKeyDelete = fUseKey(_isKeyDelete)

export default fUseKey
