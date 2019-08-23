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

var _dec, _dec2, _class;
//import PropTypes from "prop-types";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateUtils = require('../../utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

var _DialogCell = require('./DialogCell');

var _DialogCell2 = _interopRequireDefault(_DialogCell);

var _Decorators = require('./decorators/Decorators');

var _Decorators2 = _interopRequireDefault(_Decorators);

var _helperFns = require('./helperFns/helperFns');

var _helperFns2 = _interopRequireDefault(_helperFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crMenuMore = _helperFns2.default.crMenuMore,
    crButtons = _helperFns2.default.crButtons;


var OS_OPTIONS = [{ caption: "OS Desktop, Mobile, Tablet, Console", value: "os" }, { caption: "Windows Desktop", value: "win-desktop" }, { caption: "macOS Desktop", value: "mac-desktop" }, { caption: "Android Mobile, Tablet", value: "android-mobile" }, { caption: "IOS Mobile, Tablet", value: "ios-mobile" }, { caption: "Browser: All Platforms", value: "browser" }];

var _initFromDate = _DateUtils2.default.getFromDate(1),
    _initToDate = _DateUtils2.default.getToDate(),
    _onTestDate = _DateUtils2.default.isValidDate;

var DialogType3 = (_dec = _Decorators2.default.withToolbar, _dec2 = _Decorators2.default.withValidationLoad, _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(DialogType3, _Component);

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
    (0, _classCallCheck3.default)(this, DialogType3);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogType3.__proto__ || Object.getPrototypeOf(DialogType3)).call(this, props));

    _this._handleSelectSortBy = function (item) {
      _this.sortByItem = item;
    };

    _this._handleDefault = function () {
      _this.datesFragment.setValues(_initFromDate, _initToDate);
      _this.setState({ validationMessages: [] });
    };

    _this._handleClear = function () {
      _this.setState({ validationMessages: [] });
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
          _this$sortByItem = _this.sortByItem,
          value = _this$sortByItem.value,
          caption = _this$sortByItem.caption;


      return {
        requestType: requestType,
        value: value,
        caption: caption
        //fromdate : _fromDate,
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
    _this.sortByItem = OS_OPTIONS[0];
    _this.toolbarButtons = _this._createType2WithToolbar(props, {
      hasDate: false
    });
    _this._menuMore = crMenuMore(_this, {
      toggleDates: _this._clickDateWithToolbar,
      toggleLabels: _this._clickLabelWithToolbar,
      toggleToolBar: _this._toggleWithToolbar
    });
    _this._commandButtons = crButtons({
      inst: _this, isDefault: false
    });
    _this.state = {
      isToolbar: true,
      isShowLabels: true,
      isShowDate: false,
      validationMessages: []
    };
    return _this;
  }

  (0, _createClass3.default)(DialogType3, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props !== nextProps) {
        if (this.props.isShow === nextProps.isShow) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          isShow = _props.isShow,
          onShow = _props.onShow,
          _state = this.state,
          isToolbar = _state.isToolbar,
          isShowLabels = _state.isShowLabels,
          isShowDate = _state.isShowDate,
          validationMessages = _state.validationMessages;


      return _react2.default.createElement(
        _DialogCell2.default.DraggableDialog,
        {
          isShow: isShow,
          caption: caption,
          menuModel: this._menuMore,
          commandButtons: this._commandButtons,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_DialogCell2.default.Toolbar, {
          isShow: isToolbar,
          buttons: this.toolbarButtons
        }),
        _react2.default.createElement(_DialogCell2.default.RowInputSelect, {
          isShowLabel: isShowLabels,
          caption: 'Item',
          placeholder: OS_OPTIONS[0].caption,
          options: OS_OPTIONS,
          onSelect: this._handleSelectSortBy
        }),
        _react2.default.createElement(
          _DialogCell2.default.ShowHide,
          { isShow: isShowDate },
          _react2.default.createElement(_DialogCell2.default.Dates, {
            ref: this._refDatesFragment,
            isShowLabels: isShowLabels,
            initFromDate: _initFromDate,
            initToDate: _initToDate,
            onTestDate: _onTestDate
          })
        ),
        _react2.default.createElement(_DialogCell2.default.ValidationMessages, {
          validationMessages: validationMessages
        })
      );
    }
  }]);
  return DialogType3;
}(_react.Component)) || _class) || _class);
exports.default = DialogType3;
//# sourceMappingURL=DialogType1A.js.map