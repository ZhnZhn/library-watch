"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MenuBadge = _interopRequireDefault(require("../zhn-atoms/MenuBadge"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose2"));

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

var _renderMenuItems = function _renderMenuItems(rowClass, items) {
  if (items === void 0) {
    items = [];
  }

  return items.map(function (item, index) {
    var _className = rowClass ? rowClass + ' ' + CL.NOT_SELECTED : index % 2 ? CL.ROW_EVEN : CL.ROW_ODD,
        menuBadge = item.counter !== 0 ? _react["default"].createElement(_MenuBadge["default"], {
      counter: item.counter,
      isOpen: item.isOpen,
      onBadgeOpen: item.onBadgeOpen,
      onBadgeClose: item.onBadgeClose
    }) : null;

    return _react["default"].createElement("div", {
      key: index,
      tabIndex: 0,
      className: _className,
      onClick: item.onClick //onKeyPress={item.onClick}

    }, item.title, menuBadge);
  });
};

var MenuPart = function MenuPart(_ref) {
  var rowClass = _ref.rowClass,
      caption = _ref.caption,
      items = _ref.items,
      isInitClose = _ref.isInitClose;
  return _react["default"].createElement(_OpenClose["default"], {
    styleCaptionRow: S.CAPTION_ROW,
    fillOpen: FILL_OPEN,
    fillClose: FILL_CLOSE,
    caption: caption,
    isClose: isInitClose
  }, _renderMenuItems(rowClass, items));
};
/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/


var _default = MenuPart;
exports["default"] = _default;
//# sourceMappingURL=MenuPart.js.map