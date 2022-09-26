"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Handlers = require("./Handlers");

var _DnDItemHandlers = require("./dnd-handlers/DnDItemHandlers");

var _WatchItem = _interopRequireDefault(require("./WatchItem"));

var _jsxRuntime = require("react/jsx-runtime");

var _isArr = Array.isArray,
    CL_WATCH_ITEM = 'row__topic not-selected';

var WatchItems = function WatchItems(_ref) {
  var isModeEdit = _ref.isModeEdit,
      items = _ref.items,
      groupCaption = _ref.groupCaption,
      listCaption = _ref.listCaption;
  return _isArr(items) ? items.map(function (item, index) {
    var caption = item.caption;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchItem["default"], {
      className: CL_WATCH_ITEM,
      isModeEdit: isModeEdit,
      item: item,
      option: {
        groupCaption: groupCaption,
        listCaption: listCaption,
        caption: caption
      },
      onClick: _Handlers.showDialogWatchItem,
      onClose: _Handlers.removeWatchItem,
      onDragStart: _DnDItemHandlers.hDragStartItem,
      onDragOver: _DnDItemHandlers.hDragOverItem,
      onDragEnter: _DnDItemHandlers.hDragEnterItem,
      onDragLeave: _DnDItemHandlers.hDragLeaveItem,
      onDrop: _DnDItemHandlers.hDropItem
    }, caption);
  }) : null;
};

var _default = WatchItems;
exports["default"] = _default;
//# sourceMappingURL=WatchItems.js.map