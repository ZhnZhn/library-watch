"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ComponentActions = require("../actions/ComponentActions");

var _Factory = _interopRequireDefault(require("../logic/Factory"));

var ComponentSlice = {
  dialogInit: {},
  onShowAbout: function onShowAbout() {
    this.trigger(_ComponentActions.ComponentActionTypes.SHOW_ABOUT);
  },
  onShowDialog: function onShowDialog(dialogType, browserType) {
    if (this.dialogInit[dialogType]) {
      this.trigger(_ComponentActions.ComponentActionTypes.SHOW_DIALOG, dialogType);
    } else {
      this.dialogInit[dialogType] = true;

      var dialogComp = _Factory["default"].createDialog(dialogType, browserType);

      this.trigger(_ComponentActions.ComponentActionTypes.INIT_AND_SHOW_DIALOG, {
        dialogType: dialogType,
        dialogComp: dialogComp
      });
    }
  },
  onShowModalDialog: function onShowModalDialog(modalDialogType, option) {
    if (option === void 0) {
      option = {};
    }

    option.modalDialogType = modalDialogType;
    this.trigger(_ComponentActions.ComponentActionTypes.SHOW_MODAL_DIALOG, option);
  }
};
var _default = ComponentSlice;
exports["default"] = _default;
//# sourceMappingURL=ComponentSlice.js.map