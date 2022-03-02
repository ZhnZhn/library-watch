import { useState, useCallback } from '../uiApi';

const useToggle = (initialValue) => {
  const [is, setIs] = useState(()=>!!initialValue)
  , toggle = useCallback(() => setIs(is => !is), []);
  return [is, toggle];
};

export default useToggle
