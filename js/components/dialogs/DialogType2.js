"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _DateUtils = _interopRequireDefault(require("../../utils/DateUtils"));

var _DialogCell = _interopRequireDefault(require("./DialogCell"));

var _Decorators = _interopRequireDefault(require("./decorators/Decorators"));

var _helperFns = _interopRequireDefault(require("./helperFns/helperFns"));

var _dec, _dec2, _dec3, _class, _temp;

var crMenuMore = _helperFns["default"].crMenuMore,
    crButtons = _helperFns["default"].crButtons;
var _sortOptions = [{
  caption: "Activity, Recent Day",
  value: "activity"
}, {
  caption: "Creation Date",
  value: "creation"
}, {
  caption: "Score",
  value: "votes"
}, {
  caption: "Hot Tab",
  value: "hot"
}, {
  caption: "Hot Week Tab",
  value: "week"
}, {
  caption: "Hot Month Tab",
  value: "month"
}];

var _initFromDate = _DateUtils["default"].getFromDate(1),
    _initToDate = _DateUtils["default"].getToDate(),
    _onTestDate = _DateUtils["default"].isValidDate;

var DialogType2 = (_dec = _Decorators["default"].withToolbar, _dec2 = _Decorators["default"].withValidationLoad, _dec3 = _Decorators["default"].withInitialState, _dec(_class = _dec2(_class = _dec3(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(DialogType2, _Component);

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
  function DialogType2(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleSelectSortBy = function (item) {
      _this.sortByItem = item;
    };

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
          _fromDate = _DateUtils["default"].toUTCMillis(fromDate) / 1000,
          _toDate = _DateUtils["default"].toUTCMillis(toDate) / 1000,
          requestType = _this.props.requestType,
          value = _this.sortByItem.value;

      return {
        repo: repo,
        requestType: requestType,
        sort: value,
        fromdate: _fromDate,
        todate: _toDate
      };
    };

    _this._handleClose = function () {
      _this._handleCloseWithValidation(_this._createValidationMessages);
    };

    _this._refInputOne = function (c) {
      return _this.inputOne = c;
    };

    _this._refDatesFragment = function (c) {
      return _this.datesFragment = c;
    };

    _this.stock = null;
    _this.sortByItem = {};
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

  var _proto = DialogType2.prototype;

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
    return _react["default"].createElement(_DialogCell["default"].DraggableDialog, {
      isShow: isShow,
      caption: caption,
      menuModel: this._menuMore,
      commandButtons: this._commandButtons,
      onShowChart: onShow,
      onClose: this._handleClose
    }, _react["default"].createElement(_DialogCell["default"].Toolbar, {
      isShow: isToolbar,
      buttons: this.toolbarButtons
    }), _react["default"].createElement(_DialogCell["default"].RowInputText, {
      ref: this._refInputOne,
      isShowLabel: isShowLabels,
      caption: oneTitle,
      placeholder: onePlaceholder,
      onEnter: this._handleLoad
    }), _react["default"].createElement(_DialogCell["default"].RowInputSelect, {
      isShowLabel: isShowLabels,
      caption: "Sort By",
      placeholder: "Default: Hot Week Tab",
      options: _sortOptions,
      onSelect: this._handleSelectSortBy
    }), _react["default"].createElement(_DialogCell["default"].ShowHide, {
      isShow: isShowDate
    }, _react["default"].createElement(_DialogCell["default"].Dates, {
      ref: this._refDatesFragment,
      isShowLabels: isShowLabels,
      initFromDate: _initFromDate,
      initToDate: _initToDate,
      onTestDate: _onTestDate
    })), _react["default"].createElement(_DialogCell["default"].ValidationMessages, {
      validationMessages: validationMessages
    }));
  };

  return DialogType2;
}(_react.Component), _temp)) || _class) || _class) || _class);
var _default = DialogType2;
exports["default"] = _default;
//# sourceMappingURL=DialogType2.js.map