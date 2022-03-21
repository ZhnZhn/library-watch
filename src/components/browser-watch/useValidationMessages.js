import {
  useState,
  useCallback
} from '../uiApi';

const useValidationMessages = () => {
  const [
    validationMessages,
    setValidationMessages
  ] = useState([])
  , _hClear = useCallback(() => {
    setValidationMessages(
      prevState => prevState.length > 0
        ? []
        : prevState
    )
  }, []);
  return [
    validationMessages,
    setValidationMessages,
    _hClear
  ];
};

export default useValidationMessages
