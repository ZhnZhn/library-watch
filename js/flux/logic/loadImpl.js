'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fnFetch = require('../../network/fnFetch');

var _fnFetch2 = _interopRequireDefault(_fnFetch);

var _fnCatch = require('../../network/fnCatch');

var _fnCatch2 = _interopRequireDefault(_fnCatch);

var _RestApi = require('../../api/RestApi');

var _RestApi2 = _interopRequireDefault(_RestApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnFetchToChartComp = function _fnFetchToChartComp(_ref) {
  var json = _ref.json,
      option = _ref.option,
      onCompleted = _ref.onCompleted;

  onCompleted(option, json);
};

var loadItem = function loadItem(option, onCompleted, onFailed) {
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

var loadImpl = {
  loadItem: loadItem,
  crKey: _RestApi2.default.crKey
};

exports.default = loadImpl;
//# sourceMappingURL=loadImpl.js.map