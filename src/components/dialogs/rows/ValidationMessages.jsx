//import PropTypes from "prop-types";

const _isArr = Array.isArray
, S_ROOT_DIV = {
  color: '#f44336',
  padding: '5px 0 0 10px'
}
, S_NUMBER = {
  display: 'inline-block',
  width: 22,
  height: 22,
  marginRight: 5,
  border: 'solid 2px #f44336',
  borderRadius: '50%',
  textAlign: 'center'
}
, S_MSG = {
  whiteSpace: 'pre',
  fontWeight: 'bold'
};

const ValidationMessage = ({ 
  index,
  msg
}) => (
  <div>
    <span style={S_NUMBER}>{index}</span>
    <span style={S_MSG}>{msg}</span>
  </div>
);

const ValidationMessages = ({
  validationMessages
}) => {
  if (!_isArr(validationMessages)){
     return null;
  }
  return (
    <div style={S_ROOT_DIV}>
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
