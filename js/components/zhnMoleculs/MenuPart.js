'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuBadge = require('../zhnAtoms/MenuBadge');

var _MenuBadge2 = _interopRequireDefault(_MenuBadge);

var _OpenClose = require('../zhnAtoms/OpenClose2');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

var CL = {
  NOT_SELECTED: 'not-selected',
  ROW_EVEN: 'row__topic__even not-selected',
  ROW_ODD: 'row__topic__odd not-selected'
};

var FILL_OPEN = '#1b2836';
var FILL_CLOSE = 'transparent';

var S = {
  CAPTION_ROW: {
    paddingLeft: 6
  }
};

var _renderMenuItems = function _renderMenuItems(rowClass) {
  var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return items.map(function (item, index) {
    var _className = rowClass ? rowClass + ' ' + CL.NOT_SELECTED : index % 2 ? CL.ROW_EVEN : CL.ROW_ODD,
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
        tabIndex: 0,
        className: _className,
        onClick: item.onClick
        //onKeyPress={item.onClick}
      },
      item.title,
      menuBadge
    );
  });
};

var MenuPart = function MenuPart(_ref) {
  var rowClass = _ref.rowClass,
      caption = _ref.caption,
      items = _ref.items,
      isInitClose = _ref.isInitClose;
  return _react2.default.createElement(
    _OpenClose2.default,
    {
      styleCaptionRow: S.CAPTION_ROW,
      fillOpen: FILL_OPEN,
      fillClose: FILL_CLOSE,
      caption: caption,
      isClose: isInitClose
    },
    _renderMenuItems(rowClass, items)
  );
};

/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/

exports.default = MenuPart;
//# sourceMappingURL=MenuPart.js.map