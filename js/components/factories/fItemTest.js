'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _TestItem = require('../items/TestItem');

var _TestItem2 = _interopRequireDefault(_TestItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fItemTest = function fItemTest(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      json = _ref.json,
      parentProps = _ref.parentProps;
  var repo = option.repo,
      requestType = option.requestType;

  return factory.createElement(_TestItem2.default, (0, _extends3.default)({
    key: repo + '_' + requestType
  }, parentProps));
};

exports.default = fItemTest;
//# sourceMappingURL=fItemTest.js.map