"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Fn = require("./Fn");

var _WithLogicGroup = _interopRequireDefault(require("./WithLogicGroup"));

var _WithLogicList = _interopRequireDefault(require("./WithLogicList"));

var _WithLogicItem = _interopRequireDefault(require("./WithLogicItem"));

var _WithLogicDragDrop = _interopRequireDefault(require("./WithLogicDragDrop"));

var Logic = (0, _extends2["default"])({}, _WithLogicGroup["default"], _WithLogicList["default"], _WithLogicItem["default"], _WithLogicDragDrop["default"], {
  findGroup: _Fn.findGroup
});
var _default = Logic;
exports["default"] = _default;
//# sourceMappingURL=Logic.js.map