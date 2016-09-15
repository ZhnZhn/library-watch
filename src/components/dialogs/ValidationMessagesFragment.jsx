import React from 'react';

const STYLE = {
  ROOT_DIV : {
    paddingLeft: '10px',
    paddingTop: '5px',
    color: '#F44336'
  },

  NUMBER_DIV : {
    display: 'inline-block',
    width: '22px',
    height: '22px',
    border: 'solid 2px #F44336',
    borderRadius: '50%',
    textAlign: 'center',
    marginRight: '5px'
  },

  MSG_SPAN : {
    whiteSpace : 'pre',
    fontWeight : 'bold'
  }
}

const ValidationMessage = (props) => {
  const { index, msg } = props;
  return (
    <div>
      <div style={STYLE.NUMBER_DIV}>{index+1}</div>
      <span style={STYLE.MSG_SPAN}>{msg}</span>
    </div>
  );
}

const ValidationMessagesFragment = (props) => {
   const { validationMessages } = props;

   if (!Array.isArray(validationMessages)){
     return undefined;
   }

  const _renderValidationMessages = (msgs) => {
    return msgs.map((msg, index)=>{
      return (
        <ValidationMessage key={index} msg={msg} index={index} />
      );
    });
  }

  return (
      <div style={STYLE.ROOT_DIV}>
        {_renderValidationMessages(validationMessages)}
      </div>
  );
};

export default ValidationMessagesFragment
