'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crCommandButtons = function crCommandButtons(_ref) {
  var inst = _ref.inst,
      isDefault = _ref.isDefault;

  return [isDefault && _react2.default.createElement(_FlatButton2.default, {
    key: 'default',
    caption: 'Default',
    timeout: 0,
    onClick: inst._handleDefault
  }), _react2.default.createElement(_FlatButton2.default, {
    key: 'load',
    isPrimary: true,
    caption: 'Load',
    onClick: inst._handleLoad
  })].filter(Boolean);
};

exports.default = crCommandButtons;
//# sourceMappingURL=crCommandButtons.js.map