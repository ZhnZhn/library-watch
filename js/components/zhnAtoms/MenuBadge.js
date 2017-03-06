'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  OPEN: {
    color: 'rgba(164, 135, 212, 1)'
  }
};

var MenuBadge = _react2.default.createClass({
  displayName: 'MenuBadge',
  _handleClickBadge: function _handleClickBadge(event) {
    event.stopPropagation();
    var _props = this.props,
        isOpen = _props.isOpen,
        onBadgeOpen = _props.onBadgeOpen,
        onBadgeClose = _props.onBadgeClose;

    if (isOpen) {
      onBadgeClose();
    } else {
      onBadgeOpen();
    }
  },
  render: function render() {
    var _props2 = this.props,
        counter = _props2.counter,
        isOpen = _props2.isOpen,
        _styleSpan = isOpen ? STYLE.OPEN : null;

    return _react2.default.createElement(
      'span',
      {
        className: 'menu__badge',
        style: _styleSpan,
        onClick: this._handleClickBadge
      },
      counter
    );
  }
});

exports.default = MenuBadge;
//# sourceMappingURL=MenuBadge.js.map