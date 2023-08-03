"use strict";

exports.__esModule = true;
exports.useMsAbout = exports.useMdOption = exports.showModalDialog = exports.showInfo = exports.showAlert = exports.showAbout = void 0;
var _storeApi = require("./storeApi");
var _Type = require("../constants/Type");
const _crStore = () => ({
    msAbout: {
      is: true
    },
    mdOption: void 0
  }),
  _compStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectMsAbout = state => state.msAbout,
  _selectMdOption = state => state.mdOption,
  _set = _compStore.setState;
const useMsAbout = (0, _storeApi.fCrUse)(_compStore, _selectMsAbout);
exports.useMsAbout = useMsAbout;
const showAbout = () => _set({
  msAbout: {
    is: true
  }
});
exports.showAbout = showAbout;
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
const showAlert = showModalDialog.bind(null, _Type.ModalDialog.ALERT);
exports.showAlert = showAlert;
const showInfo = showModalDialog.bind(null, _Type.ModalDialog.INFO);
exports.showInfo = showInfo;
//# sourceMappingURL=compStore.js.map