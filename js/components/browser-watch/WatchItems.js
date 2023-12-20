"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _Handlers = require("./Handlers");
var _DnDItemHandlers = require("./dnd-handlers/DnDItemHandlers");
var _WatchItem = _interopRequireDefault(require("./WatchItem"));
var _jsxRuntime = require("react/jsx-runtime");
const _isArr = Array.isArray,
  CL_WATCH_ITEM = 'row__topic not-selected';
const WatchItems = _ref => {
  let {
    isModeEdit,
    items,
    groupCaption,
    listCaption
  } = _ref;
  return _isArr(items) ? items.map(item => {
    const {
        caption
      } = item,
      option = {
        groupCaption,
        listCaption,
        caption
      },
      ddItemHandlers = isModeEdit ? {
        onDragStart: (0, _uiApi.bindTo)(_DnDItemHandlers.hDragStartItem, option),
        onDrop: (0, _uiApi.bindTo)(_DnDItemHandlers.hDropItem, option),
        onDragOver: _DnDItemHandlers.hDragOverItem,
        onDragEnter: _DnDItemHandlers.hDragEnterItem,
        onDragLeave: _DnDItemHandlers.hDragLeaveItem
      } : void 0;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchItem.default, {
      className: CL_WATCH_ITEM,
      item: item,
      isModeEdit: isModeEdit,
      onClick: (0, _uiApi.bindTo)(_Handlers.showDialogWatchItem, item),
      onClose: (0, _uiApi.bindTo)(_Handlers.removeWatchItem, option),
      ddItemHandlers: ddItemHandlers
    }, caption);
  }) : null;
};
var _default = exports.default = WatchItems;
//# sourceMappingURL=WatchItems.js.map