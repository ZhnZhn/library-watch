"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _CL = _interopRequireDefault(require("../../styles/CL"));

var CL_ROW = _CL["default"].ROW_MENU_MORE;

var _fSortByItem = function _fSortByItem(onClick) {
  return function (name, propName) {
    return {
      name: name,
      onClick: onClick.bind(null, propName, name),
      isClose: true
    };
  };
};

var crModelMore = function crModelMore(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      setSortByProp = _ref.setSortByProp,
      reverse = _ref.reverse;

  var _crSortByItem = _fSortByItem(setSortByProp);

  return {
    baseTitleCl: CL_ROW,
    pageWidth: 180,
    maxPages: 2,
    p0: [{
      id: 'p1',
      type: 'sub',
      cn: CL_ROW,
      name: 'Sort By, DESC'
    }
    /*,{
     cn: CL_ROW,
     name: 'Remove Visited',
     onClick: onRemoveAll,
     isClose: true
    }*/
    ],
    p1: [_crSortByItem('Answer Count', 'answer_count'), _crSortByItem('Score', 'score'), _crSortByItem('View Count', 'view_count'), _crSortByItem('Reputation', 'reputation'), {
      name: 'Reverse Items',
      onClick: reverse,
      isClose: true
    }]
  };
};

var _default = crModelMore;
exports["default"] = _default;
//# sourceMappingURL=crModelMore.js.map