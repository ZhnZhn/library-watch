'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GitHubStore = require('../stores/GitHubStore');

var _GitHubStore2 = _interopRequireDefault(_GitHubStore);

var _WithBrowserDynamic = require('./WithBrowserDynamic');

var _WithBrowserDynamic2 = _interopRequireDefault(_WithBrowserDynamic);

var _WithDialog = require('./WithDialog');

var _WithDialog2 = _interopRequireDefault(_WithDialog);

var _WithItemsContainer = require('./WithItemsContainer');

var _WithItemsContainer2 = _interopRequireDefault(_WithItemsContainer);

var _WithItem = require('./WithItem');

var _WithItem2 = _interopRequireDefault(_WithItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Factory = _extends({}, _WithBrowserDynamic2.default, _WithDialog2.default, _WithItemsContainer2.default, _WithItem2.default, {
  getElementFactory: function getElementFactory() {
    return _react2.default;
  },
  getStore: function getStore() {
    return _GitHubStore2.default;
  },
  getDataConf: function getDataConf(dialogType) {
    var dataId = dialogType.split('_')[0];
    return _GitHubStore2.default.getSourceConfig(dataId, dialogType);
  }
});

exports.default = Factory;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\flux\logic\Factory.js.map