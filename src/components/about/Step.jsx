const COLOR_STEP = '#80c040'
, S_STEP = {
  display: 'inline-block',
  color: COLOR_STEP,
  width: 24,
  height: 24,
  border: `2px solid ${COLOR_STEP}`,
  borderRadius: '50%',
  textAlign: 'center'
};

const Step = ({ step }) => (
  <span style={S_STEP}>
    {step}
  </span>
);

export default Step
