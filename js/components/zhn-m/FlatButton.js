"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _useHotKey = _interopRequireDefault(require("../hotkeys/useHotKey"));
var _BtCaption = _interopRequireDefault(require("./BtCaption"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_ARROW = "arrow-down",
  CL_BT_FLAT = 'bt-flat',
  CL_BT_FLAT_CAPTION = 'bt-flat__caption',
  S_PRIMARY_COLOR = {
    color: '#607d8b'
  };
const FlatButton = _ref => {
  let {
    refBt,
    isArrow,
    timeout = 3000,
    className,
    style,
    isPrimary,
    title = '',
    caption,
    hotKey,
    children,
    onClick
  } = _ref;
  const _refTimeStamp = (0, _uiApi.useRef)(null),
    _hClick = (0, _uiApi.useCallback)(evt => {
      if (timeout === 0) {
        onClick(evt);
        return;
      }
      const _timeStampPrev = (0, _uiApi.getRefValue)(_refTimeStamp),
        {
          timeStamp
        } = evt;
      if (_timeStampPrev == null || timeStamp - _timeStampPrev > timeout) {
        onClick(evt);
        (0, _uiApi.setRefValue)(_refTimeStamp, timeStamp);
      }
    }, [timeout, onClick]),
    _className = (0, _crCn.default)(CL_BT_FLAT, className),
    _style = isPrimary ? {
      ...style,
      ...S_PRIMARY_COLOR
    } : style,
    _title = hotKey ? `${title} [${hotKey.toLowerCase()}]` : title;
  (0, _useHotKey.default)(hotKey, onClick);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    ref: refBt,
    type: "button",
    className: _className,
    style: _style,
    title: _title,
    onClick: _hClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BtCaption.default, {
      className: CL_BT_FLAT_CAPTION,
      caption: caption,
      hotKey: hotKey,
      children: isArrow && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: CL_ARROW
      })
    }), children]
  });
};
var _default = exports.default = FlatButton;
//# sourceMappingURL=FlatButton.js.map