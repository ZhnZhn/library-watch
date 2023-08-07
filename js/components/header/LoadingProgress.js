"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memoEqual = _interopRequireDefault(require("../hoc/memoEqual"));
var _itemStore = require("../../flux/itemStore");
var _LoadingProgressActions = require("../../flux/actions/LoadingProgressActions");
var _ProgressLine = _interopRequireDefault(require("../zhn-atoms/ProgressLine"));
var _jsxRuntime = require("react/jsx-runtime");
const COLOR_LOADING = '#2f7ed8',
  COLOR_FAILED = '#ed5813';
const _crState = (completed, color) => [completed, color];
const LoadingProgress = () => {
  const [state, setState] = (0, _uiApi.useState)(() => _crState(0, COLOR_LOADING)),
    [completed, color] = state;
  (0, _itemStore.useLoading)(loading => {
    if (loading === _LoadingProgressActions.LPAT_LOADING) {
      setState(_crState(35, COLOR_LOADING));
    } else if (loading === _LoadingProgressActions.LPAT_LOADING_COMPLETE) {
      setState(_crState(100, COLOR_LOADING));
    } else if (loading === _LoadingProgressActions.LPAT_LOADING_FAILED) {
      setState(_crState(100, COLOR_FAILED));
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressLine.default, {
    color: color,
    completed: completed
  });
};
var _default = (0, _memoEqual.default)(LoadingProgress);
exports.default = _default;
//# sourceMappingURL=LoadingProgress.js.map