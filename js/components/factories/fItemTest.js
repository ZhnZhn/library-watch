'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _TestItem = require('../items/TestItem');

var _TestItem2 = _interopRequireDefault(_TestItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fItemTest = function fItemTest(_ref) {
  var factory = _ref.factory;
  var option = _ref.option;
  var json = _ref.json;
  var parentProps = _ref.parentProps;
  var repo = option.repo;
  var requestType = option.requestType;

  return factory.createElement(_TestItem2.default, _extends({
    key: repo + '_' + requestType
  }, parentProps));
};

exports.default = fItemTest;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\factories\fItemTest.js.map