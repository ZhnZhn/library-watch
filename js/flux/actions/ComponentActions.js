"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.ComponentActionTypes = void 0;

var _reflux = _interopRequireDefault(require("reflux"));

var _Type = require("../../constants/Type");

var _Reflux$createActions;

var ComponentActionTypes = {
  SHOW_ABOUT: 'showAbout',
  INIT_AND_SHOW_DIALOG: 'initAndShowDialog',
  SHOW_DIALOG: 'showDialog',
  CLOSE_CHART_CONTAINER: 'closeChartContainer',
  CLOSE_CHART_CONTAINER_2: 'closeChartContainer2',
  //SET_ACTIVE_CHECKBOX : 'setActiveCheckbox',
  SHOW_MODAL_DIALOG: 'showModalDialog'
};
exports.ComponentActionTypes = ComponentActionTypes;

var ComponentActions = _reflux["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[ComponentActionTypes.SHOW_ABOUT] = {}, _Reflux$createActions[ComponentActionTypes.INIT_AND_SHOW_DIALOG] = {}, _Reflux$createActions[ComponentActionTypes.SHOW_DIALOG] = {}, _Reflux$createActions[ComponentActionTypes.CLOSE_CHART_CONTAINER] = {}, _Reflux$createActions[ComponentActionTypes.CLOSE_CHART_CONTAINER_2] = {}, _Reflux$createActions[ComponentActionTypes.SHOW_MODAL_DIALOG] = {}, _Reflux$createActions));

ComponentActions.showAlert = ComponentActions.showModalDialog.bind(null, _Type.ModalDialog.ALERT);
var _default = ComponentActions;
exports["default"] = _default;
//# sourceMappingURL=ComponentActions.js.map