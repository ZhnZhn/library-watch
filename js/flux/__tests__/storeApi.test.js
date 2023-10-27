"use strict";

var _storeApi = require("../storeApi");
describe("fCrStoreSlice", () => {
  const fn = _storeApi.fCrStoreSlice;
  test("should return array with crMs and selector functions", () => {
    const SLICE_TEST = "test",
      [crTestSlice, selectTestSlice] = fn(SLICE_TEST);
    const msTest1 = void 0;
    expect(selectTestSlice({
      ...crTestSlice(msTest1)
    })).toEqual(msTest1);
    const msTest2 = "a";
    expect(selectTestSlice({
      ...crTestSlice(msTest2)
    })).toEqual(msTest2);
    const msTest3 = {
      a: "a",
      b: "b"
    };
    expect(selectTestSlice({
      ...crTestSlice(msTest3)
    })).toEqual(msTest3);
  });
  test("should use propName parameter", () => {
    const SLICE_TEST = "test",
      PN = "id",
      [crTestSlice, selectTestSlice] = fn(SLICE_TEST, PN);
    const msTest1 = void 0;
    expect(selectTestSlice({
      ...crTestSlice(msTest1)
    })).toEqual({
      [PN]: msTest1
    });
    const msTest2 = "someId";
    expect(selectTestSlice({
      ...crTestSlice(msTest2)
    })).toEqual({
      [PN]: msTest2
    });
    const msTest3 = {
      a: "a",
      "b": "b"
    };
    expect(selectTestSlice({
      ...crTestSlice(msTest3)
    })).toEqual({
      [PN]: msTest3
    });
  });
});
describe("fCrMsOptions", () => {
  const fn = _storeApi.fCrMsOptions;
  test("should return function that create store slice from parameters", () => {
    const SLICE_TEST = "test",
      [crTestSlice, selectTestSlice] = (0, _storeApi.fCrStoreSlice)(SLICE_TEST),
      pn1 = "pn1",
      pn2 = "pn2",
      crMsOptions = fn(crTestSlice, pn1, pn2),
      v1 = "v1",
      v2 = "v2";
    expect(selectTestSlice(crMsOptions(v1, v2))).toEqual({
      [pn1]: v1,
      [pn2]: v2
    });
  });
});
//# sourceMappingURL=storeApi.test.js.map