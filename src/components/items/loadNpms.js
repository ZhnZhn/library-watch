
const C = {
  NPMS_URI: 'https://api.npms.io/v2/package/',
  ERR_RES: "Response isn't OK",
  ERR_FORMAT_DF: "Response isn't valid"
};

const _crNpmsUri = packageName => `${C.NPMS_URI}${packageName}`;

const loadNpms = ({ packageName, onLoad }) => fetch(_crNpmsUri(packageName))
  .then(res => {
     const { status } = res;
     if (status>199 && status<300) {
       return res.json();
     } else {
       throw new Error(C.ERR_RES);
     }
  })
  .then(json => {
    if (json && !json.code) {
      onLoad(json)
    } else {
      throw new Error(json.message || C.ERR_FORMAT_DF)
    }
  })
  .catch(err => {
    console.log(err)
  })

  export default loadNpms
