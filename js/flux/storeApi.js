"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.fCrUse = exports.createStoreWithSelector = exports.atom = void 0;
var _zustand = require("zustand");
var _middleware = require("zustand/middleware");
var _uiApi = require("../components/uiApi");
var _useSubscribe = _interopRequireDefault(require("../components/hooks/useSubscribe"));
const createStoreWithSelector = crStore => (0, _zustand.createStore)((0, _middleware.subscribeWithSelector)(crStore));
exports.createStoreWithSelector = createStoreWithSelector;
const fCrUse = (store, select) => _useSubscribe.default.bind(null, store, select);
exports.fCrUse = fCrUse;
const _isFn = v => typeof v === 'function',
  _reducerUseAtomValue = (value, crOrValue) => _isFn(crOrValue) ? crOrValue(value) : crOrValue;
const atom = initialValue => {
  const _atom = Object.create(null);
  _atom.value = initialValue;
  return {
    useAtomValue: () => {
      const [value, dispatch] = (0, _uiApi.useReducer)(_reducerUseAtomValue, initialValue);
      _atom.dispatch = dispatch;
      return value;
    },
    setValue: crOrValue => {
      _atom.value = _reducerUseAtomValue(_atom.value, crOrValue);
      const _dispatch = _atom.dispatch;
      if (_isFn(_dispatch)) {
        _dispatch(crOrValue);
      }
    }
  };
};
exports.atom = atom;
//# sourceMappingURL=storeApi.js.map