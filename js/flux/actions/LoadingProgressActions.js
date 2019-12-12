"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.LoadingProgressActionTypes = void 0;

var _reflux = _interopRequireDefault(require("reflux"));

var _Reflux$createActions;

var LoadingProgressActionTypes = {
  LOADING: 'loadingProgress',
  LOADING_COMPLETE: 'loadingProgressComplete',
  LOADING_FAILED: 'loadingProgressFailed'
};
exports.LoadingProgressActionTypes = LoadingProgressActionTypes;

var LoadingProgressActions = _reflux["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[LoadingProgressActionTypes.LOADING] = {}, _Reflux$createActions[LoadingProgressActionTypes.LOADING_COMPLETE] = {}, _Reflux$createActions[LoadingProgressActionTypes.LOADING_FAILED] = {}, _Reflux$createActions));

var _default = LoadingProgressActions;
exports["default"] = _default;
//# sourceMappingURL=LoadingProgressActions.js.map