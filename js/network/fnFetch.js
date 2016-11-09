'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoadingProgressActions = require('../flux/actions/LoadingProgressActions');

var _LoadingProgressActions2 = _interopRequireDefault(_LoadingProgressActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLICK_TIME_INTERVAL = 300,
    MIN_FREQUENCY = 3000,
    LIMIT_REMAINING = 'X-RateLimit-Remaining',
    DONE = 'DONE',
    ALERT_FREQUENCY = {
  errCaption: 'Load Frequency',
  message: 'Exceed item load frequency restriction of ' + MIN_FREQUENCY / 1000 + 's'
},
    ALERT_IN_PROGRESS = {
  errCaption: 'Loading In Progress',
  message: 'Loading data for this item in progress.\nIt seems several clicks on button Load repeatedly happend.'
};

var _recentUri = DONE,
    _recentTime = Date.now() - MIN_FREQUENCY,
    _recentCall = _recentTime;

var _fnSetRecentCall = function _fnSetRecentCall(uri, time) {
  _recentUri = uri;
  _recentCall = time;
};
var _fnSetRecentDone = function _fnSetRecentDone(uri, time) {
  _recentUri = uri;
  _recentTime = time;
};

exports.default = function (_ref) {
  var uri = _ref.uri;
  var option = _ref.option;
  var onCheckResponse = _ref.onCheckResponse;
  var onFetch = _ref.onFetch;
  var onCompleted = _ref.onCompleted;
  var onFailed = _ref.onFailed;
  var onCatch = _ref.onCatch;

  var _nowTime = Date.now();

  if (_nowTime - _recentCall < CLICK_TIME_INTERVAL) {
    return undefined;
  } else if (uri === _recentUri) {
    onCatch({ error: ALERT_IN_PROGRESS, option: option, onFailed: onFailed });
  } else if (_nowTime - _recentTime < MIN_FREQUENCY) {
    onCatch({ error: ALERT_FREQUENCY, option: option, onFailed: onFailed });
  } else {

    _fnSetRecentCall(uri, _nowTime);
    _LoadingProgressActions2.default.loadingProgress();

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

      _fnSetRecentDone(DONE, _nowTime);
      _LoadingProgressActions2.default.loadingProgressComplete();
    }).catch(function (error) {
      onCatch({ error: error, option: option, onFailed: onFailed });

      _fnSetRecentDone(DONE, _nowTime);
      _LoadingProgressActions2.default.loadingProgressFailed();
    });
  }
};
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\network\fnFetch.js.map