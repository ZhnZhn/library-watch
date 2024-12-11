"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from "prop-types";

const _isArr = Array.isArray,
  S_ROOT_DIV = {
    color: '#f44336',
    padding: '5px 0 0 10px'
  },
  S_NUMBER = {
    display: 'inline-block',
    width: 22,
    height: 22,
    marginRight: 5,
    border: 'solid 2px #f44336',
    borderRadius: '50%',
    textAlign: 'center'
  },
  S_MSG = {
    whiteSpace: 'pre',
    fontWeight: 'bold'
  };
const ValidationMessage = _ref => {
  let {
    index,
    msg
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_NUMBER,
      children: index
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_MSG,
      children: msg
    })]
  });
};
const ValidationMessages = _ref2 => {
  let {
    validationMessages
  } = _ref2;
  if (!_isArr(validationMessages)) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: S_ROOT_DIV,
    children: validationMessages.map((msg, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(ValidationMessage, {
      msg: msg,
      index: index + 1
    }, index))
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
var _default = exports.default = ValidationMessages;
//# sourceMappingURL=ValidationMessages.js.map