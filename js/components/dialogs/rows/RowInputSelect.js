"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _InputSelect = _interopRequireDefault(require("../../zhn-select/InputSelect"));

var _DialogStyles = _interopRequireDefault(require("../../styles/DialogStyles"));

var _Caption = _interopRequireDefault(require("./Caption"));

//import PropTypes from "prop-types";
var S = {
  CAPTION: {
    width: '120px'
  }
};

var RowInputSelect = function RowInputSelect(_ref) {
  var isShowLabel = _ref.isShowLabel,
      caption = _ref.caption,
      placeholder = _ref.placeholder,
      options = _ref.options,
      onSelect = _ref.onSelect;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _DialogStyles["default"].rowDiv
  }, /*#__PURE__*/_react["default"].createElement(_Caption["default"], {
    is: isShowLabel,
    style: (0, _extends2["default"])({}, _DialogStyles["default"].labelSpan, S.CAPTION),
    caption: caption
  }), /*#__PURE__*/_react["default"].createElement(_InputSelect["default"], {
    width: "250",
    placeholder: placeholder,
    options: options,
    onSelect: onSelect
  }));
};

RowInputSelect.defaultProps = {
  isShowLabel: true
};
/*
RowInputSelect.propTypes = {
  caption : PropTypes.string,
  placeholder: PropTypes.string,
  options : PropTypes.array,
  onSelect : PropTypes.func
}
*/

var _default = RowInputSelect;
exports["default"] = _default;
//# sourceMappingURL=RowInputSelect.js.map