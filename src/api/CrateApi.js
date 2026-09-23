import {
  crErrMsg,
  crProviderApi
} from './apiFn';

const PROVIDER_URL = "https://crates.io"
, API_URL = `${PROVIDER_URL}/api/v1/crates`
, _isArr = Array.isArray
, getRequestUrl = (
  option
) => {
  const { repo } = option;
  option.sourceLink = `${PROVIDER_URL}/crates/${repo}`
  return [
    `${API_URL}/${repo}`,
    `${API_URL}/${repo}/downloads`
  ];
}
, checkResponse = (
  json,
  option
) => {
  if (option.json1) {
    const { meta } = json || {}
    , { extra_downloads } = meta || {};

     if (!_isArr(extra_downloads)) {
       throw crErrMsg(
         "Request crate",
         "Incorrect response"
       );
     }
  }
};

const CrateApi = crProviderApi(
  getRequestUrl,
  checkResponse
);

export default CrateApi
