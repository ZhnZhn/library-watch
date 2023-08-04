"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.hDropList = exports.hDragStartList = exports.hDragOverList = exports.hDragLeaveList = exports.hDragEnterList = void 0;
var _watchListStore = require("../../../flux/watch-list/watchListStore");
var _WatchDnDConfig = _interopRequireDefault(require("../WatchDnDConfig"));
var _getTransferData = _interopRequireDefault(require("./getTransferData"));
var _DnDStyleHandlers = require("./DnDStyleHandlers");
var _DnDHandlers = require("./DnDHandlers");
const _crListId = _ref => {
  let {
    groupCaption,
    caption
  } = _ref;
  return groupCaption + ";" + caption + ";";
};
const hDragStartList = (0, _DnDHandlers.fDragStart)([_WatchDnDConfig.default.LIST, _WatchDnDConfig.default.GROUP], _crListId);
exports.hDragStartList = hDragStartList;
const hDropList = (
//{groupCaption, caption},
options, evt) => {
  (0, _DnDStyleHandlers.dropWithDnDStyle)(evt);
  const {
      xType,
      dragId
    } = (0, _getTransferData.default)(evt),
    dropId = _crListId(options);
  if (xType === _WatchDnDConfig.default.LIST) {
    if (dragId === dropId) {
      return;
    } else {
      evt.preventDefault();
      (0, _watchListStore.ddList)({
        dragId,
        dropId
      });
    }
  } else if (xType === _WatchDnDConfig.default.ITEM) {
    evt.preventDefault();
    (0, _watchListStore.ddItem)({
      dragId,
      dropId
    });
  }
};
exports.hDropList = hDropList;
const hDragEnterList = (0, _DnDHandlers.fDragEnter)(_WatchDnDConfig.default.LIST, _WatchDnDConfig.default.C_LIST_ENTER);
exports.hDragEnterList = hDragEnterList;
const hDragOverList = _DnDHandlers.hDragOver;
exports.hDragOverList = hDragOverList;
const hDragLeaveList = _DnDHandlers.hDragLeave;
exports.hDragLeaveList = hDragLeaveList;
//# sourceMappingURL=DnDListHandlers.js.map