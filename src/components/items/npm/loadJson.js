
const ERR_RES = "response isn't OK"
, ERR_FORMAT = "response isn't valid"

, _crResponseError = name => `${name} ${ERR_RES}`
, _crFormatError = name => `${name} ${ERR_FORMAT}`;

const loadJson = ({
  name,
  uri,
  onLoad
}) => fetch(uri)
  .then(res => {
     const { status } = res;
     if (status>199 && status<300) {
       return res.json();
     } else {
       throw new Error(_crResponseError(name));
     }
  })
  .then(json => {
    if (json && !json.code) {
      onLoad(json)
    } else {
      throw new Error(json.message || _crFormatError(name))
    }
  })
  .catch(err => {
    console.log(err)
    onLoad({ errMsg: err.message })
  });

export default loadJson
