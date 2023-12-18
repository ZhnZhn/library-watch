"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useBrowserMenu = (isShow, menu) => {
  const refFirstItem = (0, _uiApi.useRef)();
  (0, _uiApi.useEffect)(() => {
    if (menu && isShow) {
      (0, _uiApi.focusRefElement)(refFirstItem);
    }
  }, [isShow, menu]);
  return refFirstItem;
};
var _default = exports.default = useBrowserMenu;
//# sourceMappingURL=useBrowserMenu.js.map