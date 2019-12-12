"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var crRowCaption = function crRowCaption(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }

  return str[str.length - 1] !== ':' ? str + ':' : str;
};

var _default = crRowCaption;
exports["default"] = _default;
//# sourceMappingURL=crRowCaption.js.map