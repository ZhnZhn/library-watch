import { useState, useCallback } from 'react'

const useToggle = (initialValue) => {
  const [is, setIs] = useState(()=>!!initialValue)
  , toggle = useCallback(() => setIs(is => !is), []);
  return [is, toggle];
};

export default useToggle
