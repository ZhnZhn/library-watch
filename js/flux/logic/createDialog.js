"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));
var _itemStore = require("../itemStore");
var _jsxRuntime = require("react/jsx-runtime");
const createDialog = (conf, browserType) => {
  const dialogType = conf.type,
    Comp = conf.dialogType ? _RouterDialog.default[conf.dialogType] || _RouterDialog.default.DEFAULT : _RouterDialog.default.DEFAULT;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, {
    caption: conf.dialogCaption,
    optionURI: conf.optionURI,
    optionsJsonProp: conf.optionsJsonProp,
    onLoad: _itemStore.loadItem.bind(null, dialogType, browserType),
    onShow: _itemStore.showChart.bind(null, dialogType, browserType),
    ...conf.dialogProps
  }, dialogType);
};
var _default = createDialog;
exports.default = _default;
//# sourceMappingURL=createDialog.js.map