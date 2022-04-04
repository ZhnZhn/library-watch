import { useCallback } from '../uiApi';
import useValidationMessages from '../hooks/useValidationMessages';
import useCommandButtons from './useCommandButtons';

const useDialogButtons = (
  handleLoad,
  onClose
) => {
  const [
    validationMessages,
    _setValidationMessages,
    _clearValidationMessages
  ] = useValidationMessages()
/*eslint-disable react-hooks/exhaustive-deps */
  , hLoad = useCallback(() => {
    handleLoad(
      _setValidationMessages,
      _clearValidationMessages
    )
  }, [])
  // handleLoad, _setValidationMessages, _clearValidationMessages
  , COMMAND_BUTTONS = useCommandButtons(hLoad)
  /*eslint-disable react-hooks/exhaustive-deps */
  , hClose = useCallback(() => {
     _clearValidationMessages()
     onClose();
  }, []);
  /*eslint-enable react-hooks/exhaustive-deps */

  return [
    validationMessages,
    COMMAND_BUTTONS,
    hClose,
    hLoad
  ];
};

export default useDialogButtons
