'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var crRowCaption = function crRowCaption(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str[str.length - 1] !== ':' ? str + ':' : str;
};

exports.default = crRowCaption;
//# sourceMappingURL=crRowCaption.js.map