"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useProperty2 = _interopRequireDefault(require("../hooks/useProperty"));
var _useOptionDecorator2 = _interopRequireDefault(require("./useOptionDecorator"));
var _getItemLength = function _getItemLength(element) {
  return (element.children || {}).length;
};

/*eslint-disable react-hooks/exhaustive-deps */
var useStepHandlers = function useStepHandlers() {
  var refOptionsElement = (0, _uiApi.useRef)(),
    refIndexElement = (0, _uiApi.useRef)(),
    _useProperty = (0, _useProperty2["default"])(0),
    setActiveIndexOption = _useProperty[0],
    getActiveIndexOption = _useProperty[1],
    getActiveElement = (0, _uiApi.useMemo)(function () {
      return function () {
        return (((0, _uiApi.getRefValue)(refOptionsElement) || {}).childNodes || [])[getActiveIndexOption()];
      };
    }, []),
    _useOptionDecorator = (0, _useOptionDecorator2["default"])(refIndexElement, getActiveElement),
    decorateActiveElement = _useOptionDecorator[0],
    undecorateActiveElement = _useOptionDecorator[1];
  return [refOptionsElement, refIndexElement, setActiveIndexOption, getActiveIndexOption, getActiveElement, decorateActiveElement, undecorateActiveElement].concat((0, _uiApi.useMemo)(function () {
    return [
    //stepDownOption
    function () {
      var prevComp = getActiveElement();
      if (prevComp) {
        undecorateActiveElement(prevComp);
        var _optionsElement = (0, _uiApi.getRefValue)(refOptionsElement);
        setActiveIndexOption(getActiveIndexOption() + 1);
        if (getActiveIndexOption() >= _getItemLength(_optionsElement)) {
          setActiveIndexOption(0);
          _optionsElement.scrollTop = 0;
        }
        var nextComp = getActiveElement();
        decorateActiveElement(nextComp);
        var offsetTop = nextComp.offsetTop,
          scrollTop = _optionsElement.scrollTop;
        if (offsetTop - scrollTop > 70) {
          _optionsElement.scrollTop += offsetTop - scrollTop - 70;
        }
      }
    },
    //stepUpOption
    function () {
      var prevComp = getActiveElement();
      if (prevComp) {
        undecorateActiveElement(prevComp);
        var _optionsElement = (0, _uiApi.getRefValue)(refOptionsElement);
        setActiveIndexOption(getActiveIndexOption() - 1);
        if (getActiveIndexOption() < 0) {
          setActiveIndexOption(_getItemLength(_optionsElement) - 1);
          var bottomComp = getActiveElement();
          _optionsElement.scrollTop = bottomComp.offsetTop;
        }
        var nextComp = getActiveElement();
        decorateActiveElement(nextComp);
        var offsetTop = nextComp.offsetTop,
          scrollTop = _optionsElement.scrollTop;
        if (offsetTop - scrollTop < 70) {
          _optionsElement.scrollTop -= 70 - (offsetTop - scrollTop);
        }
      }
    }];
  }, []));
};
// getActiveIndexOption, setActiveIndexOption, getActiveItemElement,
// decorateActiveElement, undecorateActiveElement,
/*eslint-enable react-hooks/exhaustive-deps */
var _default = useStepHandlers;
exports["default"] = _default;
//# sourceMappingURL=useStepHandlers.js.map