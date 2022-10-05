"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ComponentActions = require("../actions/ComponentActions");

var _createDialog = _interopRequireDefault(require("../logic/createDialog"));

var ComponentSlice = {
  dialogInit: {},
  onShowAbout: function onShowAbout() {
    this.trigger(_ComponentActions.CAT_SHOW_ABOUT);
  },
  onShowDialog: function onShowDialog(dialogType, browserType) {
    if (this.dialogInit[dialogType]) {
      this.trigger(_ComponentActions.CAT_SHOW_DIALOG, dialogType);
    } else {
      this.dialogInit[dialogType] = true;
      var dialogComp = (0, _createDialog["default"])(this.getSourceConfig(browserType, dialogType), //this.getDataConf(dialogType),
      browserType);
      this.trigger(_ComponentActions.CAT_INIT_AND_SHOW_DIALOG, {
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
    this.trigger(_ComponentActions.CAT_SHOW_MODAL_DIALOG, option);
  }
};
var _default = ComponentSlice;
exports["default"] = _default;
//# sourceMappingURL=ComponentSlice.js.map