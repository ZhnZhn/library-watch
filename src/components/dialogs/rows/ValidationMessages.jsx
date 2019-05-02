import React from 'react';
//import PropTypes from "prop-types";

const S = {
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

const ValidationMessage = ({ index, msg }) => (
  <div>
    <div style={S.NUMBER_DIV}>{index+1}</div>
    <span style={S.MSG_SPAN}>{msg}</span>
  </div>
);
/*
ValidationMessage.propTypes = {
  index: PropTypes.number,
  msg: PropTypes.string
}
*/

const ValidationMessages = (props) => {
   const { validationMessages } = props;

   if (!Array.isArray(validationMessages)){
     return null;
   }

  const _renderValidationMessages = (msgs) => {
    return msgs.map((msg, index)=>{
      return (
        <ValidationMessage key={index} msg={msg} index={index} />
      );
    });
  }

  return (
      <div style={S.ROOT_DIV}>
        {_renderValidationMessages(validationMessages)}
      </div>
  );
};

/*
ValidationMessagesFragment.propTypes = {
  validationMessages: PropTypes.arrayOf(
    PropTypes.shape({
      msg: PropTypes.string
    })
  )
}
*/

export default ValidationMessages