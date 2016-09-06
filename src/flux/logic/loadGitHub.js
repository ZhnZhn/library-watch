
import fnFetch from '../../network/fnFetch';
import fnCatch from '../../network/fnCatch';

import RestApi from '../../api/RestApi';


const _loadToChartComp = function(option, onCompleted, onFailed){
  fnFetch({
    uri : RestApi.getRequestUrl(option),
    option : option,
    onCheckResponse : RestApi.getOnCheckResponse(option),
    onFetch : _fnFetchToChartComp,
    onCompleted : onCompleted,
    onCatch : fnCatch,
    onFailed : onFailed
  })
}

const _fnFetchToChartComp = function({ json, option, onCompleted }){
  //const {config} = QuandlAdapter.toConfig(json, option);
  //onCompleted(option, config);
  onCompleted(option, json);
}


const loadGitHub = function(option, onCompleted, onFailed){
  _loadToChartComp(option, onCompleted, onFailed);

}

export { loadGitHub }
