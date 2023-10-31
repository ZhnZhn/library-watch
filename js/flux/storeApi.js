"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getStoreApi = exports.fCrUse = exports.fCrStoreSlice = exports.fCrMsFromPropNames = exports.fCrMsFromFn = exports.createStoreWithSelector = exports.atom = void 0;
var _zustandLite = require("./zustand-lite");
var _bindTo = require("../utils/bindTo");
exports.bindTo = _bindTo.bindTo;
var _useSubscribe = _interopRequireDefault(require("../components/hooks/useSubscribe"));
var _useRerender = _interopRequireDefault(require("../components/hooks/useRerender"));
const _isFn = v => typeof v === "function";
const createStoreWithSelector = crStore => (0, _zustandLite.createStore)((0, _zustandLite.subscribeWithSelector)(crStore));
exports.createStoreWithSelector = createStoreWithSelector;
const getStoreApi = store => [store.setState, store.getState];
exports.getStoreApi = getStoreApi;
const fCrStoreSlice = (slicePn, optionPn) => [value => ({
  [slicePn]: optionPn ? {
    [optionPn]: value
  } : value
}), state => state[slicePn]];
exports.fCrStoreSlice = fCrStoreSlice;
const fCrMsFromPropNames = function (crMs) {
  for (var _len = arguments.length, optionNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    optionNames[_key - 1] = arguments[_key];
  }
  return function () {
    for (var _len2 = arguments.length, optionValues = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      optionValues[_key2] = arguments[_key2];
    }
    return crMs(optionNames.reduce((r, pn, i) => {
      r[pn] = optionValues[i];
      return r;
    }, {}));
  };
};
exports.fCrMsFromPropNames = fCrMsFromPropNames;
const fCrMsFromFn = (crMs, fn) => function () {
  return crMs(fn(...arguments));
};
exports.fCrMsFromFn = fCrMsFromFn;
const fCrUse = (store, select, isSameValue) => (0, _bindTo.bindTo)(_useSubscribe.default, store, select);
exports.fCrUse = fCrUse;
const _reducerUseAtomValue = (value, crOrValue) => _isFn(crOrValue) ? crOrValue(value) : crOrValue;
const atom = initialValue => {
  const _atom = Object.create(null);
  _atom.value = initialValue;
  return {
    useAtomValue: () => {
      _atom.rerender = (0, _useRerender.default)();
      return _atom.value;
    },
    setValue: crOrValue => {
      const _prev = _atom.value,
        _rerender = _atom.rerender;
      _atom.value = _reducerUseAtomValue(_prev, crOrValue);
      if (_prev !== _atom.value && _isFn(_rerender)) {
        _rerender();
      }
    }
  };
};
exports.atom = atom;
//# sourceMappingURL=storeApi.js.map