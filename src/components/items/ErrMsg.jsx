const S = {
  ERR: {
    color: '#f44336',
    fontWeight: 'bold'
  }
};

const ErrMsg = ({ errMsg }) => (
  <div style={S.ERR}>{errMsg}</div>
);

export default ErrMsg
