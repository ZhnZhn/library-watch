import { useState } from 'react';

import useListen from '../hooks/useListen';

const WITHOUT_LIMIT = ''
, S_LABEL = {
  position: 'relative',
  top: 4,
  display: 'inline-block',
  color:'#2f7ed8',
  padding: '0 10px',
  fontSize: '16px',
  fontWeight: 'bold'
};

const LimitRemainingLabel = ({
  style,
  store
}) => {
  const [value, setValue] = useState('');

  useListen(store, (limitValue) => {
    const _value = limitValue != null
      ? limitValue
      : WITHOUT_LIMIT;
    setValue(_value)
  }, 'listenLimitRemaining')

  return (
    <span style={{...S_LABEL, ...style}}>
      {value}
    </span>
  );
};

export default LimitRemainingLabel
