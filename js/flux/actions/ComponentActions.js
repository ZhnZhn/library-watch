"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ComponentActions = exports.CAT_SHOW_MODAL_DIALOG = exports.CAT_SHOW_DIALOG = exports.CAT_INIT_AND_SHOW_DIALOG = exports.CAT_CLOSE_COMP_ITEM_LIST = exports.CAT_CLOSE_CHART_CONTAINER = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _Type = require("../../constants/Type");
const CAT_INIT_AND_SHOW_DIALOG = 'initAndShowDialog';
exports.CAT_INIT_AND_SHOW_DIALOG = CAT_INIT_AND_SHOW_DIALOG;
const CAT_SHOW_DIALOG = 'showDialog';
exports.CAT_SHOW_DIALOG = CAT_SHOW_DIALOG;
const CAT_CLOSE_CHART_CONTAINER = 'closeChartContainer';
exports.CAT_CLOSE_CHART_CONTAINER = CAT_CLOSE_CHART_CONTAINER;
const CAT_CLOSE_COMP_ITEM_LIST = 'closeCompItemList';
exports.CAT_CLOSE_COMP_ITEM_LIST = CAT_CLOSE_COMP_ITEM_LIST;
const CAT_SHOW_MODAL_DIALOG = 'showModalDialog';
exports.CAT_SHOW_MODAL_DIALOG = CAT_SHOW_MODAL_DIALOG;
const _ComponentActions = _refluxCore.default.createActions({
  [CAT_INIT_AND_SHOW_DIALOG]: {},
  [CAT_SHOW_DIALOG]: {},
  [CAT_CLOSE_CHART_CONTAINER]: {},
  [CAT_CLOSE_COMP_ITEM_LIST]: {},
  [CAT_SHOW_MODAL_DIALOG]: {}
});
_ComponentActions.showAlert = _ComponentActions.showModalDialog.bind(null, _Type.ModalDialog.ALERT);
const ComponentActions = _ComponentActions;
exports.ComponentActions = ComponentActions;
//# sourceMappingURL=ComponentActions.js.map