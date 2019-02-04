'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentActionTypes = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _Type = require('../../constants/Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentActionTypes = exports.ComponentActionTypes = {
  SHOW_ABOUT: 'showAbout',

  INIT_AND_SHOW_DIALOG: 'initAndShowDialog',
  SHOW_DIALOG: 'showDialog',
  CLOSE_CHART_CONTAINER: 'closeChartContainer',
  CLOSE_CHART_CONTAINER_2: 'closeChartContainer2',
  //SET_ACTIVE_CHECKBOX : 'setActiveCheckbox',

  SHOW_MODAL_DIALOG: 'showModalDialog'
};

var ComponentActions = _reflux2.default.createActions((_Reflux$createActions = {}, (0, _defineProperty3.default)(_Reflux$createActions, ComponentActionTypes.SHOW_ABOUT, {}), (0, _defineProperty3.default)(_Reflux$createActions, ComponentActionTypes.INIT_AND_SHOW_DIALOG, {}), (0, _defineProperty3.default)(_Reflux$createActions, ComponentActionTypes.SHOW_DIALOG, {}), (0, _defineProperty3.default)(_Reflux$createActions, ComponentActionTypes.CLOSE_CHART_CONTAINER, {}), (0, _defineProperty3.default)(_Reflux$createActions, ComponentActionTypes.CLOSE_CHART_CONTAINER_2, {}), (0, _defineProperty3.default)(_Reflux$createActions, ComponentActionTypes.SHOW_MODAL_DIALOG, {}), _Reflux$createActions));
ComponentActions.showAlert = ComponentActions.showModalDialog.bind(null, _Type.ModalDialog.ALERT);

exports.default = ComponentActions;
//# sourceMappingURL=ComponentActions.js.map