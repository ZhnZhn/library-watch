'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolBarButton = function ToolBarButton(props) {
  var type = props.type;
  var style = props.style;
  var title = props.title;
  var caption = props.caption;
  var children = props.children;
  var onClick = props.onClick;


  var _className = void 0;
  switch (type) {
    case 'TypeA':
      _className = 'button-type-a';break;
    case 'TypeC':
      _className = 'button-type-c';break;
    default:
      _className = 'button-type-b';
  }

  return _react2.default.createElement(
    'button',
    {
      className: _className,
      style: style,
      title: title,
      onClick: onClick
    },
    caption,
    children
  );
};

exports.default = ToolBarButton;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\header\ToolBarButton.js.map