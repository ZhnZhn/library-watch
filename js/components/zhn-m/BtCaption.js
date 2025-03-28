"use strict";

exports.__esModule = true;
exports.default = void 0;
var _has = require("../has");
var _jsxRuntime = require("react/jsx-runtime");
const S_ACCESS_KEY = {
  textDecoration: 'underline'
};
const _crHotKeyIndex = (hotKey, caption) => hotKey ? caption.toUpperCase().indexOf(hotKey) : -1;
const _crCaption = (hotKey, caption) => {
  if (_has.HAS_TOUCH_EVENTS || !hotKey) {
    return caption;
  }
  const index = _crHotKeyIndex(hotKey, caption);
  if (index === -1) {
    return caption;
  }
  const _before = caption.substring(0, index),
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
const BtCaption = _ref => {
  let {
    className,
    caption,
    hotKey,
    children
  } = _ref;
  if (!caption) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: className,
    children: [_crCaption(hotKey, caption), children]
  });
};
var _default = exports.default = BtCaption;
//# sourceMappingURL=BtCaption.js.map