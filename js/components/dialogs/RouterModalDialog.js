'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _RouterModalDialog;

var _Type = require('../../constants/Type');

var _AlertDialog = require('./AlertDialog');

var _AlertDialog2 = _interopRequireDefault(_AlertDialog);

var _InfoDialog = require('./InfoDialog');

var _InfoDialog2 = _interopRequireDefault(_InfoDialog);

var _LoadFileDialog = require('./LoadFileDialog');

var _LoadFileDialog2 = _interopRequireDefault(_LoadFileDialog);

var _AddToWatchDialog = require('../browser-watch/AddToWatchDialog');

var _AddToWatchDialog2 = _interopRequireDefault(_AddToWatchDialog);

var _LoadItemDialog = require('../browser-watch/LoadItemDialog');

var _LoadItemDialog2 = _interopRequireDefault(_LoadItemDialog);

var _EditGroupDialog = require('../browser-watch/EditGroupDialog');

var _EditGroupDialog2 = _interopRequireDefault(_EditGroupDialog);

var _EditListDialog = require('../browser-watch/EditListDialog');

var _EditListDialog2 = _interopRequireDefault(_EditListDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterModalDialog = (_RouterModalDialog = {}, (0, _defineProperty3.default)(_RouterModalDialog, _Type.ModalDialog.ALERT, _AlertDialog2.default), (0, _defineProperty3.default)(_RouterModalDialog, _Type.ModalDialog.INFO, _InfoDialog2.default), (0, _defineProperty3.default)(_RouterModalDialog, _Type.ModalDialog.LOAD_FILE, _LoadFileDialog2.default), (0, _defineProperty3.default)(_RouterModalDialog, _Type.ModalDialog.ADD_ITEM, _AddToWatchDialog2.default), (0, _defineProperty3.default)(_RouterModalDialog, _Type.ModalDialog.LOAD_WATCH_ITEM, _LoadItemDialog2.default), (0, _defineProperty3.default)(_RouterModalDialog, _Type.ModalDialog.EDIT_WATCH_GROUP, _EditGroupDialog2.default), (0, _defineProperty3.default)(_RouterModalDialog, _Type.ModalDialog.EDIT_WATCH_LIST, _EditListDialog2.default), _RouterModalDialog);

exports.default = RouterModalDialog;
//# sourceMappingURL=RouterModalDialog.js.map