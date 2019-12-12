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
var MARKET_SHARES = [{
  caption: "OS Desktop, Mobile, Tablet, Console",
  value: "os"
}, {
  caption: "Windows Desktop",
  value: "win-desktop"
}, {
  caption: "macOS Desktop",
  value: "mac-desktop"
}, {
  caption: "Android Mobile, Tablet",
  value: "android-mobile"
}, {
  caption: "IOS Mobile, Tablet",
  value: "ios-mobile"
}, {
  caption: "Browser: All Platforms",
  value: "browser"
}];
var REGIONS = [{
  caption: "Worldwide",
  value: "worlwide",
  v2: "ww"
}, {
  caption: "Africa",
  value: "africa",
  v2: "af"
}, {
  caption: "Asia",
  value: "asia",
  v2: "as"
}, {
  caption: "Antarctica",
  value: "antarctica",
  v2: "an"
}, {
  caption: "Australia",
  value: "australia",
  v2: "au"
}, {
  caption: "Europe",
  value: "europe",
  v2: "eu"
}, {
  caption: "North America",
  value: "north-america",
  v2: "na"
}, {
  caption: "South America",
  value: "south-america",
  v2: "sa"
}, {
  caption: "Oceania",
  value: "oceania",
  v2: "oc"
}];

var _initFromDate = _DateUtils["default"].getFromDate(1),
    _initToDate = _DateUtils["default"].getToDate(),
    _onTestDate = _DateUtils["default"].isValidDate;

var DialogType3 = (_dec = _Decorators["default"].withToolbar, _dec2 = _Decorators["default"].withValidationLoad, _dec3 = _Decorators["default"].withInitialState, _dec(_class = _dec2(_class = _dec3(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(DialogType3, _Component);

  /*
  static propTypes = {
    caption: PropTypes.string,
    requestType: PropTypes.string,
    oneTitle: PropTypes.string,
    onePlaceholder: PropTypes.string,
    twoTitle: PropTypes.string,
    twoPlaceholder: PropTypes.string,
    isShow: PropTypes.bool,
    onShow: PropTypes.func
  }
  */
  function DialogType3(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hSelectItem = function (item) {
      _this._item = item;
    };

    _this._hSelectRegion = function (item) {
      _this._region = item;
    };

    _this._handleClear = function () {
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
      //{ fromDate, toDate } = this.datesFragment.getValues()
      //, _fromDate = DateUtils.toUTCMillis(fromDate)/1000
      //, _toDate = DateUtils.toUTCMillis(toDate)/1000
      var requestType = _this.props.requestType,
          _this$_item = _this._item,
          value = _this$_item.value,
          caption = _this$_item.caption;
      return {
        requestType: requestType,
        value: value,
        caption: caption,
        region: _this._region //fromdate : _fromDate,
        //todate : _toDate

      };
    };

    _this._handleClose = function () {
      _this._handleCloseWithValidation(_this._createValidationMessages);
    };

    _this._refDatesFragment = function (c) {
      return _this.datesFragment = c;
    };

    _this.stock = null;
    _this._item = MARKET_SHARES[0];
    _this._region = REGIONS[0];
    _this.toolbarButtons = _this._createType2WithToolbar(props, {
      hasDate: false
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

  var _proto = DialogType3.prototype;

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
    }), _react["default"].createElement(_DialogCell["default"].RowInputSelect, {
      isShowLabel: isShowLabels,
      caption: "Item",
      placeholder: MARKET_SHARES[0].caption,
      options: MARKET_SHARES,
      onSelect: this._hSelectItem
    }), _react["default"].createElement(_DialogCell["default"].RowInputSelect, {
      isShowLabel: isShowLabels,
      caption: "Region",
      placeholder: REGIONS[0].caption,
      options: REGIONS,
      onSelect: this._hSelectRegion
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

  return DialogType3;
}(_react.Component), _temp)) || _class) || _class) || _class);
var _default = DialogType3;
exports["default"] = _default;
//# sourceMappingURL=DialogType1A.js.map