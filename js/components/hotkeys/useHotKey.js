"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _hmHotkeys = require("./hm-hotkeys");
const useHotKey = (hotKey, onKeyDown) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => _hmHotkeys.HAS_HOT_KEYS && hotKey ? ((0, _hmHotkeys.addHotKey)(hotKey, onKeyDown), () => (0, _hmHotkeys.removeHotKey)(hotKey, onKeyDown)) : void 0, []);
  //hotKey, onKeyDown
  /*eslint-disable react-hooks/exhaustive-deps */
};
var _default = exports.default = useHotKey;
//# sourceMappingURL=useHotKey.js.map