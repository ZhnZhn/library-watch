"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var StringUtil = {
  setFirstToUpperCase: function setFirstToUpperCase(msg) {
    if (!msg) {
      return msg;
    }

    return msg.charAt(0).toUpperCase() + msg.substring(1);
  }
};

exports.default = StringUtil;
//# sourceMappingURL=StringUtil.js.map