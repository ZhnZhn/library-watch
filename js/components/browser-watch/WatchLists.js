"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _DnDListHandlers = require("./dnd-handlers/DnDListHandlers");

var _Comp = _interopRequireDefault(require("../Comp"));

var _WatchItems = _interopRequireDefault(require("./WatchItems"));

var _jsxRuntime = require("react/jsx-runtime");

var OpenClose2 = _Comp["default"].OpenClose2,
    S_LIST_DIV = {
  marginLeft: 8,
  paddingLeft: 12,
  lineHeight: 2,
  borderLeft: '1px solid yellow'
},
    S_ITEM_NOT_SELECTED = {
  marginRight: 10,
  borderBottom: '1px solid rgba(128, 192, 64, 0.6)'
},
    _isArr = Array.isArray;

var WatchLists = function WatchLists(_ref) {
  var isModeEdit = _ref.isModeEdit,
      groupCaption = _ref.groupCaption,
      lists = _ref.lists;
  return _isArr(lists) ? lists.map(function (_ref2) {
    var caption = _ref2.caption,
        items = _ref2.items;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(OpenClose2, {
      fillOpen: "#80c040",
      style: S_LIST_DIV,
      styleNotSelected: S_ITEM_NOT_SELECTED,
      caption: caption,
      isClose: true,
      isDraggable: isModeEdit,
      option: {
        groupCaption: groupCaption,
        caption: caption
      },
      onDragStart: _DnDListHandlers.hDragStartList,
      onDragEnter: _DnDListHandlers.hDragEnterList,
      onDragOver: _DnDListHandlers.hDragOverList,
      onDragLeave: _DnDListHandlers.hDragLeaveList,
      onDrop: _DnDListHandlers.hDropList,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchItems["default"], {
        isModeEdit: isModeEdit,
        items: items,
        groupCaption: groupCaption,
        listCaption: caption
      })
    }, caption);
  }) : null;
};

var _default = WatchLists;
exports["default"] = _default;
//# sourceMappingURL=WatchLists.js.map