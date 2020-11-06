import { useState } from 'react';

import useListen from '../hooks/useListen'

const WITHOUT_LIMIT = '';
const S = {
  LABEL: {
    position: 'relative',
    top: 4,
    display: 'inline-block',
    color:'#2f7ed8',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

const LimitRemainingLabel  = ({ style, store }) => {
  const [value, setValue] = useState('');

  useListen(store, (limitValue) => {
    const _value = limitValue != null
      ? limitValue
      : WITHOUT_LIMIT;
    setValue(_value)
  }, 'listenLimitRemaining')

  return (
    <span style={{...S.LABEL, ...style}}>
      {value}
    </span>
  );
}


export default LimitRemainingLabel
