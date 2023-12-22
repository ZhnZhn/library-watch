"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _Handlers = require("./Handlers");
var _DnDItemHandlers = require("./dnd-handlers/DnDItemHandlers");
var _WatchItem = _interopRequireDefault(require("./WatchItem"));
var _jsxRuntime = require("react/jsx-runtime");
const _isArr = Array.isArray,
  CL_WATCH_ITEM = (0, _styleFn.crClNotSelected)('row__topic');
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
      };
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchItem.default, {
      className: CL_WATCH_ITEM,
      isModeEdit: isModeEdit,
      item: item,
      onClick: (0, _uiApi.bindTo)(_Handlers.showDialogWatchItem, item),
      onClose: (0, _uiApi.bindTo)(_Handlers.removeWatchItem, option),
      dndItemHandlers: (0, _DnDItemHandlers.crDnDItemHandlers)(isModeEdit, option)
    }, caption);
  }) : null;
};
var _default = exports.default = WatchItems;
//# sourceMappingURL=WatchItems.js.map