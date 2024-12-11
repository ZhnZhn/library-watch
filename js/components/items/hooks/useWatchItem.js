"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _crItemWatch = _interopRequireDefault(require("./crItemWatch"));
const useWatchItem = (onWatchItem, props, itemDescription, crCaption) => (0, _uiApi.useCallback)(() => {
  onWatchItem((0, _crItemWatch.default)(props, itemDescription, crCaption));
  //eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
var _default = exports.default = useWatchItem;
//# sourceMappingURL=useWatchItem.js.map