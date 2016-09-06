'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SourceBrowserDynamic = require('../../components/browser-container/SourceBrowserDynamic');

var _SourceBrowserDynamic2 = _interopRequireDefault(_SourceBrowserDynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithBrowserDynamic = {
   createBrowserDynamic: function createBrowserDynamic(_ref) {
      var browserType = _ref.browserType;
      var _ref$caption = _ref.caption;
      var caption = _ref$caption === undefined ? '' : _ref$caption;
      var sourceMenuUrl = _ref.sourceMenuUrl;

      return _react2.default.createElement(_SourceBrowserDynamic2.default, {
         key: browserType,
         browserType: browserType,
         store: this.getStore(),
         isInitShow: true,
         caption: caption,
         sourceMenuUrl: sourceMenuUrl
      });
   }
};

exports.default = WithBrowserDynamic;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\flux\logic\WithBrowserDynamic.js.map