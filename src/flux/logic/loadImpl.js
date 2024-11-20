import fnFetch from '../../network/fnFetch';
import fnCatch from '../../network/fnCatch';

import RestApi from '../../api/RestApi';

const _fnFetchToChartComp = ({
  json,
  option,
  onCompleted
}) => {
  onCompleted(option, json);
};

const loadItem = (
  option,
  onCompleted,
  onFailed
) => {
  fnFetch({
    uri : RestApi.getRequestUrl(option),
    option : option,
    onCheckResponse : RestApi.getOnCheckResponse(option),
    onFetch : _fnFetchToChartComp,
    onCompleted : onCompleted,
    onCatch : fnCatch,
    onFailed : onFailed
  })
};

const loadImpl = {
  loadItem,
  crKey: RestApi.crKey
};

export default loadImpl
