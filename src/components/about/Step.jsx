import React from 'react';

const S = {
  STEP : {
    display : 'inline-block',
    color: '#80c040',
    width : 22,
    height : 22,
    border : '2px solid #80c040',
    borderRadius : '50%',
    textAlign: 'center'
  }
};

const Step = ({ step }) => (
  <span style={S.STEP}>
     {step}
  </span>
);


export default Step
