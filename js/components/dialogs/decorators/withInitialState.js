"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _has = _interopRequireDefault(require("../../has"));

var _withInitialState = function _withInitialState() {
  return {
    isShowLabels: _has["default"].wideWidth(),
    isToolbar: true,
    isShowDate: false,
    validationMessages: []
  };
};

var withInitialState = function withInitialState(target) {
  Object.assign(target.prototype, {
    _withInitialState: _withInitialState
  });
};

var _default = withInitialState;
exports["default"] = _default;
//# sourceMappingURL=withInitialState.js.map