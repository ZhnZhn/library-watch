//import PropTypes from 'prop-types'
import {
  useRef,
  useState,
  useCallback
} from '../uiApi';
import useListen from '../hooks/useListen';

import RowInputText from './RowInputText';
import FlatButton from '../zhn-m/FlatButton';
import ValidationMessages from '../dialogs/rows/ValidationMessages';

const S_DIV_BTS = {
  textAlign: 'right',
  margin: '8px 4px 10px 0',
  cursor: 'default'
}
, _getRefValue = ref => ref.current;

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
      <div style={S_DIV_BTS}>
         <FlatButton
            isPrimary={true}
            caption="Create"
            timeout={0}
            onClick={_hCreate}
         />
         <FlatButton
            caption="Clear"
            timeout={0}
            onClick={_hClear}
         />
         <FlatButton
            caption="Close"
            timeout={0}
            onClick={onClose}
         />
       </div>
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
