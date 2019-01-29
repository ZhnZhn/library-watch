'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingProgressActionTypes = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingProgressActionTypes = exports.LoadingProgressActionTypes = {
  LOADING: 'loadingProgress',
  LOADING_COMPLETE: 'loadingProgressComplete',
  LOADING_FAILED: 'loadingProgressFailed'
};

var LoadingProgressActions = _reflux2.default.createActions((_Reflux$createActions = {}, (0, _defineProperty3.default)(_Reflux$createActions, LoadingProgressActionTypes.LOADING, {}), (0, _defineProperty3.default)(_Reflux$createActions, LoadingProgressActionTypes.LOADING_COMPLETE, {}), (0, _defineProperty3.default)(_Reflux$createActions, LoadingProgressActionTypes.LOADING_FAILED, {}), _Reflux$createActions));

exports.default = LoadingProgressActions;
//# sourceMappingURL=LoadingProgressActions.js.map