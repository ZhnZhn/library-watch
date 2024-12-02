"use strict";

exports.__esModule = true;
exports.delayFn = void 0;
const delayFn = (mls, fn) => new Promise(resolve => {
  setTimeout(resolve, mls);
}).then(fn);
exports.delayFn = delayFn;
//# sourceMappingURL=delayFn.js.map