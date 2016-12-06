'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROOT: {
    display: 'inline-block',
    cursor: 'pointer'
  },
  DATE_AGO: {
    color: 'gray'
  },
  DATE: {
    display: 'inline-block',
    color: 'black',
    marginLeft: '10px'
  }
};

var DateAgo = _react2.default.createClass({
  displayName: 'DateAgo',
  getInitialState: function getInitialState() {
    var _isShowDate = this.props.isShowDate ? true : false;
    return {
      isShowDate: _isShowDate
    };
  },
  _handlerClickDateAgo: function _handlerClickDateAgo(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ isShowDate: !this.state.isShowDate });
  },
  render: function render() {
    var _props = this.props,
        dateAgo = _props.dateAgo,
        date = _props.date,
        isShowDate = this.state.isShowDate,
        _dateStyle = isShowDate ? { display: 'inline-block' } : { display: 'none' };

    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'span',
        {
          style: STYLE.DATE_AGO,
          onClick: this._handlerClickDateAgo
        },
        dateAgo
      ),
      _react2.default.createElement(
        'span',
        {
          style: Object.assign({}, STYLE.DATE, _dateStyle)
        },
        date
      )
    );
  }
});

exports.default = DateAgo;
//# sourceMappingURL=DateAgo.js.map