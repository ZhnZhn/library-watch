import { useLimitRemaining } from '../../flux/storeAtoms';

const S_LIMIT_VALUE = {
  display: 'inline-block',
  color:'#2f7ed8',
  padding: '5px 10px 0',
  fontSize: '16px',
  fontWeight: 'bold'
};

const LimitRemainingLabel = () => {
  const value = useLimitRemaining();

  return (
    <span style={S_LIMIT_VALUE}>
      {value}
    </span>
  );
};

export default LimitRemainingLabel
