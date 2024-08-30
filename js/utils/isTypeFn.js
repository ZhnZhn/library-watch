"use strict";

exports.__esModule = true;
exports.isStr = exports.isRegularObj = exports.isNumber = exports.isNotEmptyStr = exports.isNaN = exports.isFn = exports.isArr = void 0;
const isNaN = exports.isNaN = Number.isNaN;
const isArr = exports.isArr = Array.isArray;
const _fIsType = strType => v => typeof v === strType,
  _isTypeNumber = _fIsType('number');
const isNumber = n => _isTypeNumber(n) && n - n === 0;
exports.isNumber = isNumber;
const isRegularObj = v => !!v && typeof v === 'object' && !isArr(v);
exports.isRegularObj = isRegularObj;
const isStr = exports.isStr = _fIsType('string');
const isFn = exports.isFn = _fIsType('function');
const isNotEmptyStr = str => isStr(str) && str !== '';
exports.isNotEmptyStr = isNotEmptyStr;
//# sourceMappingURL=isTypeFn.js.map