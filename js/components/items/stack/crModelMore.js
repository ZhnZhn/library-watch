'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CL = require('../../styles/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_ROW = _CL2.default.ROW_MENU_MORE;

var _fSortByItem = function _fSortByItem(onClick) {
  return function (name, propName) {
    return {
      cn: CL_ROW,
      name: name,
      onClick: onClick.bind(null, propName),
      isClose: true
    };
  };
};

var crModelMore = function crModelMore() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      setSortByProp = _ref.setSortByProp;

  var _crSortByItem = _fSortByItem(setSortByProp);
  return {
    baseTitleCl: CL_ROW,
    pageWidth: 180,
    maxPages: 2,
    p0: [{
      id: 'p1',
      type: 'sub',
      cn: CL_ROW,
      name: 'Sort By' /*,{
                       cn: CL_ROW,
                       name: 'Remove Visited',
                       onClick: onRemoveAll,
                       isClose: true
                      }*/
    }],
    p1: [_crSortByItem('Answer Count', 'answer_count'), _crSortByItem('Score', 'score'), _crSortByItem('View Count', 'view_count'), _crSortByItem('Reputation', 'reputation')]
  };
};

exports.default = crModelMore;
//# sourceMappingURL=crModelMore.js.map