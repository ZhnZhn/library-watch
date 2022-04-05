import ErrMsg from '../ErrMsg';

const _isObj = obj => typeof obj === 'object'
 && obj !== null;

const checkResponseJson = json => {
  if (!_isObj(json)) { return null; }

  const { errMsg } = json;
  if (errMsg) {
   return (<ErrMsg errMsg={errMsg} />);
  }
  return true;
};

export default checkResponseJson
