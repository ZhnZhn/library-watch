"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
var _CL = require("./CL");
var _helperFns = require("./helperFns");
/*eslint-disable react-hooks/exhaustive-deps */
const useOptionDecorator = (refIndexNode, getActiveItemElement) => (0, _uiApi.useMemo)(() => [
//decorateElement
element => {
  if (element) {
    element.classList.add(_CL.CL_OPTIONS_ROW_ACTIVE);
    const dataIndex = (0, _helperFns.getDataIndex)(element),
      _indexElement = (0, _uiApi.getRefValue)(refIndexNode);
    if (_indexElement && (0, _isTypeFn.isNumber)(dataIndex)) {
      _indexElement.textContent = dataIndex + 1;
    }
  }
},
//undecorateElement
element => {
  const _element = element || getActiveItemElement();
  if (_element) {
    _element.classList.remove(_CL.CL_OPTIONS_ROW_ACTIVE);
  }
}], []);
//refIndexNode, getActiveItemElement
/*eslint-enable react-hooks/exhaustive-deps */
var _default = exports.default = useOptionDecorator;
//# sourceMappingURL=useOptionDecorator.js.map