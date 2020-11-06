"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _LoadingProgressActions = require("../../flux/actions/LoadingProgressActions");

var _ProgressLine = _interopRequireDefault(require("../zhn-atoms/ProgressLine"));

var COLOR = {
  LOADING: '#2f7ed8',
  FAILED: '#ed5813'
};

var LoadingProgress = function LoadingProgress(_ref) {
  var store = _ref.store;

  var _useState = (0, _react.useState)({
    completed: 0,
    color: COLOR.LOADING
  }),
      state = _useState[0],
      setState = _useState[1],
      completed = state.completed,
      color = state.color;

  (0, _useListen["default"])(store, function (actionType, option) {
    if (actionType === _LoadingProgressActions.LoadingProgressActionTypes.LOADING) {
      setState({
        completed: 35,
        color: COLOR.LOADING
      });
    } else if (actionType === _LoadingProgressActions.LoadingProgressActionTypes.LOADING_COMPLETE) {
      setState({
        completed: 100,
        color: COLOR.LOADING
      });
    } else if (actionType === _LoadingProgressActions.LoadingProgressActionTypes.LOADING_FAILED) {
      setState({
        completed: 100,
        color: COLOR.FAILED
      });
    }
  }, 'listenLoadingProgress');
  return /*#__PURE__*/React.createElement(_ProgressLine["default"], {
    height: 3,
    color: color,
    completed: completed
  });
};

var _default = LoadingProgress;
exports["default"] = _default;
//# sourceMappingURL=LoadingProgress.js.map