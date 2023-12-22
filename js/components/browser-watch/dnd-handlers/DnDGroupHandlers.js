"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.hDropGroup = exports.hDragStartGroup = exports.crDnDGroupHandlers = void 0;
var _watchListStore = require("../../../flux/watch-list/watchListStore");
var _uiApi = require("../../uiApi");
var _WatchDnDConfig = _interopRequireDefault(require("../WatchDnDConfig"));
var _getTransferData = _interopRequireDefault(require("./getTransferData"));
var _DnDStyleHandlers = require("./DnDStyleHandlers");
var _DnDHandlers = require("./DnDHandlers");
var _crDnDHandlers = _interopRequireDefault(require("./crDnDHandlers"));
const _crGroupId = _ref => {
  let {
    caption
  } = _ref;
  return `${caption};`;
};
const hDragStartGroup = exports.hDragStartGroup = (0, _DnDHandlers.fDragStart)([_WatchDnDConfig.default.GROUP], _crGroupId);
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
const crDnDGroupHandlers = exports.crDnDGroupHandlers = (0, _uiApi.bindTo)(_crDnDHandlers.default, hDragStartGroup, hDropGroup, hDragEnterGroup, _DnDHandlers.hDragOver, _DnDHandlers.hDragLeave);
//# sourceMappingURL=DnDGroupHandlers.js.map