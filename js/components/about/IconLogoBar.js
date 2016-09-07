'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconGitHub = require('./IconGitHub');

var _IconGitHub2 = _interopRequireDefault(_IconGitHub);

var _IconReact = require('./IconReact');

var _IconReact2 = _interopRequireDefault(_IconReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROOT: {
    textAlign: 'center',
    paddingTop: '20px'
  }
};

var IconLogoBar = function IconLogoBar(props) {
  return _react2.default.createElement(
    'div',
    { style: STYLE.ROOT },
    _react2.default.createElement(_IconGitHub2.default, {
      className: 'icon__github',
      title: 'GitHub Library Watch',
      uri: 'https://github.com/ZhnZhn/library-watch.git'
    }),
    _react2.default.createElement(_IconReact2.default, null)
  );
};

exports.default = IconLogoBar;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\about\IconLogoBar.js.map