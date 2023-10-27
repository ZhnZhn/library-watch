"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoFn = require("../hoc/memoFn");
var _storeAtoms = require("../../flux/storeAtoms");
var _LoadingProgressActions = require("../../flux/actions/LoadingProgressActions");
var _ProgressLine = _interopRequireDefault(require("../zhn-atoms/ProgressLine"));
var _jsxRuntime = require("react/jsx-runtime");
const COLOR_LOADING = '#2f7ed8',
  COLOR_FAILED = '#ed5813';
const _crState = (completed, color) => [completed, color];
const LoadingProgress = () => {
  const status = (0, _storeAtoms.useLoading)(),
    [completed, color] = status === _LoadingProgressActions.LPAT_LOADING ? _crState(35, COLOR_LOADING) : status === _LoadingProgressActions.LPAT_LOADING_COMPLETE ? _crState(100, COLOR_LOADING) : status === _LoadingProgressActions.LPAT_LOADING_FAILED ? _crState(100, COLOR_FAILED) : _crState(0, COLOR_LOADING);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressLine.default, {
    color: color,
    completed: completed
  });
};
var _default = exports.default = (0, _memoFn.memoEqual)(LoadingProgress);
//# sourceMappingURL=LoadingProgress.js.map