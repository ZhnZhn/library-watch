"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _CL = _interopRequireDefault(require("../styles/CL"));

var CL_ROW = _CL["default"].ROW_MENU_MORE;

var crModelMore = function crModelMore(_ref) {
  var chartType = _ref.chartType,
      onMinWidth = _ref.onMinWidth,
      onInitialWidth = _ref.onInitialWidth,
      onPlusWidth = _ref.onPlusWidth,
      onMinusWidth = _ref.onMinusWidth,
      onRemoveAll = _ref.onRemoveAll;
  return {
    // cn property name for item
    baseTitleCl: CL_ROW,
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

var _default = crModelMore;
exports["default"] = _default;
//# sourceMappingURL=ModelMore.js.map