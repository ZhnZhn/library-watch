"use strict";

var _objFn = require("../objFn");
describe('findInPropArrayByPropItem', function () {
  var fn = _objFn.findInPropArrayByPropItem;
  test('should find in object by array propName, object propName and value item', function () {
    var obj1 = {
        p1: 'a'
      },
      obj2 = {
        p1: 'a'
      },
      obj3 = {
        p1: 'b'
      },
      obj = {
        arr1: [obj1, obj2, obj3]
      };
    expect(fn('arr1', 'p1', obj, 'a')).toBe(obj1);
    expect(fn('arr1', 'p1', obj, 'b')).toBe(obj3);
    expect(fn('arr1', 'p1', obj, 'c')).toBe(void 0);
  });
  test('should return void 0 in edge case', function () {
    expect(fn('arr1', 'p1', {}, 'a')).toBe(void 0);
    expect(fn('arr1', 'p1', null, 'a')).toBe(void 0);
    expect(fn('arr1', 'p1', void 0, 'a')).toBe(void 0);
    expect(fn('arr1', 'p1', [], 'a')).toBe(void 0);
  });
});
//# sourceMappingURL=objFn.test.js.map