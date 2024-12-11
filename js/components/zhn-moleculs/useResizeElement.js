"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _ResizeElementImpl = _interopRequireDefault(require("./ResizeElementImpl"));
var _has = require("../has");
const useResizeElement = props => {
  const _resizeImpl = (0, _useRefInit.default)(() => {
    return new _ResizeElementImpl.default(props);
  })[0];
  /*eslint-disable react-hooks/exhaustive-deps */
  return (0, _uiApi.useMemo)(() => {
    const [_onStartResizePropName, _onStopResizePropName] = _has.HAS_TOUCH_EVENTS ? ['onTouchStart', 'onTouchEnd'] : ['onMouseDown', 'onMouseUp'],
      {
        onStopRezise,
        onStartResizeLeft,
        onStartResizeRight
      } = _resizeImpl;
    return [
    //leftBtHandlers
    {
      [_onStartResizePropName]: onStartResizeLeft,
      [_onStopResizePropName]: onStopRezise
    },
    //rightBtHandlers
    {
      [_onStartResizePropName]: onStartResizeRight,
      [_onStopResizePropName]: onStopRezise
    }];
  }, []);
  // _resizeImpl
  /*eslint-enable react-hooks/exhaustive-deps */
};
var _default = exports.default = useResizeElement;
//# sourceMappingURL=useResizeElement.js.map