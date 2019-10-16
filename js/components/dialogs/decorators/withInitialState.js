'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _has = require('../../has');

var _has2 = _interopRequireDefault(_has);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _withInitialState = function _withInitialState() {
  return {
    isShowLabels: _has2.default.wideWidth(),
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

exports.default = withInitialState;
//# sourceMappingURL=withInitialState.js.map