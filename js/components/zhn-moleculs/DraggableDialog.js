"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _utils = require("../zhn-utils/utils");

var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));

var _SvgMore = _interopRequireDefault(require("../zhn-atoms/SvgMore"));

var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _Interact = _interopRequireDefault(require("../../utils/Interact"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var CL_ROOT = "draggable-dialog",
    CL_SHOWING = 'show-popup',
    CL_NOT_SELECTED = 'not-selected',
    CL_MENU_MORE = 'popup-menu dialog__menu-more';
var S = (0, _extends2["default"])({}, _Dialog["default"], {
  ROOT_DIV_DRAG: {
    position: 'absolute',
    top: '30px',
    left: '50px',
    zIndex: 10
  },
  BT_MORE: {
    position: 'absolute',
    top: 2,
    left: 0
  },
  BT_MORE_SVG: {
    stroke: 'inherit',
    fill: 'inherit'
  },
  CHILDREN_DIV: {
    cursor: 'default'
  }
});

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var DraggableDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DraggableDialog, _Component);

  function DraggableDialog() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isMore: false
    };

    _this._hKeyDown = function (evt) {
      if ((0, _utils.isKeyEscape)(evt)) {
        evt.preventDefault();
        evt.stopPropagation();

        _this._hClose();
      }
    };

    _this._hClose = function () {
      _this.props.onClose();

      _this.focusPrev();
    };

    _this._toggleMore = function () {
      _this.setState(function (prevState) {
        return {
          isMore: !prevState.isMore
        };
      });
    };

    _this._renderMenuMore = function (menuModel, isMore) {
      return menuModel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalSlider["default"], {
        isShow: isMore,
        className: CL_MENU_MORE,
        model: menuModel,
        onClose: _this._toggleMore
      });
    };

    _this._renderBtMore = function (menuModel) {
      return menuModel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore["default"], {
        btRef: _this._refBtMore,
        style: S.BT_MORE,
        svgStyle: S.BT_MORE_SVG,
        onClick: _this._toggleMore
      });
    };

    _this._renderCommandButton = function (commandButtons, onShowChart, onClose) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S.COMMAND_DIV,
        children: [commandButtons, _isFn(onShowChart) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          rootStyle: S.BT_ROOT,
          caption: "Show",
          title: "Show Pane Container" //accessKey="s"
          ,
          onClick: onShowChart
        }, "show"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          rootStyle: S.BT_ROOT,
          caption: "Close",
          title: "Close Draggable Dialog" //accessKey="c"
          ,
          onClick: onClose
        }, "close")]
      });
    };

    _this._refBtMore = function (node) {
      return _this.btMore = node;
    };

    _this._refRootDiv = function (node) {
      return _this.rootDiv = node;
    };

    return _this;
  }

  var _proto = DraggableDialog.prototype;

  _proto.componentDidMount = function componentDidMount() {
    _Interact["default"].makeDragable(this.rootDiv);

    this.focus();
  };

  _proto._hasShowed = function _hasShowed(prevProps) {
    return !prevProps.isShow && this.props.isShow;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this._hasShowed(prevProps)) {
      this.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        menuModel = _this$props.menuModel,
        isShow = _this$props.isShow,
        caption = _this$props.caption,
        children = _this$props.children,
        commandButtons = _this$props.commandButtons,
        onShowChart = _this$props.onShowChart,
        onFront = _this$props.onFront,
        isMore = this.state.isMore,
        _styleShow = isShow ? S.SHOW : S.HIDE,
        _classShow = isShow ? CL_SHOWING : '',
        _className = CL_ROOT + " " + _classShow;

    return (
      /*#__PURE__*/

      /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
      (0, _jsxRuntime.jsxs)("div", {
        ref: this._refRootDiv,
        role: "dialog",
        tabIndex: "-1",
        "aria-label": caption,
        "aria-hidden": !isShow,
        className: _className,
        style: (0, _extends2["default"])({}, S.ROOT_DIV, S.ROOT_DIV_DRAG, _styleShow),
        onClick: onFront,
        onKeyDown: this._hKeyDown,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: S.CAPTION_DIV,
          children: [this._renderMenuMore(menuModel, isMore), this._renderBtMore(menuModel), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: CL_NOT_SELECTED,
            children: caption
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
            style: S.SVG_CLOSE,
            onClose: this._hClose
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: S.CHILDREN_DIV,
          children: children
        }), this._renderCommandButton(commandButtons, onShowChart, this._hClose)]
      })
    );
  };

  _proto.focus = function focus() {
    this._prevFocused = document.activeElement;
    (0, _utils.focusNode)(this.btMore || this.rootDiv);
  };

  _proto.focusPrev = function focusPrev() {
    (0, _utils.focusNode)(this._prevFocused);
    this._prevFocused = null;
  };

  return DraggableDialog;
}(_react.Component);

DraggableDialog.defaultProps = {
  onClose: function onClose() {}
};
var _default = DraggableDialog;
exports["default"] = _default;
//# sourceMappingURL=DraggableDialog.js.map