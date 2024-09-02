"use strict";

exports.__esModule = true;
exports.default = void 0;
var _strFn = require("../../../utils/strFn");
var _styleFn = require("../../styleFn");
var _config = require("./config");
const _crName = propName => propName.split("_").map(_strFn.setFirstToUpperCase).join(" ");
const _fSortByItem = onClick => propName => {
  const name = _crName(propName);
  return {
    name,
    onClick: onClick.bind(null, propName, name),
    isClose: true
  };
};
const crModelMore = function (_temp) {
  let {
    setSortByProp,
    reverse
    //onRemoveAll
  } = _temp === void 0 ? {} : _temp;
  const _crSortByItem = _fSortByItem(setSortByProp);
  return {
    titleCl: _styleFn.CL_ROW_MENU_MORE,
    pageWidth: 180,
    maxPages: 2,
    p0: [{
      id: 'p1',
      type: 'sub',
      cn: _styleFn.CL_ROW_MENU_MORE,
      name: 'Sort By, DESC'
    } /*,{
       cn: CL_ROW,
       name: 'Remove Visited',
       onClick: onRemoveAll,
       isClose: true
      }*/],
    p1: [_crSortByItem(_config.PN_BOUNTY_AMOUNT), _crSortByItem(_config.PN_ANSWER_COUNT), _crSortByItem(_config.PN_SCORE), _crSortByItem(_config.PN_VIEW_COUNT), _crSortByItem(_config.PN_REPUTATION), {
      name: 'Reverse Items',
      onClick: reverse,
      isClose: true
    }]
  };
};
var _default = exports.default = crModelMore;
//# sourceMappingURL=crModelMore.js.map