'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var STYLE = {
  LI: {
    float: 'left',
    display: 'inline-block',

    backgroundColor: '#232F3B',
    /*color : 'rgba(164, 135, 212, 1)',*/
    color: 'gray',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '6px',
    paddingBottom: '6px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    cursor: 'pointer',

    fontWeight: 'bold',
    //border: '2px solid rgb(44, 40, 40)',
    border: '2px solid gray',
    borderBottom: 'none'
    //borderTop : 'none'
  },
  SELECTED: {
    borderColor: 'rgba(164, 135, 212, 1)',
    color: 'rgba(164, 135, 212, 1)'
  }
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _style = isSelected ? STYLE.SELECTED : null;
  return _react2.default.createElement(
    'li',
    {
      style: (0, _extends3.default)({}, STYLE.LI, _style),
      onClick: onClick
    },
    _react2.default.createElement(
      'span',
      null,
      title
    )
  );
};

/*
Tab.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
*/
Tab.defaultProps = {
  onClick: function onClick() {}
};

exports.default = Tab;
//# sourceMappingURL=Tab.js.map