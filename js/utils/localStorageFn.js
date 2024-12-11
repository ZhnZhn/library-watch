"use strict";

exports.__esModule = true;
exports.writeToLs = exports.readFromLs = exports.hasLocalStorage = void 0;
const KEY_PREFIX = 'LW',
  LS = window.localStorage,
  _toLs = JSON.stringify,
  _fromLs = JSON.parse,
  _crErr = msg => ({
    message: msg
  }),
  ERR_LS_IS_ABSENT = _crErr("LocalStorage is absent"),
  ERR_USE_LS_NOT_ALLOWED = _crErr("Use LocalStorage is not allowed");
const hasLocalStorage = exports.hasLocalStorage = !!LS;
let _isAllowUseLs = true;
const _crStorageKey = storageKey => `${KEY_PREFIX}_${storageKey}`;
const readFromLs = storageKey => {
  if (hasLocalStorage) {
    try {
      return [_fromLs(LS[_crStorageKey(storageKey)])];
    } catch (err) {
      return [void 0, err];
    }
  } else {
    return [void 0, {
      ...ERR_LS_IS_ABSENT
    }];
  }
};
exports.readFromLs = readFromLs;
const writeToLs = (storageKey, value) => {
  if (!_isAllowUseLs) {
    return {
      ...ERR_USE_LS_NOT_ALLOWED
    };
  }
  if (hasLocalStorage) {
    try {
      LS[_crStorageKey(storageKey)] = _toLs(value);
    } catch (err) {
      return err;
    }
  } else {
    return {
      ...ERR_LS_IS_ABSENT
    };
  }
};
exports.writeToLs = writeToLs;
//# sourceMappingURL=localStorageFn.js.map