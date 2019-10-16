'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('../utils/is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var has = {
  HAS_TOUCH: _is2.default.isTouchable(),

  wideWidth: function wideWidth() {
    return window.innerWidth ? window.innerWidth > 700 : true;
  }
};

exports.default = has;
//# sourceMappingURL=has.js.map