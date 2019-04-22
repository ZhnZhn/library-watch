'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp2;
//import PropTypes from "prop-types";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../zhn-utils/utils');

var _ModalSlider = require('../zhn-modal-slider/ModalSlider');

var _ModalSlider2 = _interopRequireDefault(_ModalSlider);

var _SvgMore = require('../zhn-atoms/SvgMore');

var _SvgMore2 = _interopRequireDefault(_SvgMore);

var _SvgClose = require('../zhn-atoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Interact = require('../../utils/Interact');

var _Interact2 = _interopRequireDefault(_Interact);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  ROOT: "draggable-dialog",
  SHOWING: 'show-popup',
  NOT_SELECTED: 'not-selected',
  MENU_MORE: 'popup-menu dialog__menu-more'
};

var S = (0, _extends3.default)({}, _Dialog2.default, {
  ROOT_DIV_DRAG: {
    position: 'absolute',
    top: '30px',
    left: '50px',
    zIndex: 10
  },
  BT_MORE: {
    position: 'absolute',
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

var DraggableDialog = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(DraggableDialog, _Component);

  function DraggableDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DraggableDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DraggableDialog.__proto__ || Object.getPrototypeOf(DraggableDialog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isMore: false
    }, _this._hKeyDown = function (evt) {
      if ((0, _utils.isKeyEscape)(evt)) {
        evt.preventDefault();
        evt.stopPropagation();
        _this._hClose();
      }
    }, _this._hClose = function () {
      _this.props.onClose();
      _this.focusPrev();
    }, _this._toggleMore = function () {
      _this.setState(function (prevState) {
        return {
          isMore: !prevState.isMore
        };
      });
    }, _this._renderMenuMore = function (menuModel, isMore) {
      return menuModel && _react2.default.createElement(_ModalSlider2.default, {
        isShow: isMore,
        className: CL.MENU_MORE
        //style={TS.EL_BORDER}
        , model: menuModel,
        onClose: _this._toggleMore
      });
    }, _this._renderBtMore = function (menuModel) {
      return menuModel && _react2.default.createElement(_SvgMore2.default, {
        btRef: _this._refBtMore,
        style: S.BT_MORE,
        svgStyle: S.BT_MORE_SVG,
        onClick: _this._toggleMore
      });
    }, _this._renderCommandButton = function (commandButtons, onShowChart, onClose) {
      return _react2.default.createElement(
        'div',
        { style: S.COMMAND_DIV },
        commandButtons,
        _isFn(onShowChart) && _react2.default.createElement(_FlatButton2.default, {
          key: 'show',
          rootStyle: S.BT_ROOT,
          caption: 'Show',
          title: 'Show Pane Container'
          //accessKey="s"
          , onClick: onShowChart
        }),
        _react2.default.createElement(_FlatButton2.default, {
          key: 'close',
          rootStyle: S.BT_ROOT,
          caption: 'Close',
          title: 'Close Draggable Dialog'
          //accessKey="c"
          , onClick: onClose
        })
      );
    }, _this._refBtMore = function (node) {
      return _this.btMore = node;
    }, _this._refRootDiv = function (node) {
      return _this.rootDiv = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    caption: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    commandButtons: PropTypes.arrayOf(PropTypes.element),
    onShowChart: PropTypes.func,
    onClose: PropTypes.func
  }
  */


  (0, _createClass3.default)(DraggableDialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _Interact2.default.makeDragable(this.rootDiv);
      this.focus();
    }
  }, {
    key: '_hasShowed',
    value: function _hasShowed(prevProps) {
      return !prevProps.isShow && this.props.isShow;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this._hasShowed(prevProps)) {
        this.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          menuModel = _props.menuModel,
          isShow = _props.isShow,
          caption = _props.caption,
          children = _props.children,
          commandButtons = _props.commandButtons,
          onShowChart = _props.onShowChart,
          onFront = _props.onFront,
          isMore = this.state.isMore,
          _styleShow = isShow ? S.SHOW : S.HIDE,
          _classShow = isShow ? CL.SHOWING : '',
          _className = CL.ROOT + ' ' + _classShow;

      return (
        /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
        _react2.default.createElement(
          'div',
          {
            ref: this._refRootDiv,
            role: 'dialog',
            tabIndex: '-1',
            'aria-label': caption,
            'aria-hidden': !isShow,
            className: _className,
            style: (0, _extends3.default)({}, S.ROOT_DIV, S.ROOT_DIV_DRAG, _styleShow),
            onClick: onFront,
            onKeyDown: this._hKeyDown
          },
          _react2.default.createElement(
            'div',
            { style: S.CAPTION_DIV },
            this._renderMenuMore(menuModel, isMore),
            this._renderBtMore(menuModel),
            _react2.default.createElement(
              'span',
              { className: CL.NOT_SELECTED },
              caption
            ),
            _react2.default.createElement(_SvgClose2.default, {
              style: S.SVG_CLOSE,
              onClose: this._hClose
            })
          ),
          _react2.default.createElement(
            'div',
            { style: S.CHILDREN_DIV },
            children
          ),
          this._renderCommandButton(commandButtons, onShowChart, this._hClose)
        )
      );
    }
  }, {
    key: 'focus',
    value: function focus() {
      this._prevFocused = document.activeElement;
      (0, _utils.focusNode)(this.btMore || this.rootDiv);
    }
  }, {
    key: 'focusPrev',
    value: function focusPrev() {
      (0, _utils.focusNode)(this._prevFocused);
      this._prevFocused = null;
    }
  }]);
  return DraggableDialog;
}(_react.Component), _class.defaultProps = {
  onClose: function onClose() {}
}, _temp2);
exports.default = DraggableDialog;
//# sourceMappingURL=DraggableDialog.js.map