import { useCallback } from '../uiApi';

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

export default fUseKey
