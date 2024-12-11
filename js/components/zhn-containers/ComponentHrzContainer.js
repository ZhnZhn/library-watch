"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _itemStore = require("../../flux/itemStore");
var _jsxRuntime = require("react/jsx-runtime");
const CL = "hrz-container";
const ComponentHrzContainer = () => {
  const [comps, setComps] = (0, _uiApi.useState)([]);
  (0, _itemStore.useMsItem)(msItem => {
    if (msItem && msItem.Comp) {
      setComps(prevComps => [msItem.Comp, ...prevComps]);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: CL,
    children: comps
  });
};
var _default = exports.default = ComponentHrzContainer;
//# sourceMappingURL=ComponentHrzContainer.js.map