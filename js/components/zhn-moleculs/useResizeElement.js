"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _ResizeElementImpl = _interopRequireDefault(require("./ResizeElementImpl"));
var _has = require("../has");
var useResizeElement = function useResizeElement(props) {
  var _resizeImpl = (0, _useRefInit["default"])(function () {
    return new _ResizeElementImpl["default"](props);
  })[0];
  /*eslint-disable react-hooks/exhaustive-deps */
  return (0, _uiApi.useMemo)(function () {
    var _ref2, _ref3;
    var _ref = _has.HAS_TOUCH_EVENTS ? ['onTouchStart', 'onTouchEnd'] : ['onMouseDown', 'onMouseUp'],
      _onStartResizePropName = _ref[0],
      _onStopResizePropName = _ref[1],
      onStopRezise = _resizeImpl.onStopRezise,
      onStartResizeLeft = _resizeImpl.onStartResizeLeft,
      onStartResizeRight = _resizeImpl.onStartResizeRight;
    return [(_ref2 = {}, _ref2[_onStartResizePropName] = onStartResizeLeft, _ref2[_onStopResizePropName] = onStopRezise, _ref2), (_ref3 = {}, _ref3[_onStartResizePropName] = onStartResizeRight, _ref3[_onStopResizePropName] = onStopRezise, _ref3)];
  }, []);
  // _resizeImpl
  /*eslint-enable react-hooks/exhaustive-deps */
};
var _default = useResizeElement;
exports["default"] = _default;
//# sourceMappingURL=useResizeElement.js.map