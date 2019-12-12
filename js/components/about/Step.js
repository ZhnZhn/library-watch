"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var STYLES = {
  STEP: {
    display: 'inline-block',
    color: '#80c040',
    border: '2px solid #80c040',
    borderRadius: '50%',
    width: '22px',
    height: '22px',
    textAlign: 'center'
  }
};

var Step = function Step(props) {
  return _react["default"].createElement("span", {
    style: STYLES.STEP
  }, props.step);
};

var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=Step.js.map