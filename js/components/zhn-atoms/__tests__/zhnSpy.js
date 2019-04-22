"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var zhnSpy = {
  createValueSpy: function createValueSpy() {
    var calledCounter = 0;
    var calledWithValue = undefined;
    var fn = function fn(value) {
      calledCounter += 1;
      calledWithValue = value;
    };

    fn.isCalledOnce = function () {
      return calledCounter === 1;
    };
    fn.isCalledWithValue = function (value) {
      return calledWithValue === value;
    };

    return fn;
  }
};

exports.default = zhnSpy;
//# sourceMappingURL=zhnSpy.js.map