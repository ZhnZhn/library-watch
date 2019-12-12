"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _domParser = DOMParser ? new DOMParser() : {
  parseFromString: function parseFromString(input) {
    return {
      documentElement: {
        textContent: input
      }
    };
  }
};

var DomUtil = {
  htmlDecode: function htmlDecode(input) {
    if (input === void 0) {
      input = '';
    }

    var doc = _domParser.parseFromString(input, "text/html");

    return doc.documentElement.textContent;
  }
};
var _default = DomUtil;
exports["default"] = _default;
//# sourceMappingURL=DomUtil.js.map