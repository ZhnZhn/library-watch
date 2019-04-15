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

var _crCommandButtons = require('./crCommandButtons');

var _crCommandButtons2 = _interopRequireDefault(_crCommandButtons);

var _Dialog = require('../zhnMoleculs/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogCell = require('./DialogCell');

var _DialogCell2 = _interopRequireDefault(_DialogCell);

var _Decorators = require('./decorators/Decorators');

var _Decorators2 = _interopRequireDefault(_Decorators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _initFromDate = _DateUtils2.default.getFromDate(1),
    _initToDate = _DateUtils2.default.getToDate(),
    _onTestDate = _DateUtils2.default.isValidDate;

var DialogType3A = (_dec = _Decorators2.default.withToolbar, _dec2 = _Decorators2.default.withValidationLoad, _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(DialogType3A, _Component);

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
    (0, _classCallCheck3.default)(this, DialogType3A);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogType3A.__proto__ || Object.getPrototypeOf(DialogType3A)).call(this, props));

    _this._handleDefault = function () {
      _this.datesFragment.setValues(_initFromDate, _initToDate);
    };

    _this._handleClear = function () {
      _this.inputOne.setValue('');
      _this.setState({ validationMessages: [] });
    };

    _this._handleLoad = function () {
      _this._handleLoadWithValidation(_this._createValidationMessages(), _this._createLoadOption);
    };

    _this._createValidationMessages = function () {
      var msg = [];

      var repo = _this.inputOne.getValue();
      if (!repo) {
        msg = msg.concat(_this.props.oneTitle + ' is required');
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
        repo: repo, requestType: requestType,
        fromDate: fromDate, toDate: toDate
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
    _this._commandButtons = (0, _crCommandButtons2.default)({
      inst: _this, isDefault: true
    });
    _this.state = {
      isShowLabels: true,
      isShowDate: true,
      validationMessages: []
    };
    return _this;
  }

  (0, _createClass3.default)(DialogType3A, [{
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
          oneTitle = _props.oneTitle,
          onePlaceholder = _props.onePlaceholder,
          _state = this.state,
          isShowLabels = _state.isShowLabels,
          isShowDate = _state.isShowDate,
          validationMessages = _state.validationMessages;


      return _react2.default.createElement(
        _Dialog2.default,
        {
          caption: caption,
          isShow: isShow,
          commandButtons: this._commandButtons,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_DialogCell2.default.Toolbar, {
          isShow: true,
          buttons: this.toolbarButtons
        }),
        _react2.default.createElement(_DialogCell2.default.RowInputText, {
          ref: this._refInputOne,
          isShowLabel: isShowLabels,
          caption: oneTitle,
          placeholder: onePlaceholder,
          onEnter: this._handleLoad
        }),
        _react2.default.createElement(
          _DialogCell2.default.ShowHide,
          { isShow: isShowDate },
          _react2.default.createElement(_DialogCell2.default.Dates, {
            ref: this._refInputDates,
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
  return DialogType3A;
}(_react.Component)) || _class) || _class);
exports.default = DialogType3A;
//# sourceMappingURL=DialogType3A.js.map