"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var TransformFn = {
  fromLevel3: function fromLevel3(data) {
    var caption = "caption",
        level1 = "groups",
        level2 = "lists",
        level3 = "items",
        _options = [];

    for (var _iterator = data[level1] || [], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var group = _ref;

      for (var _iterator2 = group[level2] || [], _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var list = _ref2;

        for (var _iterator3 = list[level3] || [], _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var item = _ref3;
          item.topic = group[caption] + "/" + list[caption];

          _options.push(item);
        }
      }
    }

    return _options;
  }
};
var _default = TransformFn;
exports["default"] = _default;
//# sourceMappingURL=TransformFn.js.map