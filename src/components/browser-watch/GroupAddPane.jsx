import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';

import RowInputText from '../dialogs/rows/RowInputText';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

import useValidationMessages from '../hooks/useValidationMessages';
import useWatchListMsEdit from './useWatchListMsEdit';

const GroupAddPane = ({
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

  useWatchListMsEdit(
    forActionType,
    setValidationMessages,
    _hClear
  )

  return (
    <div>
      <RowInputText
         refEl={_refInputText}
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
  forActionType: PropTypes.string,
  msgOnIsEmptyName: PropTypes.func,
  onCreate: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default GroupAddPane
