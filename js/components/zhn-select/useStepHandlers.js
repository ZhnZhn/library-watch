"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useProperty = _interopRequireDefault(require("../hooks/useProperty"));
var _useOptionDecorator = _interopRequireDefault(require("./useOptionDecorator"));
const _getItemLength = element => (element.children || {}).length;

/*eslint-disable react-hooks/exhaustive-deps */
const useStepHandlers = () => {
  const refOptionsElement = (0, _uiApi.useRef)(),
    refIndexElement = (0, _uiApi.useRef)(),
    [setActiveIndexOption, getActiveIndexOption] = (0, _useProperty.default)(0),
    getActiveElement = (0, _uiApi.useMemo)(() => () => (((0, _uiApi.getRefValue)(refOptionsElement) || {}).childNodes || [])[getActiveIndexOption()], []),
    [decorateActiveElement, undecorateActiveElement] = (0, _useOptionDecorator.default)(refIndexElement, getActiveElement);
  return [refOptionsElement, refIndexElement, setActiveIndexOption, getActiveIndexOption, getActiveElement, decorateActiveElement, undecorateActiveElement, ...(0, _uiApi.useMemo)(() => [
  //stepDownOption
  () => {
    const prevComp = getActiveElement();
    if (prevComp) {
      undecorateActiveElement(prevComp);
      const _optionsElement = (0, _uiApi.getRefValue)(refOptionsElement);
      setActiveIndexOption(getActiveIndexOption() + 1);
      if (getActiveIndexOption() >= _getItemLength(_optionsElement)) {
        setActiveIndexOption(0);
        _optionsElement.scrollTop = 0;
      }
      const nextComp = getActiveElement();
      decorateActiveElement(nextComp);
      const offsetTop = nextComp.offsetTop,
        scrollTop = _optionsElement.scrollTop;
      if (offsetTop - scrollTop > 70) {
        _optionsElement.scrollTop += offsetTop - scrollTop - 70;
      }
    }
  },
  //stepHomeOption
  () => {
    const prevComp = getActiveElement();
    if (prevComp) {
      undecorateActiveElement(prevComp);
      const _optionsElement = (0, _uiApi.getRefValue)(refOptionsElement);
      setActiveIndexOption(0);
      _optionsElement.scrollTop = 0;
      const nextComp = getActiveElement();
      decorateActiveElement(nextComp);
    }
  },
  //stepUpOption
  () => {
    const prevComp = getActiveElement();
    if (prevComp) {
      undecorateActiveElement(prevComp);
      const _optionsElement = (0, _uiApi.getRefValue)(refOptionsElement);
      setActiveIndexOption(getActiveIndexOption() - 1);
      if (getActiveIndexOption() < 0) {
        setActiveIndexOption(_getItemLength(_optionsElement) - 1);
        const bottomComp = getActiveElement();
        _optionsElement.scrollTop = bottomComp.offsetTop;
      }
      const nextComp = getActiveElement();
      decorateActiveElement(nextComp);
      const offsetTop = nextComp.offsetTop,
        scrollTop = _optionsElement.scrollTop;
      if (offsetTop - scrollTop < 70) {
        _optionsElement.scrollTop -= 70 - (offsetTop - scrollTop);
      }
    }
  },
  //stepEndOption
  () => {
    const prevComp = getActiveElement();
    if (prevComp) {
      undecorateActiveElement(prevComp);
      const _optionsElement = (0, _uiApi.getRefValue)(refOptionsElement);
      setActiveIndexOption(_getItemLength(_optionsElement) - 1);
      const bottomComp = getActiveElement();
      _optionsElement.scrollTop = bottomComp.offsetTop;
      const nextComp = getActiveElement();
      decorateActiveElement(nextComp);
    }
  }], [])];
};
// getActiveIndexOption, setActiveIndexOption, getActiveItemElement,
// decorateActiveElement, undecorateActiveElement,
/*eslint-enable react-hooks/exhaustive-deps */
var _default = exports.default = useStepHandlers;
//# sourceMappingURL=useStepHandlers.js.map