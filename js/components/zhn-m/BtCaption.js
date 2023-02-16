"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _has = require("../has");
var _jsxRuntime = require("react/jsx-runtime");
var S_ACCESS_KEY = {
  textDecoration: 'underline'
};
var _crHotKeyIndex = function _crHotKeyIndex(hotKey, caption) {
  return hotKey ? caption.toUpperCase().indexOf(hotKey) : -1;
};
var _crCaption = function _crCaption(hotKey, caption) {
  if (_has.HAS_TOUCH_EVENTS || !hotKey) {
    return caption;
  }
  var index = _crHotKeyIndex(hotKey, caption);
  if (index === -1) {
    return caption;
  }
  var _before = caption.substring(0, index),
    _key = caption.substring(index, index + 1),
    _after = caption.substring(index + 1);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: _before
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_ACCESS_KEY,
      children: _key
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: _after
    })]
  });
};
var BtCaption = function BtCaption(_ref) {
  var className = _ref.className,
    caption = _ref.caption,
    hotKey = _ref.hotKey,
    children = _ref.children;
  if (!caption) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: className,
    children: [_crCaption(hotKey, caption), children]
  });
};
var _default = BtCaption;
exports["default"] = _default;
//# sourceMappingURL=BtCaption.js.map