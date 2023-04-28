"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _crFilteredOptions = function _crFilteredOptions(options, value, caption) {
  var valueFor = value.toLowerCase();
  return (options || []).filter(function (option) {
    return option[caption].toLowerCase().indexOf(valueFor) !== -1;
  });
};
var INPUT_PREFIX = 'From input:';
var _crItemNotFounded = function _crItemNotFounded(inputValue, propCaption, isWithInput) {
  var _ref;
  var _inputValue = String(inputValue).replace(INPUT_PREFIX, '').trim(),
    _caption = isWithInput ? INPUT_PREFIX + " " + _inputValue : 'No results found';
  return _ref = {}, _ref[propCaption] = _caption, _ref.value = 'noresult', _ref.inputValue = _inputValue, _ref;
};
var crFilteredOptions = function crFilteredOptions(token, options, propCaption, isWithInput) {
  var _filteredOptions = _crFilteredOptions(options, token, propCaption);
  if (_filteredOptions.length === 0) {
    _filteredOptions.push(_crItemNotFounded(token, propCaption, isWithInput));
  }
  return _filteredOptions;
};
var _default = crFilteredOptions;
exports["default"] = _default;
//# sourceMappingURL=crFilteredOptions.js.map