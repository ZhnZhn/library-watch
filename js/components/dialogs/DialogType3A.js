"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _DialogCell = _interopRequireDefault(require("./DialogCell"));

var _Decorators = _interopRequireDefault(require("./decorators/Decorators"));

var _helperFns = _interopRequireDefault(require("./helperFns/helperFns"));

var _jsxRuntime = require("react/jsx-runtime");

var _dec, _class;

var dateConfig = _helperFns["default"].dateConfig,
    crMenuMore = _helperFns["default"].crMenuMore,
    crButtons = _helperFns["default"].crButtons;
var _initFromDate = dateConfig._initFromDate,
    _initToDate = dateConfig._initToDate,
    _onTestDate = dateConfig._onTestDate;
var DialogType3A = (_dec = _Decorators["default"].dialog, _dec(_class = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DialogType3A, _Component);

  /*
  static propTypes = {
    caption: PropTypes.string,
    requestType: PropTypes.string,
    oneTitle: PropTypes.string,
    onePlaceholder: PropTypes.string,
    isShow: PropTypes.bool,
    onShow: PropTypes.func
  }
  */
  function DialogType3A(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleClear = function () {
      _this.inputOne.setValue('');

      _this.setState({
        validationMessages: []
      });
    };

    _this._handleLoad = function () {
      _this._handleLoadWithValidation(_this._createValidationMessages(), _this._createLoadOption);
    };

    _this._createValidationMessages = function () {
      var msg = [];

      var repo = _this.inputOne.getValue();

      if (!repo) {
        msg = msg.concat(_this.props.oneTitle + " is required");
      }

      var _this$datesFragment$g = _this.datesFragment.getValidation(),
          isValid = _this$datesFragment$g.isValid,
          datesMsg = _this$datesFragment$g.datesMsg;

      if (!isValid) {
        msg = msg.concat(datesMsg);
      }

      msg.isValid = msg.length === 0 ? true : false;
      return msg;
    };

    _this._createLoadOption = function () {
      var repo = _this.inputOne.getValue(),
          _this$datesFragment$g2 = _this.datesFragment.getValues(),
          fromDate = _this$datesFragment$g2.fromDate,
          toDate = _this$datesFragment$g2.toDate,
          requestType = _this.props.requestType;

      return {
        repo: repo,
        requestType: requestType,
        fromDate: fromDate,
        toDate: toDate
      };
    };

    _this._handleClose = function () {
      _this._handleCloseWithValidation(_this._createValidationMessages);
    };

    _this._refInputOne = function (c) {
      return _this.inputOne = c;
    };

    _this._refInputDates = function (c) {
      return _this.datesFragment = c;
    };

    _this.stock = null;
    _this.toolbarButtons = _this._createType2WithToolbar(props, {
      hasDate: true
    });
    _this._menuMore = crMenuMore((0, _assertThisInitialized2["default"])(_this), {
      toggleDates: _this._clickDateWithToolbar,
      toggleLabels: _this._clickLabelWithToolbar,
      toggleToolBar: _this._toggleWithToolbar
    });
    _this._commandButtons = crButtons({
      inst: (0, _assertThisInitialized2["default"])(_this)
    });
    _this.state = (0, _extends2["default"])({}, _this._withInitialState());
    return _this;
  }

  var _proto = DialogType3A.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      if (this.props.isShow === nextProps.isShow) {
        return false;
      }
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        caption = _this$props.caption,
        isShow = _this$props.isShow,
        onShow = _this$props.onShow,
        oneTitle = _this$props.oneTitle,
        onePlaceholder = _this$props.onePlaceholder,
        _this$state = this.state,
        isToolbar = _this$state.isToolbar,
        isShowLabels = _this$state.isShowLabels,
        isShowDate = _this$state.isShowDate,
        validationMessages = _this$state.validationMessages;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogCell["default"].DraggableDialog, {
      isShow: isShow,
      caption: caption,
      menuModel: this._menuMore,
      commandButtons: this._commandButtons,
      onShowChart: onShow,
      onClose: this._handleClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell["default"].Toolbar, {
        isShow: isToolbar,
        buttons: this.toolbarButtons
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell["default"].RowInputText, {
        ref: this._refInputOne,
        isShowLabel: isShowLabels,
        caption: oneTitle,
        placeholder: onePlaceholder,
        onEnter: this._handleLoad
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell["default"].ShowHide, {
        isShow: isShowDate,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell["default"].Dates, {
          ref: this._refInputDates,
          isShowLabels: isShowLabels,
          initFromDate: _initFromDate,
          initToDate: _initToDate,
          onTestDate: _onTestDate
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell["default"].ValidationMessages, {
        validationMessages: validationMessages
      })]
    });
  };

  return DialogType3A;
}(_react.Component)) || _class);
var _default = DialogType3A;
exports["default"] = _default;
//# sourceMappingURL=DialogType3A.js.map