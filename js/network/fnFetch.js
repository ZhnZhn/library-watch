"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _LoadingProgressActions = _interopRequireDefault(require("../flux/actions/LoadingProgressActions"));

var _fetchJson = _interopRequireDefault(require("./fetchJson"));

var _fetchCsvStream = _interopRequireDefault(require("./fetchCsvStream"));

//import csvtojson from 'csvtojson'
var CLICK_TIME_INTERVAL = 300,
    MIN_FREQUENCY = 3000,
    DONE = 'DONE',
    ALERT_FREQUENCY = {
  errCaption: 'Load Frequency',
  message: "Exceed item load frequency restriction of " + MIN_FREQUENCY / 1000 + "s"
},
    ALERT_IN_PROGRESS = {
  errCaption: 'Loading In Progress',
  message: 'Loading data for this item in progress.\nIt seems several clicks on button Load repeatedly happend.'
};

var _crErr = function _crErr(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      status = _ref.status,
      statusText = _ref.statusText;

  return {
    errCaption: 'Request Error',
    message: status + ": " + statusText
  };
};

var _crErrResp = function _crErrResp() {
  return {
    errCaption: 'Response Error',
    message: "Response format is incorrect"
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

  _LoadingProgressActions["default"].loadingProgress();
};

var _doneOk = function _doneOk(nowTime) {
  _fnSetRecentDone(DONE, nowTime);

  _LoadingProgressActions["default"].loadingProgressComplete();
};

var _doneFailure = function _doneFailure(nowTime) {
  _fnSetRecentDone(DONE, nowTime);

  _LoadingProgressActions["default"].loadingProgressFailed();
};

var _default = function _default(config) {
  var uri = config.uri,
      option = config.option,
      onFailed = config.onFailed,
      onCatch = config.onCatch;

  var _nowTime = Date.now();

  if (_nowTime - _recentCall < CLICK_TIME_INTERVAL) {
    return void 0;
  } else if (uri === _recentUri) {
    onCatch({
      error: ALERT_IN_PROGRESS,
      option: option,
      onFailed: onFailed
    });
  } else if (_nowTime - _recentTime < MIN_FREQUENCY) {
    onCatch({
      error: ALERT_FREQUENCY,
      option: option,
      onFailed: onFailed
    });
  } else {
    var _configFetch = (0, _extends2["default"])({}, config, {
      _crErr: _crErr,
      _crErrResp: _crErrResp,
      _nowTime: _nowTime,
      _doneOk: _doneOk,
      _doneFailure: _doneFailure
    });

    _starLoading(uri, _nowTime);

    var fetchType = option.fetchType;

    if (fetchType === 'csv-stream') {
      (0, _fetchCsvStream["default"])(_configFetch);
    } else {
      (0, _fetchJson["default"])(_configFetch);
    }
  }
};

exports["default"] = _default;
//# sourceMappingURL=fnFetch.js.map