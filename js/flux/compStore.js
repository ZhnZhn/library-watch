"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsAbout = exports.useMdOption = exports.useDgOption = exports.showModalDialog = exports.showInfo = exports.showDialog = exports.showAlert = exports.showAddItem = exports.showAbout = void 0;
var _storeApi = require("./storeApi");
var _Type = require("../constants/Type");
var _createDialog = _interopRequireDefault(require("./logic/createDialog"));
var _dialogFn = require("./dialogFn");
const [_crMsAbout, _selectMsAbout] = (0, _storeApi.fCrStoreSlice)("msAbout", "is"),
  [_crDgOption, _selectDgOption] = (0, _storeApi.fCrStoreSlice)("dgOption"),
  [_crMdOption, _selectMdOption] = (0, _storeApi.fCrStoreSlice)("mdOption");
const _crStore = () => ({
    ..._crMsAbout(true),
    ..._crDgOption(),
    ..._crMdOption()
  }),
  _compStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  [_set] = (0, _storeApi.getStoreApi)(_compStore);
const useMsAbout = exports.useMsAbout = (0, _storeApi.fCrUse)(_compStore, _selectMsAbout);
const showAbout = () => _set(_crMsAbout(true));
exports.showAbout = showAbout;
const useDgOption = exports.useDgOption = (0, _storeApi.fCrUse)(_compStore, _selectDgOption);
const _hmDialog = Object.create(null);
const showDialog = (dialogType, browserType) => {
  if (_hmDialog[dialogType]) {
    _set(_crDgOption({
      dialogType
    }));
  } else {
    _hmDialog[dialogType] = true;
    const dialogComp = (0, _createDialog.default)((0, _dialogFn.getDataConf)(dialogType), browserType);
    _set(_crDgOption({
      dialogType,
      dialogComp
    }));
  }
};
exports.showDialog = showDialog;
const useMdOption = exports.useMdOption = (0, _storeApi.fCrUse)(_compStore, _selectMdOption);
const showModalDialog = function (modalDialogType, option) {
  if (option === void 0) {
    option = {};
  }
  option.modalDialogType = modalDialogType;
  _set(_crMdOption({
    ...option
  }));
};
exports.showModalDialog = showModalDialog;
const showAddItem = exports.showAddItem = (0, _storeApi.bindTo)(showModalDialog, _Type.ModalDialog.ADD_ITEM);
const showAlert = exports.showAlert = (0, _storeApi.bindTo)(showModalDialog, _Type.ModalDialog.ALERT);
const showInfo = exports.showInfo = (0, _storeApi.bindTo)(showModalDialog, _Type.ModalDialog.INFO);
//# sourceMappingURL=compStore.js.map