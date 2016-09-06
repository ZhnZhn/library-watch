'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuBadge = _react2.default.createClass({
  displayName: 'MenuBadge',
  _handlerClickBadge: function _handlerClickBadge(event) {
    event.stopPropagation();
    var _props = this.props;
    var isOpen = _props.isOpen;
    var onBadgeOpen = _props.onBadgeOpen;
    var onBadgeClose = _props.onBadgeClose;

    if (isOpen) {
      onBadgeClose();
    } else {
      onBadgeOpen();
    }
  },
  render: function render() {
    var _props2 = this.props;
    var counter = _props2.counter;
    var isOpen = _props2.isOpen;

    var spanStyle = isOpen ? { color: 'rgba(164, 135, 212, 1)' } : null;
    return _react2.default.createElement(
      'span',
      {
        className: 'menu__badge',
        style: spanStyle,
        onClick: this._handlerClickBadge },
      counter
    );
  }
});

exports.default = MenuBadge;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\zhnAtoms\MenuBadge.js.map