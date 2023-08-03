"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.fCrUse = exports.createStoreWithSelector = void 0;
var _zustand = require("zustand");
var _middleware = require("zustand/middleware");
var _useSubscribe = _interopRequireDefault(require("../components/hooks/useSubscribe"));
const createStoreWithSelector = crStore => (0, _zustand.createStore)((0, _middleware.subscribeWithSelector)(crStore));
exports.createStoreWithSelector = createStoreWithSelector;
const fCrUse = (store, select) => _useSubscribe.default.bind(null, store, select);
exports.fCrUse = fCrUse;
//# sourceMappingURL=storeApi.js.map