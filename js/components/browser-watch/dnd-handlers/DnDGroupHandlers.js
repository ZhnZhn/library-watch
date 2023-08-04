"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.hDropGroup = exports.hDragStartGroup = exports.hDragOverGroup = exports.hDragLeaveGroup = exports.hDragEnterGroup = void 0;
var _watchListStore = require("../../../flux/watch-list/watchListStore");
var _WatchDnDConfig = _interopRequireDefault(require("../WatchDnDConfig"));
var _getTransferData = _interopRequireDefault(require("./getTransferData"));
var _DnDStyleHandlers = require("./DnDStyleHandlers");
var _DnDHandlers = require("./DnDHandlers");
const _crGroupId = _ref => {
  let {
    caption
  } = _ref;
  return caption + ";";
};
const hDragStartGroup = (0, _DnDHandlers.fDragStart)([_WatchDnDConfig.default.GROUP], _crGroupId);
exports.hDragStartGroup = hDragStartGroup;
const hDropGroup = (
//{ caption },
options, evt) => {
  (0, _DnDStyleHandlers.dropWithDnDStyle)(evt);
  const {
      xType,
      dragId
    } = (0, _getTransferData.default)(evt),
    dropId = _crGroupId(options);
  if (xType === _WatchDnDConfig.default.GROUP) {
    if (dragId === dropId) {
      return;
    } else {
      evt.preventDefault();
      (0, _watchListStore.ddGroup)({
        dragId,
        dropId
      });
    }
  } else if (xType === _WatchDnDConfig.default.LIST) {
    evt.preventDefault();
    (0, _watchListStore.ddList)({
      dragId,
      dropId
    });
  }
};
exports.hDropGroup = hDropGroup;
const hDragEnterGroup = (0, _DnDHandlers.fDragEnter)(_WatchDnDConfig.default.GROUP, _WatchDnDConfig.default.C_GROUP_ENTER);
exports.hDragEnterGroup = hDragEnterGroup;
const hDragOverGroup = _DnDHandlers.hDragOver;
exports.hDragOverGroup = hDragOverGroup;
const hDragLeaveGroup = _DnDHandlers.hDragLeave;
exports.hDragLeaveGroup = hDragLeaveGroup;
//# sourceMappingURL=DnDGroupHandlers.js.map