"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));

//import PropTypes from 'prop-types'
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
    color: '#1b2836',
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

var OpenClose2 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(OpenClose2, _Component);

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
  function OpenClose2(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleToggle = function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    };

    _this._handleKeyDown = function (event) {
      if ((0, _isKeyEnter["default"])(event)) {
        _this._handleToggle();
      }
    };

    _this.state = {
      isOpen: !props.isClose
    };
    return _this;
  }

  var _proto = OpenClose2.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        styleNotSelected = _this$props.styleNotSelected,
        styleCaptionRow = _this$props.styleCaptionRow,
        styleCaption = _this$props.styleCaption,
        caption = _this$props.caption,
        fillOpen = _this$props.fillOpen,
        fillClose = _this$props.fillClose,
        isDraggable = _this$props.isDraggable,
        option = _this$props.option,
        onDragStart = _this$props.onDragStart,
        onDragEnter = _this$props.onDragEnter,
        onDragOver = _this$props.onDragOver,
        onDragLeave = _this$props.onDragLeave,
        onDrop = _this$props.onDrop,
        children = _this$props.children,
        _dragOption = isDraggable ? {
      draggable: true,
      onDragStart: onDragStart.bind(null, option),
      onDrop: onDrop.bind(null, option),
      onDragEnter: onDragEnter,
      onDragOver: onDragOver,
      onDragLeave: onDragLeave
    } : undefined;

    var _pathV, _fillV, _styleCollapse, _classShow, _styleNotSelected;

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

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, STYLE.ROOT, style)
    }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      className: CL.ROW_CAPTION,
      style: (0, _extends2["default"])({}, styleCaptionRow, _styleNotSelected),
      onClick: this._handleToggle,
      tabIndex: "0",
      role: "menuitem",
      onKeyDown: this._handleKeyDown
    }, _dragOption), /*#__PURE__*/_react["default"].createElement("div", {
      style: STYLE.SVG
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      viewBox: "0 0 16 16",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: STYLE.INLINE
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: _pathV,
      fill: _fillV,
      strokeWidth: "1",
      stroke: fillOpen
    }))), /*#__PURE__*/_react["default"].createElement("span", {
      style: (0, _extends2["default"])({}, STYLE.CAPTION, styleCaption)
    }, caption)), /*#__PURE__*/_react["default"].createElement("div", {
      className: _classShow,
      style: _styleCollapse
    }, children));
  };

  return OpenClose2;
}(_react.Component);

OpenClose2.defaultProps = {
  isClose: true,
  fillOpen: FILL_OPEN,
  fillClose: FILL_CLOSE
};
var _default = OpenClose2;
exports["default"] = _default;
//# sourceMappingURL=OpenClose2.js.map