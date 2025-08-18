import { useCallback } from '../uiApi'
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

const _isKeyEnter = evt => evt.keyCode === 13
  || evt.key === 'Enter'
export const useKeyEnter = fUseKey(_isKeyEnter)

const _isKeyEscape = evt => evt.keyCode === 27
 || evt.key === 'Escape'
export const useKeyEscape = HAS_KEYBOARD_FOCUS
  ? fUseKey(_isKeyEscape)
  : void 0

const _isKeyDelete = evt => evt.keyCode === 46
  || evt.key === 'Delete'
export const useKeyDelete = fUseKey(_isKeyDelete)
