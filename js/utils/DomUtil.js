"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _domParser = DOMParser ? new DOMParser() : {
   parseFromString: function parseFromString(input) {
      return { documentElement: { textContent: input } };
   }
};

var DomUtil = {
   htmlDecode: function htmlDecode() {
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var doc = _domParser.parseFromString(input, "text/html");
      return doc.documentElement.textContent;
   }
};

exports.default = DomUtil;
//# sourceMappingURL=DomUtil.js.map