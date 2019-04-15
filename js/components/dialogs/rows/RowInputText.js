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

var _class, _temp2;
//import PropTypes from "prop-types";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputText = require('../../zhnAtoms/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _Caption = require('./Caption');

var _Caption2 = _interopRequireDefault(_Caption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROW_DIV: {
    margin: '5px'
  },
  LABEL_SPAN: {
    color: '#1B75BB',
    display: 'inline-block',
    textAlign: 'right',
    width: '100px',
    paddingRight: '5px',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  ROOT: {
    lineHeight: 2
  },
  CAPTION: {
    width: '120px'
  },
  INPUT_TEXT: {
    width: '250px',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: '10px',
    height: '30px'
  }
};

var RowInputText = (_temp2 = _class = function (_Component) {
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
    isShowLabel: true,
    caption: PropTypes.string,
    placeholder: PropTypes.string,
    onEnter: PropTypes.function
  }
  */


  (0, _createClass3.default)(RowInputText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShowLabel = _props.isShowLabel,
          caption = _props.caption,
          placeholder = _props.placeholder,
          onEnter = _props.onEnter,
          _placeholder = isShowLabel ? placeholder : placeholder || caption;

      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, S.ROW_DIV, S.ROOT) },
        _react2.default.createElement(_Caption2.default, {
          is: isShowLabel,
          style: (0, _extends3.default)({}, S.LABEL_SPAN, S.CAPTION),
          caption: caption
        }),
        _react2.default.createElement(_InputText2.default, {
          ref: this._refInput,
          style: S.INPUT_TEXT,
          placeholder: _placeholder,
          onEnter: onEnter
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
}(_react.Component), _class.defaultProps = {
  isShowLabel: true,
  caption: ''
}, _temp2);
exports.default = RowInputText;
//# sourceMappingURL=RowInputText.js.map