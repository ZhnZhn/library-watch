'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CL = require('../styles/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_ROW = _CL2.default.ROW_MENU_MORE;

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};
var _crItem = function _crItem(name, onClick) {
  var cn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CL_ROW;
  var isClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return {
    name: name, onClick: onClick,
    cn: cn, isClose: isClose
  };
};

var crNpmModelMore = function crNpmModelMore(_ref) {
  var onMoveToTop = _ref.onMoveToTop,
      onToggleButtons = _ref.onToggleButtons;

  var p0 = [_crItem('Move to Top', onMoveToTop), _isFn(onToggleButtons) ? _crItem('Toggle Buttons', onToggleButtons) : void 0].filter(Boolean);

  return {
    baseTitleCl: CL_ROW,
    pageWidth: 150,
    maxPages: 1,
    p0: p0
  };
};

exports.default = crNpmModelMore;
//# sourceMappingURL=crNpmModelMore.js.map