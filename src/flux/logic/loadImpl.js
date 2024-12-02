import {
  isArr,
  isStr,
} from '../../utils/isTypeFn';
import { delayFn } from '../../utils/delayFn';

import fnFetch from '../../network/fnFetch';
import onCatch from '../../network/fnCatch';

import RestApi from '../../api/RestApi';

const _fetchToChartComp = ({
  json,
  option,
  onCompleted
}) => {
  onCompleted(option, json);
};

const _fFetchUrl = (
  uri,
  onCheckResponse,
  onFailed
) => ({
  json,
  option,
  onCompleted
}) => {
  option.json1 = json
  delayFn(4000, () => fnFetch({
    uri,
    option,
    onCheckResponse,
    onFetch : _fetchToChartComp,
    onCompleted,
    onCatch,
    onFailed
  }))
};

const loadItem = (
  option,
  onCompleted,
  onFailed
) => {
  const api = RestApi.getApi(option)
  , _uri = api.getRequestUrl(option)
  , onCheckResponse = api.checkResponse
  , [
    uri,
    onFetch
  ] = isStr(_uri)
    ? [_uri, _fetchToChartComp]
    : isArr(_uri)
       ? [_uri[0], _fFetchUrl(_uri[1], onCheckResponse, onFailed)]
       : [];

   fnFetch({
     uri,
     onFetch,
     onCheckResponse,
     option,
     onCompleted,
     onCatch,
     onFailed
   })

};

const loadImpl = {
  loadItem,
  crKey: RestApi.crKey
};

export default loadImpl
