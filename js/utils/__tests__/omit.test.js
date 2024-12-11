"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _omit = _interopRequireDefault(require("../omit"));
describe('omit', () => {
  const fn = _omit.default;
  test('should return new object with filtered properties', () => {
    const _propName1 = 'prop1',
      _propName2 = 'prop2',
      _propName3 = 'propFiltered1',
      _propName4 = 'propFiltered12',
      _fromObj = {
        [_propName1]: 'a',
        [_propName2]: {
          p1: 'a'
        },
        [_propName3]: {},
        [_propName4]: 200
      },
      _filteredProperties = [_propName3, _propName4],
      _resultObj = fn(_fromObj, _filteredProperties);
    expect(_resultObj === _fromObj).toBe(false);
    expect(_resultObj[_propName1]).toEqual(_fromObj[_propName1]);
    expect(_resultObj[_propName2]).toEqual(_fromObj[_propName2]);
    expect(_resultObj[_filteredProperties[0]]).toBe(void 0);
    expect(_resultObj[_filteredProperties[1]]).toBe(void 0);
  });
});
//# sourceMappingURL=omit.test.js.map