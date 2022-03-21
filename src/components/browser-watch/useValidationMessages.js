import {
  useState,
  useCallback
} from '../uiApi';

const FN_NOOP = () => {}

const useValidationMessages = (
  preClear=FN_NOOP
) => {
  const [
    validationMessages,
    setValidationMessages
  ] = useState([])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClear = useCallback(() => {
    preClear()
    setValidationMessages(
      prevState => prevState.length > 0
        ? []
        : prevState
    )
  }, []);
  // preClear
  /*eslint-enable react-hooks/exhaustive-deps */

  return [
    validationMessages,
    setValidationMessages,
    _hClear
  ];
};

export default useValidationMessages
