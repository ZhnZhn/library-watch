const S_ERR = {
  color: '#f44336',
  fontWeight: 'bold'
};

const ErrMsg = ({ 
  errMsg
}) => (
  <div style={S_ERR}>{errMsg}</div>
);

export default ErrMsg
