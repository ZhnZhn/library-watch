import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';
import useValidationMessages from '../hooks/useValidationMessages';
import useListen from '../hooks/useListen';

import RowInputText from './RowInputText';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const GroupAddPane = ({
  store,
  actionCompleted,
  actionFailed,
  forActionType,
  msgOnIsEmptyName,
  onCreate,
  onClose
}) => {
  const _refInputText = useRef()
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages(
    () => getRefValue(_refInputText).setValue("")
  )
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCreate = useCallback(() => {
    const _inputComp = getRefValue(_refInputText)
    , caption = _inputComp.getValue();
    if (caption){
      onCreate({ caption });
    } else {
      _inputComp.setValue('')
      setValidationMessages([msgOnIsEmptyName('Group')])
    }
  }, [])
  // msgOnIsEmptyName, onCreate
  /*eslint-enable react-hooks/exhaustive-deps */

  useListen(store, (actionType, data) => {
    if (data && data.forActionType === forActionType) {
      if (actionType === actionCompleted) {
        _hClear()
      } else if (actionType === actionFailed) {
        setValidationMessages(data.messages)
      }
    }
  })

  return (
    <div>
      <RowInputText
         ref={_refInputText}
         caption="Group"
      />
      <ValidationMessages
         validationMessages={validationMessages}
       />
      <RowButtons
         caption="Create"
         onClick={_hCreate}
         onClear={_hClear}
         onClose={onClose}
      />
    </div>
  );
};

/*
GroupAddPane.propTypes = {
  store: PropTypes.object,
  actionCompleted: PropTypes.string,
  actionFailed: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnIsEmptyName: PropTypes.func,
  onCreate: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default GroupAddPane
