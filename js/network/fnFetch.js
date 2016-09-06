'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LIMIT_REMAINING = 'X-RateLimit-Remaining',
    DONE = 'DONE';

/*
const _defaultOption = {
  method: 'GET',
  headers : new Headers(),
  mode : 'cors',
  cache: 'default'
}
*/

var _recentUri = DONE;

exports.default = function (_ref) {
  var uri = _ref.uri;
  var option = _ref.option;
  var onCheckResponse = _ref.onCheckResponse;
  var onFetch = _ref.onFetch;
  var onCompleted = _ref.onCompleted;
  var onFailed = _ref.onFailed;
  var onCatch = _ref.onCatch;

  if (uri === _recentUri) {
    onCatch({
      error: {
        errCaption: 'Loading In Progress',
        message: 'Loading data for this item in progress.\nIt seems several clicks on button Load repeatedly happend.'
      },
      option: option, onFailed: onFailed
    });
  } else {
    _recentUri = uri;
    fetch(uri).then(function (response) {
      var status = response.status;
      var statusText = response.statusText;
      var headers = response.headers;

      option.limitRemaining = headers.get(LIMIT_REMAINING);
      if (status >= 200 && status <= 400) {
        return response.json();
      } else if (status > 400 && status < 500) {
        throw { errCaption: 'Request Error', message: status + ' : ' + statusText };
      } else if (status >= 500 && status < 600) {
        throw { errCaption: 'Response Error', message: status + ' : ' + statusText };
      }
    }).then(function (json) {
      if (onCheckResponse(json, option)) {
        onFetch({ json: json, option: option, onCompleted: onCompleted });
      }
      _recentUri = DONE;
    }).catch(function (error) {
      onCatch({ error: error, option: option, onFailed: onFailed });
      _recentUri = DONE;
    });
  }
};
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\network\fnFetch.js.map