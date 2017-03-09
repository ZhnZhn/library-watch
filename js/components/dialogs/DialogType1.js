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

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('../zhnMoleculs/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _RowInputText = require('./RowInputText');

var _RowInputText2 = _interopRequireDefault(_RowInputText);

var _ValidationMessagesFragment = require('./ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

var _withValidationLoad = require('./decorators/withValidationLoad');

var _withValidationLoad2 = _interopRequireDefault(_withValidationLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogType1 = (0, _withValidationLoad2.default)(_class = function (_Component) {
  (0, _inherits3.default)(DialogType1, _Component);

  function DialogType1(props) {
    (0, _classCallCheck3.default)(this, DialogType1);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogType1.__proto__ || Object.getPrototypeOf(DialogType1)).call(this));

    _this._handleClear = function () {
      _this.inputRepo.setValue('');
      _this.setState({ validationMessages: [] });
    };

    _this._handleLoad = function () {
      _this._handleLoadWithValidation(_this._createValidationMessages(), _this._createLoadOption);
    };

    _this._createValidationMessages = function () {
      var msg = [];

      var value = _this.inputRepo.getValue();
      if (!value) {
        msg = msg.concat(_this.props.oneTitle + ' is required');
      }

      msg.isValid = msg.length === 0 ? true : false;
      return msg;
    };

    _this._createLoadOption = function () {
      var requestType = _this.props.requestType;

      return {
        repo: _this.inputRepo.getValue(),
        requestType: requestType
      };
    };

    _this._handleClose = function () {
      _this._handleCloseWithValidation(_this._createValidationMessages);
    };

    _this.stock = null;
    _this._commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      type: 'TypeC',
      caption: 'Clear',
      onClick: _this._handleClear
    }), _react2.default.createElement(_ToolBarButton2.default, {
      type: 'TypeC',
      caption: 'Load',
      onClick: _this._handleLoad
    })];
    _this.state = {
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
      var _this2 = this;

      var _props = this.props,
          caption = _props.caption,
          isShow = _props.isShow,
          onShow = _props.onShow,
          oneTitle = _props.oneTitle,
          onePlaceholder = _props.onePlaceholder,
          validationMessages = this.state.validationMessages;


      return _react2.default.createElement(
        _Dialog2.default,
        {
          caption: caption,
          isShow: isShow,
          commandButtons: this._commandButtons,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_RowInputText2.default, {
          ref: function ref(c) {
            return _this2.inputRepo = c;
          },
          caption: oneTitle,
          placeholder: onePlaceholder
        }),
        _react2.default.createElement(_ValidationMessagesFragment2.default, {
          validationMessages: validationMessages
        })
      );
    }
  }]);
  return DialogType1;
}(_react.Component)) || _class;

process.env.NODE_ENV !== "production" ? DialogType1.propTypes = {
  caption: _react.PropTypes.string,
  requestType: _react.PropTypes.string,
  oneTitle: _react.PropTypes.string,
  onePlaceholder: _react.PropTypes.string,
  isShow: _react.PropTypes.bool,
  onShow: _react.PropTypes.func
} : void 0;
exports.default = DialogType1;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\DialogType1.js.map