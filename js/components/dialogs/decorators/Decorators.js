"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _withInitialState = _interopRequireDefault(require("./withInitialState"));

var _withToolbar = _interopRequireDefault(require("./withToolbar"));

var _withValidationLoad = _interopRequireDefault(require("./withValidationLoad"));

var Decorators = {
  dialog: function dialog(_dialog) {
    (0, _withInitialState["default"])(_dialog);
    (0, _withValidationLoad["default"])(_dialog);
    (0, _withToolbar["default"])(_dialog);
  }
};
var _default = Decorators;
exports["default"] = _default;
//# sourceMappingURL=Decorators.js.map