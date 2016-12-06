'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGitHub = undefined;

var _fnFetch = require('../../network/fnFetch');

var _fnFetch2 = _interopRequireDefault(_fnFetch);

var _fnCatch = require('../../network/fnCatch');

var _fnCatch2 = _interopRequireDefault(_fnCatch);

var _RestApi = require('../../api/RestApi');

var _RestApi2 = _interopRequireDefault(_RestApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _loadToChartComp = function _loadToChartComp(option, onCompleted, onFailed) {
  (0, _fnFetch2.default)({
    uri: _RestApi2.default.getRequestUrl(option),
    option: option,
    onCheckResponse: _RestApi2.default.getOnCheckResponse(option),
    onFetch: _fnFetchToChartComp,
    onCompleted: onCompleted,
    onCatch: _fnCatch2.default,
    onFailed: onFailed
  });
};

var _fnFetchToChartComp = function _fnFetchToChartComp(_ref) {
  var json = _ref.json,
      option = _ref.option,
      onCompleted = _ref.onCompleted;

  //const {config} = QuandlAdapter.toConfig(json, option);
  //onCompleted(option, config);
  onCompleted(option, json);
};

var loadGitHub = function loadGitHub(option, onCompleted, onFailed) {
  _loadToChartComp(option, onCompleted, onFailed);
};

exports.loadGitHub = loadGitHub;
//# sourceMappingURL=loadGitHub.js.map