"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsAbout = exports.useMdOption = exports.useDgOption = exports.showModalDialog = exports.showInfo = exports.showDialog = exports.showAlert = exports.showAddItem = exports.showAbout = void 0;
var _storeApi = require("./storeApi");
var _Type = require("../constants/Type");
var _createDialog = _interopRequireDefault(require("./logic/createDialog"));
var _dialogFn = require("./dialogFn");
const _crStore = () => ({
    msAbout: {
      is: true
    },
    dgOption: void 0,
    mdOption: void 0
  }),
  _compStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectMsAbout = state => state.msAbout,
  _selectDgOption = state => state.dgOption,
  _selectMdOption = state => state.mdOption,
  [_set] = (0, _storeApi.getStoreApi)(_compStore);
const useMsAbout = (0, _storeApi.fCrUse)(_compStore, _selectMsAbout);
exports.useMsAbout = useMsAbout;
const showAbout = () => _set({
  msAbout: {
    is: true
  }
});
exports.showAbout = showAbout;
const useDgOption = (0, _storeApi.fCrUse)(_compStore, _selectDgOption);
exports.useDgOption = useDgOption;
const _hmDialog = Object.create(null);
const showDialog = (dialogType, browserType) => {
  if (_hmDialog[dialogType]) {
    _set({
      dgOption: {
        dialogType
      }
    });
  } else {
    _hmDialog[dialogType] = true;
    const dialogComp = (0, _createDialog.default)((0, _dialogFn.getDataConf)(dialogType), browserType);
    _set({
      dgOption: {
        dialogType,
        dialogComp
      }
    });
  }
};
exports.showDialog = showDialog;
const useMdOption = (0, _storeApi.fCrUse)(_compStore, _selectMdOption);
exports.useMdOption = useMdOption;
const showModalDialog = function (modalDialogType, option) {
  if (option === void 0) {
    option = {};
  }
  option.modalDialogType = modalDialogType;
  _set({
    mdOption: option
  });
};
exports.showModalDialog = showModalDialog;
const showAddItem = (0, _storeApi.bindTo)(showModalDialog, _Type.ModalDialog.ADD_ITEM);
exports.showAddItem = showAddItem;
const showAlert = (0, _storeApi.bindTo)(showModalDialog, _Type.ModalDialog.ALERT);
exports.showAlert = showAlert;
const showInfo = (0, _storeApi.bindTo)(showModalDialog, _Type.ModalDialog.INFO);
exports.showInfo = showInfo;
//# sourceMappingURL=compStore.js.map