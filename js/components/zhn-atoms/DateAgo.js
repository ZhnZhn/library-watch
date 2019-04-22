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

var _DateAgo = require('./DateAgo.Style');

var _DateAgo2 = _interopRequireDefault(_DateAgo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateAgo = function (_Component) {
  (0, _inherits3.default)(DateAgo, _Component);

  /*
  static propTypes = {
     isShowDate : PropTypes.bool
  }
  */

  function DateAgo(props) {
    (0, _classCallCheck3.default)(this, DateAgo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DateAgo.__proto__ || Object.getPrototypeOf(DateAgo)).call(this));

    _this._handleClickDateAgo = function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this.setState({ isShowDate: !_this.state.isShowDate });
    };

    _this.state = {
      isShowDate: !!props.isShowDate
    };
    return _this;
  }

  (0, _createClass3.default)(DateAgo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          dateAgo = _props.dateAgo,
          date = _props.date,
          isShowDate = this.state.isShowDate,
          _styleDate = isShowDate ? _DateAgo2.default.INLINE_BLOCK : _DateAgo2.default.NONE;

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          {
            style: _DateAgo2.default.DATE_AGO,
            onClick: this._handleClickDateAgo
          },
          dateAgo
        ),
        _react2.default.createElement(
          'span',
          {
            style: (0, _extends3.default)({}, _DateAgo2.default.DATE, _styleDate)
          },
          date
        )
      );
    }
  }]);
  return DateAgo;
}(_react.Component);

//import PropTypes from "prop-types";

exports.default = DateAgo;
//# sourceMappingURL=DateAgo.js.map