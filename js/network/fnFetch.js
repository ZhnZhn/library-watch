"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fetchJson = _interopRequireDefault(require("./fetchJson"));
var _fetchCsvStream = _interopRequireDefault(require("./fetchCsvStream"));
const CLICK_TIME_INTERVAL = 300,
  MIN_FREQUENCY = 3000,
  DONE = 'DONE',
  _crErrMsg = (errCaption, message) => ({
    errCaption,
    message
  }),
  ALERT_FREQUENCY = _crErrMsg('Load Frequency', "Exceed item load frequency restriction of " + MIN_FREQUENCY / 1000 + "s"),
  ALERT_IN_PROGRESS = _crErrMsg('Loading In Progress', 'Loading data for this item in progress.\nIt seems several clicks on button Load repeatedly happend.');
const _crErr = function (_temp) {
  let {
    status,
    statusText
  } = _temp === void 0 ? {} : _temp;
  return _crErrMsg('Request Error', status + ": " + statusText);
};
const _crErrResp = () => _crErrMsg('Response Error', 'Response format is incorrect.');
let _recentUri = DONE,
  _recentTime = Date.now() - MIN_FREQUENCY,
  _recentCall = _recentTime;
const _setRecentUriTime = (uri, time) => {
    _recentUri = uri;
    _recentCall = time;
  },
  _starLoading = (uri, nowTime) => {
    _setRecentUriTime(uri, nowTime);
  },
  _doneOk = nowTime => {
    _setRecentUriTime(DONE, nowTime);
  },
  _doneFailure = nowTime => {
    _setRecentUriTime(DONE, nowTime);
  };
var _default = config => {
  const {
      uri,
      option,
      onFailed,
      onCatch
    } = config,
    _nowTime = Date.now();
  if (_nowTime - _recentCall < CLICK_TIME_INTERVAL) {
    return;
  } else if (uri === _recentUri) {
    onCatch({
      error: ALERT_IN_PROGRESS,
      option,
      onFailed
    });
  } else if (_nowTime - _recentTime < MIN_FREQUENCY) {
    onCatch({
      error: ALERT_FREQUENCY,
      option,
      onFailed
    });
  } else {
    const _configFetch = {
      ...config,
      _crErr,
      _crErrResp,
      _nowTime,
      _doneOk,
      _doneFailure
    };
    _starLoading(uri, _nowTime);
    const {
      fetchType
    } = option;
    if (fetchType === 'csv-stream') {
      (0, _fetchCsvStream.default)(_configFetch);
    } else {
      (0, _fetchJson.default)(_configFetch);
    }
  }
};
exports.default = _default;
//# sourceMappingURL=fnFetch.js.map