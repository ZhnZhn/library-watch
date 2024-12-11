"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const usePrevValue = value => {
  const _ref = (0, _uiApi.useRef)(),
    {
      current
    } = _ref;
  _ref.current = value;
  return current;
};
var _default = exports.default = usePrevValue;
//# sourceMappingURL=usePrevValue.js.map