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

var _Decorators = require('./decorators/Decorators');

var _Decorators2 = _interopRequireDefault(_Decorators);

var _crCommandButtons = require('./crCommandButtons');

var _crCommandButtons2 = _interopRequireDefault(_crCommandButtons);

var _Dialog = require('../zhnMoleculs/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogCell = require('./DialogCell');

var _DialogCell2 = _interopRequireDefault(_DialogCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogType1 = (_dec = _Decorators2.default.withToolbar, _dec2 = _Decorators2.default.withValidationLoad, _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(DialogType1, _Component);

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

  function DialogType1(props) {
    (0, _classCallCheck3.default)(this, DialogType1);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogType1.__proto__ || Object.getPrototypeOf(DialogType1)).call(this, props));

    _this._handleClear = function () {
      _this.inputOne.setValue('');
      _this.setState({ validationMessages: [] });
    };

    _this._handleLoad = function () {
      _this._handleLoadWithValidation(_this._createValidationMessages(), _this._createLoadOption);
    };

    _this._createValidationMessages = function () {
      var msg = [];

      var value = _this.inputOne.getValue();
      if (!value) {
        msg = msg.concat(_this.props.oneTitle + ' is required');
      }

      msg.isValid = msg.length === 0 ? true : false;
      return msg;
    };

    _this._createLoadOption = function () {
      var requestType = _this.props.requestType;

      return {
        repo: _this.inputOne.getValue(),
        requestType: requestType
      };
    };

    _this._handleClose = function () {
      _this._handleCloseWithValidation(_this._createValidationMessages);
    };

    _this._refInputOne = function (c) {
      return _this.inputOne = c;
    };

    _this.stock = null;
    _this.toolbarButtons = _this._createType2WithToolbar(props);
    _this._commandButtons = (0, _crCommandButtons2.default)({ inst: _this });
    _this.state = {
      isShowLabels: true,
      validationMessages: []
    };
    return _this;
  }

  (0, _createClass3.default)(DialogType1, [{
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
        _react2.default.createElement(_DialogCell2.default.ValidationMessages, {
          validationMessages: validationMessages
        })
      );
    }
  }]);
  return DialogType1;
}(_react.Component)) || _class) || _class);
exports.default = DialogType1;
//# sourceMappingURL=DialogType1.js.map