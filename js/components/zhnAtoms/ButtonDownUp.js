'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonDownUp = require('./ButtonDownUp.Style');

var _ButtonDownUp2 = _interopRequireDefault(_ButtonDownUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonDownUp = function ButtonDownUp(props) {
  var caption = props.caption,
      title = props.title,
      isUp = props.isUp,
      styleRoot = props.styleRoot,
      onClick = props.onClick,
      _styleRoot = isUp ? _ButtonDownUp2.default.ROOT_UP : _ButtonDownUp2.default.ROOT_DOWN,
      _styleCircle = isUp ? _ButtonDownUp2.default.CIRCLE_UP : _ButtonDownUp2.default.CIRCLE_DOWN;

  return _react2.default.createElement(
    'span',
    {
      title: title,
      style: Object.assign({}, _ButtonDownUp2.default.ROOT, styleRoot, _styleRoot),
      onClick: onClick
    },
    _react2.default.createElement('span', { style: Object.assign({}, _ButtonDownUp2.default.CIRCLE, _styleCircle) }),
    _react2.default.createElement(
      'span',
      { style: _ButtonDownUp2.default.ITEM },
      caption
    )
  );
};

process.env.NODE_ENV !== "production" ? ButtonDownUp.propTypes = {
  caption: _react.PropTypes.string,
  title: _react.PropTypes.string,
  isUp: _react.PropTypes.bool,
  styleRoot: _react.PropTypes.object,
  onClick: _react.PropTypes.func
} : void 0;
ButtonDownUp.defaultProps = {
  caption: '',
  title: '',
  onClick: function onClick() {}
};

exports.default = ButtonDownUp;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\ButtonDownUp.js.map