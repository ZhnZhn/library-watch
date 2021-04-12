"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _InputSelect = _interopRequireDefault(require("../zhn-select/InputSelect"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

var _crRowCaption = _interopRequireDefault(require("./crRowCaption"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var styles = _DialogStyles["default"];
var S = {
  CAPTION: {
    width: '120px'
  }
};

var RowInputSelect = function RowInputSelect(_ref) {
  var caption = _ref.caption,
      options = _ref.options,
      isUpdateOptions = _ref.isUpdateOptions,
      onSelect = _ref.onSelect;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: styles.rowDiv,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, styles.labelSpan, S.CAPTION),
      children: (0, _crRowCaption["default"])(caption)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect["default"], {
      width: "250",
      options: options,
      isUpdateOptions: isUpdateOptions,
      onSelect: onSelect
    })]
  });
};
/*
RowInputSelect.propTypes = {
  caption : PropTypes.string,
  options : PropTypes.array,
  isUpdateOptions : PropTypes.bool,
  onSelect : PropTypes.func
}
*/


var _default = RowInputSelect;
exports["default"] = _default;
//# sourceMappingURL=RowInputSelect.js.map