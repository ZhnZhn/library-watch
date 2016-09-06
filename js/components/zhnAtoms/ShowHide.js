'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  show: {
    display: 'block'
  },
  hide: {
    display: 'none'
  }
};

var ShowHide = function ShowHide(props) {
  var isShow = props.isShow;
  var style = props.style;
  var children = props.children;
  var _styleShow = isShow ? styles.show : styles.hide;
  var _classShow = isShow ? 'show-popup' : null;

  return _react2.default.createElement(
    'div',
    { className: _classShow, style: Object.assign({}, style, _styleShow) },
    children
  );
};

exports.default = ShowHide;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\zhnAtoms\ShowHide.js.map