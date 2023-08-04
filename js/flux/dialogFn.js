"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.setDialogItems = exports.getDataConf = void 0;
var _DataWL = _interopRequireDefault(require("../constants/DataWL"));
const _routeDialog = Object.create(null);
_routeDialog.WL = _DataWL.default;
const setDialogItems = (browserType, items) => {
  _routeDialog[browserType] = items;
};
exports.setDialogItems = setDialogItems;
const getDataConf = dialogType => {
  const dataId = dialogType.split('_')[0];
  return _routeDialog[dataId][dialogType];
};
exports.getDataConf = getDataConf;
//# sourceMappingURL=dialogFn.js.map