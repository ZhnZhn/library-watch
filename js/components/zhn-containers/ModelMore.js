"use strict";

exports.__esModule = true;
exports.default = void 0;
var _CL = require("../styles/CL");
const crModelMore = _ref => {
  let {
    chartType,
    onMinWidth,
    onInitialWidth,
    onPlusWidth,
    onMinusWidth,
    onRemoveAll
  } = _ref;
  return {
    // cn property name for item
    titleCl: _CL.CL_ROW_MENU_MORE,
    pageWidth: 180,
    maxPages: 2,
    p0: [{
      id: 'p1',
      type: 'sub',
      name: 'Resize'
    }, {
      name: 'Remove All Items',
      onClick: onRemoveAll,
      isClose: true
    }],
    p1: [{
      name: 'to MinWidth',
      onClick: onMinWidth
    }, {
      name: 'to InitialWidth',
      onClick: onInitialWidth
    }, {
      name: '+10px to Width',
      onClick: onPlusWidth
    }, {
      name: '-10px to Width',
      onClick: onMinusWidth
    }]
  };
};
var _default = exports.default = crModelMore;
//# sourceMappingURL=ModelMore.js.map