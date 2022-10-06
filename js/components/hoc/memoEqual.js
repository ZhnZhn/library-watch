"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var DF_IS_NOT_REQUIRE_RERENDER = function DF_IS_NOT_REQUIRE_RERENDER() {
  return true;
};

var memoEqual = function memoEqual(Element, isNotRequireRerender) {
  if (isNotRequireRerender === void 0) {
    isNotRequireRerender = DF_IS_NOT_REQUIRE_RERENDER;
  }

  return (0, _uiApi.memo)(Element, isNotRequireRerender);
};

var _default = memoEqual;
exports["default"] = _default;
//# sourceMappingURL=memoEqual.js.map