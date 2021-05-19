//import PropTypes from "prop-types";

const S = {
  ROOT_DIV : {
    color: '#f44336',
    paddingLeft: 10,
    paddingTop: 5,
  },

  NUMBER : {
    display: 'inline-block',
    width: 22,
    height: 22,
    marginRight: 5,
    border: 'solid 2px #f44336',
    borderRadius: '50%',
    textAlign: 'center'
  },
  MSG : {
    whiteSpace: 'pre',
    fontWeight: 'bold'
  }
};

const ValidationMessage = ({ index, msg }) => (
  <div>
    <span style={S.NUMBER}>{index}</span>
    <span style={S.MSG}>{msg}</span>
  </div>
);
/*
ValidationMessage.propTypes = {
  index: PropTypes.number,
  msg: PropTypes.string
}
*/

const ValidationMessages = ({ validationMessages }) => {
  if (!Array.isArray(validationMessages)){
     return null;
  }
  return (
      <div style={S.ROOT_DIV}>
        {validationMessages.map((msg, index) => (
           <ValidationMessage
              key={index}
              msg={msg}
              index={index+1}
            />
        ))}
      </div>
  );
};

/*
ValidationMessages.propTypes = {
  validationMessages: PropTypes.arrayOf(
    PropTypes.shape({
      msg: PropTypes.string
    })
  )
}
*/

export default ValidationMessages
