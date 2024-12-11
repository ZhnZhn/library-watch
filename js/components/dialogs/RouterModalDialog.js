"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Type = require("../../constants/Type");
var _AlertDialog = _interopRequireDefault(require("./AlertDialog"));
var _InfoDialog = _interopRequireDefault(require("./InfoDialog"));
var _LoadFileDialog = _interopRequireDefault(require("./LoadFileDialog"));
var _AddToWatchDialog = _interopRequireDefault(require("../browser-watch/AddToWatchDialog"));
var _LoadItemDialog = _interopRequireDefault(require("../browser-watch/LoadItemDialog"));
var _EditGroupDialog = _interopRequireDefault(require("../browser-watch/EditGroupDialog"));
var _EditListDialog = _interopRequireDefault(require("../browser-watch/EditListDialog"));
const RouterModalDialog = {
  [_Type.ModalDialog.ALERT]: _AlertDialog.default,
  [_Type.ModalDialog.INFO]: _InfoDialog.default,
  [_Type.ModalDialog.LOAD_FILE]: _LoadFileDialog.default,
  [_Type.ModalDialog.ADD_ITEM]: _AddToWatchDialog.default,
  [_Type.ModalDialog.LOAD_WATCH_ITEM]: _LoadItemDialog.default,
  [_Type.ModalDialog.EDIT_WATCH_GROUP]: _EditGroupDialog.default,
  [_Type.ModalDialog.EDIT_WATCH_LIST]: _EditListDialog.default
};
var _default = exports.default = RouterModalDialog;
//# sourceMappingURL=RouterModalDialog.js.map