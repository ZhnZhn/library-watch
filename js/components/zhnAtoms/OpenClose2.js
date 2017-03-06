'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  rootDiv: {
    backgroundColor: '#4D4D4D',
    lineHeight: 1.5
  },
  divSvg: {
    width: '16px',
    height: '16px',
    display: 'inline-block'
  },
  labelCaption: {
    paddingLeft: '4px',
    verticalAlign: 'top',
    color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  itemRow: {
    backgroundColor: '#404040'
  },
  displayInline: {
    display: 'inline-block'
  },
  displayBlock: {
    display: 'block'
  },
  displayNone: {
    display: 'none'
  }
};

var FILL_OPEN = 'yellow',
    FILL_CLOSE = '#4D4D4D',
    PATH_OPEN = "M 2,14 L 14,14 14,2 2,14",
    PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

var OpenClose2 = _react2.default.createClass({
  displayName: 'OpenClose2',
  getInitialState: function getInitialState() {
    var isClose = this.props.isClose;


    return {
      isOpen: isClose ? false : true
    };
  },
  _handleClickOpenClose: function _handleClickOpenClose() {
    this.setState({ isOpen: !this.state.isOpen });
  },
  render: function render() {
    var _props = this.props,
        style = _props.style,
        styleNotSelected = _props.styleNotSelected,
        styleCaption = _props.styleCaption,
        caption = _props.caption,
        _props$fillOpen = _props.fillOpen,
        fillOpen = _props$fillOpen === undefined ? FILL_OPEN : _props$fillOpen,
        _props$fillClose = _props.fillClose,
        fillClose = _props$fillClose === undefined ? FILL_CLOSE : _props$fillClose,
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
      _styleCollapse = styles.displayBlock;
      _classShow = 'show-popup';
      _styleNotSelected = null;
    } else {
      _pathV = PATH_CLOSE;
      _fillV = fillClose;
      _styleCollapse = styles.displayNone;
      _classShow = null;
      _styleNotSelected = styleNotSelected;
    }

    return _react2.default.createElement(
      'div',
      { style: Object.assign({}, styles.rootDiv, style) },
      _react2.default.createElement(
        'div',
        _extends({
          className: 'not-selected',
          style: _styleNotSelected,
          onClick: this._handleClickOpenClose
        }, _dragOption),
        _react2.default.createElement(
          'div',
          { style: styles.divSvg },
          _react2.default.createElement(
            'svg',
            {
              viewBox: '0 0 16 16', width: '100%', height: '100%',
              preserveAspectRatio: 'none', xmlns: 'http://www.w3.org/2000/svg',
              style: styles.displayInline
            },
            _react2.default.createElement('path', {
              d: _pathV,
              fill: _fillV,
              strokeWidth: '1', stroke: fillOpen
            })
          )
        ),
        _react2.default.createElement(
          'span',
          { style: Object.assign({}, styles.labelCaption, styleCaption) },
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
});

exports.default = OpenClose2;
//# sourceMappingURL=OpenClose2.js.map