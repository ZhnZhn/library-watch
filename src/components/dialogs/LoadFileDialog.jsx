import {
  useRef,
  useCallback,
  getRefValue,
  setRefValue
} from '../uiApi';
import useDialogButtons from './useDialogButtons';
import memoIsShow from './memoIsShow';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import InputFileReader from '../zhn-atoms/InputFileReader';
import D from './DialogCell';

const MSG_FILE_NOT_CHOOSED = 'Please choose file for loading.'
, S_MODAL_DIALOG = { minWidth: 320 }
, S_ROW_INPUT_FILE = { margin: '16px 0' }
, S_ROW_VALIDATION = {
  width: '100%',
  marginRight: 16
};

const LoadFileDialog = memoIsShow(({
  isShow,
  data,
  onClose
}) => {
  const { onLoad } = data
  , _refTupleEventFile = useRef(null)
  , _hChange = useCallback(results => {
    const [_results] = results || []
    , _tupleEventFile = _results
         //progressEvent, file
       ? [_results[0], _results[1]]
       : null
    setRefValue(_refTupleEventFile, _tupleEventFile)
  }, [])
  , [
    validationMessages,
    COMMAND_BUTTONS,
    hClose
  ] = useDialogButtons((
    setValidationMessages,
    clearValidationMessages
  ) => {
    const [
      progressEvent,
      file
    ] = getRefValue(_refTupleEventFile) || [];
    if (progressEvent && file){
      onLoad({ progressEvent });
      clearValidationMessages()
    } else {
      setValidationMessages([MSG_FILE_NOT_CHOOSED])
    }
  }, onClose);

  return (
    <ModalDialog
      style={S_MODAL_DIALOG}
      caption="Load Watch Items from File"
      isShow={isShow}
      commandButtons={COMMAND_BUTTONS}
      onClose={hClose}
    >
       <D.Row style={S_ROW_INPUT_FILE}>
          <InputFileReader
             as="text"
             onChange={_hChange}
          />
       </D.Row>
       <D.Row style={S_ROW_VALIDATION}>
         <D.ValidationMessages
            validationMessages={validationMessages}
         />
       </D.Row>
    </ModalDialog>
  );
});

export default LoadFileDialog
