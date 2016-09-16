'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROOT: {
    display: 'inline-block',
    border: '1px solid',
    borderRadius: '10px',
    cursor: 'pointer'
  },
  ROOT_UP: {
    color: '#a487d4',
    borderColor: '#a487d4',
    borderWidth: '2px',
    fontWeight: 'bold'
  },
  ROOT_DOWN: {
    color: 'gray',
    borderColor: 'gray',
    borderWidth: '1px',
    fontWeight: 'normal'
  },

  ITEM: {
    display: 'inline-block',
    paddingLeft: '5px',
    paddingRight: '20px'
  },
  CIRCLE: {
    display: 'inline-block',
    marginLeft: '15px',
    backgroundColor: 'gray',
    width: '12px',
    height: '12px',
    border: '1px solid gray',
    borderRadius: '50%'
  },
  CIRCLE_UP: {
    backgroundColor: '#a487d4',
    borderColor: '#a487d4'
  },
  CIRCLE_DOWN: {
    backgroundColor: 'gray',
    borderColor: 'gray'
  }
};

var ButtonDownUp = function ButtonDownUp(props) {
  var caption = props.caption;
  var title = props.title;
  var isUp = props.isUp;
  var styleRoot = props.styleRoot;
  var onClick = props.onClick;
  var _styleRoot = isUp ? STYLE.ROOT_UP : STYLE.ROOT_DOWN;
  var _styleCircle = isUp ? STYLE.CIRCLE_UP : STYLE.CIRCLE_DOWN;

  return _react2.default.createElement(
    'span',
    {
      title: title,
      style: Object.assign({}, STYLE.ROOT, styleRoot, _styleRoot),
      onClick: onClick
    },
    _react2.default.createElement('span', { style: Object.assign({}, STYLE.CIRCLE, _styleCircle) }),
    _react2.default.createElement(
      'span',
      { style: STYLE.ITEM },
      caption
    )
  );
};

exports.default = ButtonDownUp;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\ButtonDownUp.js.map