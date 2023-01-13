"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.writeToLs = exports.readFromLs = exports.hasLocalStorage = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var KEY_PREFIX = 'LW',
  LS = window.localStorage,
  _toLs = JSON.stringify,
  _fromLs = JSON.parse,
  _crErr = function _crErr(msg) {
    return {
      message: msg
    };
  },
  ERR_LS_IS_ABSENT = _crErr("LocalStorage is absent"),
  ERR_USE_LS_NOT_ALLOWED = _crErr("Use LocalStorage is not allowed");
var hasLocalStorage = !!LS;
exports.hasLocalStorage = hasLocalStorage;
var _isAllowUseLs = true;
var _crStorageKey = function _crStorageKey(storageKey) {
  return KEY_PREFIX + "_" + storageKey;
};
var readFromLs = function readFromLs(storageKey) {
  if (hasLocalStorage) {
    try {
      return [_fromLs(LS[_crStorageKey(storageKey)])];
    } catch (err) {
      return [void 0, err];
    }
  } else {
    return [void 0, (0, _extends2["default"])({}, ERR_LS_IS_ABSENT)];
  }
};
exports.readFromLs = readFromLs;
var writeToLs = function writeToLs(storageKey, value) {
  if (!_isAllowUseLs) {
    return (0, _extends2["default"])({}, ERR_USE_LS_NOT_ALLOWED);
  }
  if (hasLocalStorage) {
    try {
      LS[_crStorageKey(storageKey)] = _toLs(value);
    } catch (err) {
      return err;
    }
  } else {
    return (0, _extends2["default"])({}, ERR_LS_IS_ABSENT);
  }
};
exports.writeToLs = writeToLs;
//# sourceMappingURL=localStorageFn.js.map