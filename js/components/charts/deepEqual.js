"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var is = function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
};

var deepEqual = function deepEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA); // Test for A's keys different from B.

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i])) {
      return false;
    }
  }

  for (var propty in objA) {
    if (hasOwnProperty.call(objB, propty)) {
      if (!deepEqual(objA[propty], objB[propty])) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};

var _default = deepEqual;
exports["default"] = _default;
//# sourceMappingURL=deepEqual.js.map