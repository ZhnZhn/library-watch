'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var ScrollPane = function ScrollPane(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'with-scroll ' + className, style: style },
    children
  );
};

/*
ScrollPane.propTypes = {
  style : PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
*/
ScrollPane.defaultProps = {
  className: ''
};

exports.default = ScrollPane;
//# sourceMappingURL=ScrollPane.js.map