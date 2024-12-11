"use strict";

var _imArrFn = require("../imArrFn");
describe('imArrPush', () => {
  const fn = _imArrFn.imArrPush;
  test('should immutable add element to array', () => {
    const obj1 = {},
      obj2 = {},
      arrResult1 = fn(void 0, obj1),
      arrResult2 = fn(arrResult1, obj2);
    expect(arrResult1 === arrResult2).toBe(false);
    expect(arrResult2[0]).toEqual(obj1);
    expect(arrResult2[1]).toEqual(obj2);
  });
});
describe('imArrFilterByProp', () => {
  const fn = _imArrFn.imArrFilterByProp;
  test('should immutable filter array by propName', () => {
    const arrFrom = [{
        p1: 'a'
      }, {
        p1: 'a'
      }],
      arrResult = fn('p1', arrFrom, 'a');
    expect(arrResult === arrFrom).toBe(false);
    expect(arrResult.length).toBe(0);
  });
});
describe('imArrInsertItem', () => {
  const fn = _imArrFn.imArrInsertItem;
  test('should immutable insert item to array by index', () => {
    const obj1 = {},
      obj2 = {},
      obj3 = {},
      arrResult1 = fn(obj1, 0),
      arrResult2 = fn(obj2, 1, arrResult1),
      arrResult3 = fn(obj3, 1, arrResult2);
    expect(arrResult2 === arrResult1).toBe(false);
    expect(arrResult3 === arrResult2).toBe(false);
    expect(arrResult3[0]).toEqual(obj1);
    expect(arrResult3[0] === obj1).toBe(false);
    expect(arrResult3[1]).toEqual(obj3);
    expect(arrResult3[1] === obj3).toBe(false);
    expect(arrResult3[2]).toEqual(obj2);
    expect(arrResult3[2] === obj2).toBe(false);
  });
});
//# sourceMappingURL=imArrFn.test.js.map