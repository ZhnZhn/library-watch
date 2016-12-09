'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateAgo = require('./DateAgo.Style');

var _DateAgo2 = _interopRequireDefault(_DateAgo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateAgo = _react2.default.createClass({
  displayName: 'DateAgo',
  getInitialState: function getInitialState() {
    return {
      isShowDate: this.props.isShowDate ? true : false
    };
  },
  _handleClickDateAgo: function _handleClickDateAgo(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ isShowDate: !this.state.isShowDate });
  },
  render: function render() {
    var _props = this.props,
        dateAgo = _props.dateAgo,
        date = _props.date,
        isShowDate = this.state.isShowDate,
        _styleDate = isShowDate ? _DateAgo2.default.DISPLAY_INLINE_BLOCK : _DateAgo2.default.DISPLAY_NONE;

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
          style: Object.assign({}, _DateAgo2.default.DATE, _styleDate)
        },
        date
      )
    );
  }
});

exports.default = DateAgo;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\DateAgo.js.map