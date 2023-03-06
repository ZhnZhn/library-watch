import { useState } from '../uiApi';
import useListen from '../hooks/useListen';

const WITHOUT_LIMIT = ''
, S_LIMIT_VALUE = {
  display: 'inline-block',
  color:'#2f7ed8',
  padding: '5px 10px 0',
  fontSize: '16px',
  fontWeight: 'bold'
};

const LimitRemainingLabel = ({
  store
}) => {
  const [
    value,
    setValue
  ] = useState('');

  useListen(store, (limitValue) => {
    setValue(limitValue != null
      ? limitValue
      : WITHOUT_LIMIT
    )
  }, 'listenLimitRemaining')

  return (
    <span style={S_LIMIT_VALUE}>
      {value}
    </span>
  );
};

export default LimitRemainingLabel
