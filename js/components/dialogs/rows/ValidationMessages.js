"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var S = {
  ROOT_DIV: {
    color: '#f44336',
    paddingLeft: 10,
    paddingTop: 5
  },
  NUMBER: {
    display: 'inline-block',
    width: 22,
    height: 22,
    marginRight: 5,
    border: 'solid 2px #f44336',
    borderRadius: '50%',
    textAlign: 'center'
  },
  MSG: {
    whiteSpace: 'pre',
    fontWeight: 'bold'
  }
};

var ValidationMessage = function ValidationMessage(_ref) {
  var index = _ref.index,
      msg = _ref.msg;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S.NUMBER,
      children: index
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S.MSG,
      children: msg
    })]
  });
};
/*
ValidationMessage.propTypes = {
  index: PropTypes.number,
  msg: PropTypes.string
}
*/


var ValidationMessages = function ValidationMessages(_ref2) {
  var validationMessages = _ref2.validationMessages;

  if (!Array.isArray(validationMessages)) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: S.ROOT_DIV,
    children: validationMessages.map(function (msg, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(ValidationMessage, {
        msg: msg,
        index: index + 1
      }, index);
    })
  });
};
/*
ValidationMessages.propTypes = {
  validationMessages: PropTypes.arrayOf(
    PropTypes.shape({
      msg: PropTypes.string
    })
  )
}
*/


var _default = ValidationMessages;
exports["default"] = _default;
//# sourceMappingURL=ValidationMessages.js.map