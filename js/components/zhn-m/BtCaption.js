"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var S_ACCESS_KEY = {
  textDecoration: 'underline'
};

var _crAccessKeyIndex = function _crAccessKeyIndex(accessKey, caption) {
  return accessKey ? caption.toLowerCase().indexOf(accessKey) : -1;
};

var _crCaption = function _crCaption(accessKey, caption) {
  var index = _crAccessKeyIndex(accessKey, caption);

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
      accessKey = _ref.accessKey,
      children = _ref.children;

  if (!caption) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: className,
    children: [_crCaption(accessKey, caption), children]
  });
};

var _default = BtCaption;
exports["default"] = _default;
//# sourceMappingURL=BtCaption.js.map