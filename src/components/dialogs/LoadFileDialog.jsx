import {
  memo,
  useRef,
  useState,
  useCallback
} from '../uiApi';

import FlatButton from '../zhn-m/FlatButton';
import ModalDialog from '../zhn-moleculs/ModalDialog';
import InputFileReader from '../zhn-atoms/InputFileReader';
import ValidationMessages from './rows/ValidationMessages';
import styles from '../styles/DialogStyles';

const MSG_FILE_NOT_CHOOSED = 'Please choose file for loading.'
, S_MODAL_DIALOG = { minWidth: 320 }
, S_ROW_INPUT_FILE = { margin: '16px 0' }
, S_ROW_VALIDATION = {
  width: '100%',
  marginRight: 16
};

const _getRefValue = ref => ref.current
, _setRefValue = (ref, value) => ref.current = value
, _isNotShouldRerender = (props, nextProps) =>
  props.isShow === nextProps.isShow;

const LoadFileDialog = memo(({
  isShow,
  data,
  onClose
}) => {
  const _refTupleEventFile = useRef(null)
  , [
    validationMessages,
    setValidationMessages
  ] = useState([])
  , _hChange = useCallback(results => {
    const [_results] = results || []
    , _tupleEventFile = _results
         //progressEvent, file
       ? [_results[0], _results[1]]
       : null
    _setRefValue(_refTupleEventFile, _tupleEventFile)
  }, [])
  , _hLoad = () => {
    const [
      progressEvent,
      file
    ] = _getRefValue(_refTupleEventFile) || [];
    if (progressEvent && file){
      const { onLoad } = data;
      onLoad({ progressEvent });
      setValidationMessages([])
    } else {
      setValidationMessages([MSG_FILE_NOT_CHOOSED])
    }
  }
  , _hClose = useCallback(() => {
    setValidationMessages(prevState =>
      prevState.length !== 0
        ? [] : prevState
    )
    onClose()
  }, [onClose])
  , _commandButtons = [
     <FlatButton
       key="load"
       isPrimary={true}
       caption="Load"
       timeout={2000}
       onClick={_hLoad}
     />
  ];

  return (
    <ModalDialog
      style={S_MODAL_DIALOG}
      caption="Load Watch Items from File"
      isShow={isShow}
      commandButtons={_commandButtons}
      onClose={_hClose}
    >
       <div style={{
         ...styles.rowDiv,
         ...S_ROW_INPUT_FILE
       }}>
          <InputFileReader
             as="text"
             onChange={_hChange}
          />
       </div>
       <div style={{
         ...styles.rowDiv,
         ...S_ROW_VALIDATION
       }}>
         <ValidationMessages
            validationMessages={validationMessages}
         />
       </div>
    </ModalDialog>
  );
}, _isNotShouldRerender)

export default LoadFileDialog
