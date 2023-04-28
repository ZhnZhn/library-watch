"use strict";

exports.__esModule = true;
exports.makeVisibleActiveRowComp = exports.isNumber = exports.getDataIndex = exports.crOnEnterItem = exports.crFooterIndex = void 0;
var isNumber = function isNumber(n) {
  return typeof n === 'number' && n - n === 0;
};
exports.isNumber = isNumber;
var getDataIndex = function getDataIndex(element) {
  var dataset = element.dataset,
    _ref = dataset || {},
    index = _ref.index;
  return Number(index);
};
exports.getDataIndex = getDataIndex;
var crOnEnterItem = function crOnEnterItem(item, propCaption, isWithInput) {
  var _ref2;
  return item.value !== 'noresult' ? item : isWithInput ? (_ref2 = {}, _ref2[propCaption] = 'From Input', _ref2.value = item.inputValue, _ref2) : void 0;
};
exports.crOnEnterItem = crOnEnterItem;
var crFooterIndex = function crFooterIndex(options, initialOptions) {
  return [options[0] && options[0].value !== 'noresult' ? options.length : 0, initialOptions ? initialOptions.length : 0];
};
exports.crFooterIndex = crFooterIndex;
var makeVisibleActiveRowComp = function makeVisibleActiveRowComp(comp) {
  if (comp) {
    var offsetTop = comp.offsetTop,
      optionsElement = comp.parentElement,
      scrollTop = optionsElement.scrollTop;
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