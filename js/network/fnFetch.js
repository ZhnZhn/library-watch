'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _LoadingProgressActions = require('../flux/actions/LoadingProgressActions');

var _LoadingProgressActions2 = _interopRequireDefault(_LoadingProgressActions);

var _fetchJson = require('./fetchJson');

var _fetchJson2 = _interopRequireDefault(_fetchJson);

var _fetchCsvStream = require('./fetchCsvStream');

var _fetchCsvStream2 = _interopRequireDefault(_fetchCsvStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLICK_TIME_INTERVAL = 300,
    MIN_FREQUENCY = 3000,
    DONE = 'DONE',
    ALERT_FREQUENCY = {
  errCaption: 'Load Frequency',
  message: 'Exceed item load frequency restriction of ' + MIN_FREQUENCY / 1000 + 's'
},
    ALERT_IN_PROGRESS = {
  errCaption: 'Loading In Progress',
  message: 'Loading data for this item in progress.\nIt seems several clicks on button Load repeatedly happend.'
}; //import csvtojson from 'csvtojson'

var _crErr = function _crErr() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      status = _ref.status,
      statusText = _ref.statusText;

  return {
    errCaption: 'Request Error',
    message: status + ' : ' + statusText
  };
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

var _starLoading = function _starLoading(uri, nowTime) {
  _fnSetRecentCall(uri, nowTime);
  _LoadingProgressActions2.default.loadingProgress();
};

var _doneOk = function _doneOk(nowTime) {
  _fnSetRecentDone(DONE, nowTime);
  _LoadingProgressActions2.default.loadingProgressComplete();
};

var _doneFailure = function _doneFailure(nowTime) {
  _fnSetRecentDone(DONE, nowTime);
  _LoadingProgressActions2.default.loadingProgressFailed();
};

exports.default = function (config) {
  var uri = config.uri,
      option = config.option,
      onFailed = config.onFailed,
      onCatch = config.onCatch;

  var _nowTime = Date.now();

  if (_nowTime - _recentCall < CLICK_TIME_INTERVAL) {
    return void 0;
  } else if (uri === _recentUri) {
    onCatch({ error: ALERT_IN_PROGRESS, option: option, onFailed: onFailed });
  } else if (_nowTime - _recentTime < MIN_FREQUENCY) {
    onCatch({ error: ALERT_FREQUENCY, option: option, onFailed: onFailed });
  } else {

    var _configFetch = (0, _extends3.default)({}, config, {
      _crErr: _crErr,
      _nowTime: _nowTime, _doneOk: _doneOk, _doneFailure: _doneFailure
    });

    _starLoading(uri, _nowTime);

    var fetchType = option.fetchType;

    if (fetchType === 'csv-stream') {
      (0, _fetchCsvStream2.default)(_configFetch);
    } else {
      (0, _fetchJson2.default)(_configFetch);
    }
  }
};
//# sourceMappingURL=fnFetch.js.map