'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuBadge = require('../zhnAtoms/MenuBadge');

var _MenuBadge2 = _interopRequireDefault(_MenuBadge);

var _OpenClose = require('../zhnAtoms/OpenClose');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _renderMenuItems = function _renderMenuItems(items) {
  return items.map(function (item, index) {
    var className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected',
        menuBadge = item.counter !== 0 ? _react2.default.createElement(_MenuBadge2.default, {
      counter: item.counter,
      isOpen: item.isOpen,
      onBadgeOpen: item.onBadgeOpen,
      onBadgeClose: item.onBadgeClose
    }) : null;
    return _react2.default.createElement(
      'div',
      {
        key: index,
        className: className,
        onClick: item.onClick
      },
      item.title,
      menuBadge
    );
  });
};

var MenuPart = function MenuPart(props) {
  var caption = props.caption;
  var items = props.items;

  return _react2.default.createElement(
    _OpenClose2.default,
    { caption: caption },
    _renderMenuItems(items)
  );
};

exports.default = MenuPart;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\zhnMoleculs\MenuPart.js.map