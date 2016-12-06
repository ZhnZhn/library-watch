'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingProgressActionTypes = undefined;

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoadingProgressActionTypes = exports.LoadingProgressActionTypes = {
  LOADING: 'loadingProgress',
  LOADING_COMPLETE: 'loadingProgressComplete',
  LOADING_FAILED: 'loadingProgressFailed'
};

var LoadingProgressActions = _reflux2.default.createActions((_Reflux$createActions = {}, _defineProperty(_Reflux$createActions, LoadingProgressActionTypes.LOADING, {}), _defineProperty(_Reflux$createActions, LoadingProgressActionTypes.LOADING_COMPLETE, {}), _defineProperty(_Reflux$createActions, LoadingProgressActionTypes.LOADING_FAILED, {}), _Reflux$createActions));

exports.default = LoadingProgressActions;
//# sourceMappingURL=LoadingProgressActions.js.map