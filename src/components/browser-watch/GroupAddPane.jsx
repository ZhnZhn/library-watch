import {
  useRef,
  useState,
  useCallback
} from '../uiApi';
import useListen from '../hooks/useListen';

import RowInputText from './RowInputText';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const _getRefValue = ref => ref.current;

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
    setValidationMesages
  ] = useState([])
  , _hClear = useCallback(() => {
    _getRefValue(_refInputText).setValue("")
    setValidationMesages([])
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCreate = useCallback(() => {
    const _inputComp = _getRefValue(_refInputText)
    , caption = _inputComp.getValue();
    if (caption){
      onCreate({ caption });
    } else {
      _inputComp.setValue('')
      setValidationMesages([msgOnIsEmptyName('Group')])
    }
  }, [])
  // msgOnIsEmptyName, onCreate
  /*eslint-enable react-hooks/exhaustive-deps */

  useListen(store, (actionType, data) => {
    if (data && data.forActionType === forActionType) {
      if (actionType === actionCompleted) {
        _hClear()
      } else if (actionType === actionFailed) {
        setValidationMesages(data.messages)
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
