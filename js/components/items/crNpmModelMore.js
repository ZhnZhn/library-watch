'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CL = require('../styles/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_ROW = _CL2.default.ROW_MENU_MORE;

var crNpmModelMore = function crNpmModelMore(_ref) {
  var onMoveToTop = _ref.onMoveToTop;
  return {
    baseTitleCl: CL_ROW,
    pageWidth: 130,
    maxPages: 1,
    p0: [{
      cn: CL_ROW,
      name: 'Move to Top',
      onClick: onMoveToTop,
      isClose: true
    }]
  };
};

exports.default = crNpmModelMore;
//# sourceMappingURL=crNpmModelMore.js.map