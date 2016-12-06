'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Fn = require('./Fn');

var _Fn2 = _interopRequireDefault(_Fn);

var _WithLogicGroup = require('./WithLogicGroup');

var _WithLogicGroup2 = _interopRequireDefault(_WithLogicGroup);

var _WithLogicList = require('./WithLogicList');

var _WithLogicList2 = _interopRequireDefault(_WithLogicList);

var _WithLogicItem = require('./WithLogicItem');

var _WithLogicItem2 = _interopRequireDefault(_WithLogicItem);

var _WithLogicDragDrop = require('./WithLogicDragDrop');

var _WithLogicDragDrop2 = _interopRequireDefault(_WithLogicDragDrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logic = _extends({}, _WithLogicGroup2.default, _WithLogicList2.default, _WithLogicItem2.default, _WithLogicDragDrop2.default, {

  findGroup: _Fn2.default.findGroup

});

exports.default = Logic;
//# sourceMappingURL=Logic.js.map