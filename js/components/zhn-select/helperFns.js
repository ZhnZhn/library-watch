"use strict";

exports.__esModule = true;
exports.makeVisibleActiveRowComp = exports.getDataIndex = exports.crOnEnterItem = exports.crFooterIndex = void 0;
const getDataIndex = element => {
  const {
      dataset
    } = element,
    {
      index
    } = dataset || {};
  return Number(index);
};
exports.getDataIndex = getDataIndex;
const crOnEnterItem = (item, propCaption, isWithInput) => item.value !== 'noresult' ? item : isWithInput ? {
  [propCaption]: 'From Input',
  value: item.inputValue
} : void 0;
exports.crOnEnterItem = crOnEnterItem;
const crFooterIndex = (options, initialOptions) => [options[0] && options[0].value !== 'noresult' ? options.length : 0, initialOptions ? initialOptions.length : 0];
exports.crFooterIndex = crFooterIndex;
const makeVisibleActiveRowComp = comp => {
  if (comp) {
    const {
        offsetTop
      } = comp,
      optionsElement = comp.parentElement,
      {
        scrollTop
      } = optionsElement;
    if (offsetTop - scrollTop > 70) {
      optionsElement.scrollTop += offsetTop - scrollTop - 70;
    }
    if (offsetTop - scrollTop < 0) {
      optionsElement.scrollTop = 0;
    }
  }
};
exports.makeVisibleActiveRowComp = makeVisibleActiveRowComp;
//# sourceMappingURL=helperFns.js.map