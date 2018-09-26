'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;
//import PropTypes from 'prop-types'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isKeyEnter = require('./isKeyEnter');

var _isKeyEnter2 = _interopRequireDefault(_isKeyEnter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  ROW_CAPTION: 'zhn-oc not-selected',
  SHOW_POPUP: 'show-popup'
};

var STYLE = {
  ROOT: {
    backgroundColor: '#4D4D4D',
    lineHeight: 2
  },
  SVG: {
    width: '16px',
    height: '16px',
    display: 'inline-block'
  },
  CAPTION: {
    paddingLeft: '4px',
    verticalAlign: 'top',
    color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  INLINE: {
    display: 'inline-block'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};

var FILL_OPEN = 'yellow',
    FILL_CLOSE = '#4D4D4D',
    PATH_OPEN = "M 2,14 L 14,14 14,2 2,14",
    PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

var OpenClose2 = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(OpenClose2, _Component);

  function OpenClose2(props) {
    (0, _classCallCheck3.default)(this, OpenClose2);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OpenClose2.__proto__ || Object.getPrototypeOf(OpenClose2)).call(this, props));

    _this._handleToggle = function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    };

    _this._handleKeyDown = function (event) {
      if ((0, _isKeyEnter2.default)(event)) {
        _this._handleToggle();
      }
    };

    _this.state = {
      isOpen: !props.isClose
    };
    return _this;
  }
  /*
  static propTypes = {
    isClose: PropTypes.bool,
      style: PropTypes.object,
    styleNotSelected: PropTypes.object,
    styleCpationRow: PropTypes.object,
    styleCaption: PropTypes.object,
      caption: PropTypes.string,
    fillOpen: PropTypes.string,
    fillClose: PropTypes.string,
      isDraggable: PropTypes.bool,
    option: PropTypes.object,
    onDragStart: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDrop: PropTypes.func,
      children: PropTypes.oneOfType([
       PropTypes.arrayOf(PropTypes.node),
       PropTypes.node
    ])
  }
  */

  (0, _createClass3.default)(OpenClose2, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          styleNotSelected = _props.styleNotSelected,
          styleCaptionRow = _props.styleCaptionRow,
          styleCaption = _props.styleCaption,
          caption = _props.caption,
          fillOpen = _props.fillOpen,
          fillClose = _props.fillClose,
          isDraggable = _props.isDraggable,
          option = _props.option,
          onDragStart = _props.onDragStart,
          onDragEnter = _props.onDragEnter,
          onDragOver = _props.onDragOver,
          onDragLeave = _props.onDragLeave,
          onDrop = _props.onDrop,
          children = _props.children,
          _dragOption = isDraggable ? {
        draggable: true,
        onDragStart: onDragStart.bind(null, option),
        onDrop: onDrop.bind(null, option),
        onDragEnter: onDragEnter,
        onDragOver: onDragOver,
        onDragLeave: onDragLeave
      } : undefined;

      var _pathV = void 0,
          _fillV = void 0,
          _styleCollapse = void 0,
          _classShow = void 0,
          _styleNotSelected = void 0;
      if (this.state.isOpen) {
        _pathV = PATH_OPEN;
        _fillV = fillOpen;
        _styleCollapse = STYLE.BLOCK;
        _classShow = CL.SHOW_POPUP;
        _styleNotSelected = null;
      } else {
        _pathV = PATH_CLOSE;
        _fillV = fillClose;
        _styleCollapse = STYLE.NONE;
        _classShow = null;
        _styleNotSelected = styleNotSelected;
      }

      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, STYLE.ROOT, style) },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({
            className: CL.ROW_CAPTION,
            style: (0, _extends3.default)({}, styleCaptionRow, _styleNotSelected),
            onClick: this._handleToggle,
            tabIndex: '0',
            role: 'menuitem',
            onKeyDown: this._handleKeyDown
          }, _dragOption),
          _react2.default.createElement(
            'div',
            { style: STYLE.SVG },
            _react2.default.createElement(
              'svg',
              {
                viewBox: '0 0 16 16', width: '100%', height: '100%',
                preserveAspectRatio: 'none', xmlns: 'http://www.w3.org/2000/svg',
                style: STYLE.INLINE
              },
              _react2.default.createElement('path', {
                d: _pathV,
                fill: _fillV,
                strokeWidth: '1',
                stroke: fillOpen
              })
            )
          ),
          _react2.default.createElement(
            'span',
            { style: (0, _extends3.default)({}, STYLE.CAPTION, styleCaption) },
            caption
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: _classShow,
            style: _styleCollapse
          },
          children
        )
      );
    }
  }]);
  return OpenClose2;
}(_react.Component), _class.defaultProps = {
  isClose: true,
  fillOpen: FILL_OPEN,
  fillClose: FILL_CLOSE
}, _temp);
exports.default = OpenClose2;
//# sourceMappingURL=OpenClose2.js.map