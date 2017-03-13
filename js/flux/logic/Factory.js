'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppStore = require('../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _withDialog = require('./withDialog');

var _withDialog2 = _interopRequireDefault(_withDialog);

var _withDynamicBrowser = require('./withDynamicBrowser');

var _withDynamicBrowser2 = _interopRequireDefault(_withDynamicBrowser);

var _withItemsContainer = require('./withItemsContainer');

var _withItemsContainer2 = _interopRequireDefault(_withItemsContainer);

var _withItem = require('./withItem');

var _withItem2 = _interopRequireDefault(_withItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Factory = (0, _extends3.default)({}, _withDialog2.default, _withDynamicBrowser2.default, _withItemsContainer2.default, _withItem2.default, {
  getElementFactory: function getElementFactory() {
    return _react2.default;
  },
  getStore: function getStore() {
    return _AppStore2.default;
  },
  getDataConf: function getDataConf(dialogType) {
    var dataId = dialogType.split('_')[0];
    return _AppStore2.default.getSourceConfig(dataId, dialogType);
  }
});

exports.default = Factory;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\flux\logic\Factory.js.map