"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useRefInit = crValue => {
  const ref = (0, _uiApi.useRef)(null);
  if (ref.current === null) {
    ref.current = crValue();
  }
  return [ref.current, ref];
};
var _default = exports.default = useRefInit;
//# sourceMappingURL=useRefInit.js.map