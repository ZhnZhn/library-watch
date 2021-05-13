"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _crItemWatch = _interopRequireDefault(require("./crItemWatch"));

var useWatchItem = function useWatchItem(_ref, itemDescription) {
  var onWatchItem = _ref.onWatchItem,
      repo = _ref.repo,
      requestType = _ref.requestType;
  return (0, _react.useCallback)(function () {
    onWatchItem((0, _crItemWatch["default"])(repo, requestType, itemDescription)); //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

var _default = useWatchItem;
exports["default"] = _default;
//# sourceMappingURL=useWatchItem.js.map