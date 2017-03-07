'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

process.env.NODE_ENV !== "production" ? ScrollPane.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
} : void 0;
ScrollPane.defaultProps = {
  className: ''
};

exports.default = ScrollPane;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\ScrollPane.js.map