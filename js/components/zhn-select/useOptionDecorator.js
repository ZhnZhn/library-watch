"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _CL = require("./CL");
var _helperFns = require("./helperFns");
/*eslint-disable react-hooks/exhaustive-deps */
var useOptionDecorator = function useOptionDecorator(refIndexNode, getActiveItemElement) {
  return (0, _uiApi.useMemo)(function () {
    return [
    //decorateElement
    function (element) {
      if (element) {
        element.classList.add(_CL.CL_OPTIONS_ROW_ACTIVE);
        var dataIndex = (0, _helperFns.getDataIndex)(element),
          _indexElement = (0, _uiApi.getRefValue)(refIndexNode);
        if (_indexElement && (0, _helperFns.isNumber)(dataIndex)) {
          _indexElement.textContent = dataIndex + 1;
        }
      }
    },
    //undecorateElement
    function (element) {
      var _element = element || getActiveItemElement();
      if (_element) {
        _element.classList.remove(_CL.CL_OPTIONS_ROW_ACTIVE);
      }
    }];
  }, []);
};
//refIndexNode, getActiveItemElement
/*eslint-enable react-hooks/exhaustive-deps */
var _default = useOptionDecorator;
exports["default"] = _default;
//# sourceMappingURL=useOptionDecorator.js.map