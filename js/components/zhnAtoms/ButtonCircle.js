'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  rootSpan: {
    display: 'inline-block',
    color: '#80c040',
    border: '2px solid #80c040',
    borderRadius: '50%',
    width: '22px',
    height: '22px',
    textAlign: 'center',
    cursor: 'pointer'
  }
};

var ButtonCircle = function ButtonCircle(props) {
  var caption = props.caption;
  var title = props.title;
  var className = props.className;
  var style = props.style;
  var isWithoutDefault = props.isWithoutDefault;
  var onClick = props.onClick;
  var _className = className ? className + ' not-selected' : 'not-selected';
  var _style = isWithoutDefault ? style : Object.assign({}, styles.rootSpan, style);
  return _react2.default.createElement(
    'span',
    {
      className: _className,
      style: _style,
      title: title,
      onClick: onClick
    },
    caption
  );
};

exports.default = ButtonCircle;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\zhnAtoms\ButtonCircle.js.map