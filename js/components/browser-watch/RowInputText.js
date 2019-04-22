'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputText = require('../zhn-atoms/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

var _crRowCaption = require('./crRowCaption');

var _crRowCaption2 = _interopRequireDefault(_crRowCaption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;
var S = {
  ROOT: {
    lineHeight: 2
  },
  CAPTION: {
    width: 120
  },
  INPUT_TEXT: {
    width: 250,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 10,
    height: 30
  }
};

var RowInputText = function (_Component) {
  (0, _inherits3.default)(RowInputText, _Component);

  function RowInputText() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RowInputText);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RowInputText.__proto__ || Object.getPrototypeOf(RowInputText)).call.apply(_ref, [this].concat(args))), _this), _this._refInput = function (c) {
      return _this.inputText = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    caption: PropTypes.string
  },
  */


  (0, _createClass3.default)(RowInputText, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, styles.rowDiv, S.ROOT) },
        _react2.default.createElement(
          'span',
          { style: (0, _extends3.default)({}, styles.labelSpan, S.CAPTION) },
          (0, _crRowCaption2.default)(this.props.caption)
        ),
        _react2.default.createElement(_InputText2.default, {
          ref: this._refInput,
          style: S.INPUT_TEXT
        })
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.inputText.getValue().trim();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.inputText.setValue(value);
    }
  }]);
  return RowInputText;
}(_react.Component);

exports.default = RowInputText;
//# sourceMappingURL=RowInputText.js.map