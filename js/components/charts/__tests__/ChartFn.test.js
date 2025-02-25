"use strict";

var _ChartFn = require("../ChartFn");
describe("formatTick", () => {
  const fn = _ChartFn.formatTicks,
    _crTicks = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const _values = args.map(value => ({
        value
      }));
      return args.map((value, index) => fn(value, index, _values));
    };
  test("should format millions values", () => {
    expect(_crTicks(0, 1_000_000, 2_000_000, 3_000_000, 4_000_000, 5_000_000, 6_000_000)).toEqual(["0", "1M", "2M", "3M", "4M", "5M", "6M"]);
    expect(_crTicks(0, 500_000, 1_000_000, 1_500_000, 2_000_000, 2_500_000, 3_000_000)).toEqual(["0", "0.5M", "1M", "1.5M", "2M", "2.5M", "3M"]);
  });
  test("should format thousands values", () => {
    expect(_crTicks(0, 200_000, 400_000, 600_000, 800_000, 1_000_000, 1_200_000)).toEqual(["0", "200K", "400K", "600K", "800K", "1000K", "1200K"]);
    expect(_crTicks(0, 1_200, 1_400, 1_600, 1_800, 2_000, 2_200)).toEqual(["0", "1.2K", "1.4K", "1.6K", "1.8K", "2K", "2.2K"]);
  });
  test("should return string for hundred values", () => {
    expect(_crTicks(0, 200, 400, 600, 800, 1_000, 1_200)).toEqual(["0", "200", "400", "600", "800", "1000", "1200"]);
    expect(_crTicks(0, 100, 200, 300, 400, 500, 600)).toEqual(["0", "100", "200", "300", "400", "500", "600"]);
  });
});
//# sourceMappingURL=ChartFn.test.js.map