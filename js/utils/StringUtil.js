"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var StringUtil = {
  setFirstToUpperCase: function setFirstToUpperCase(msg) {
    if (!msg) {
      return msg;
    }

    return msg.charAt(0).toUpperCase() + msg.substring(1);
  }
};
var _default = StringUtil;
exports["default"] = _default;
//# sourceMappingURL=StringUtil.js.map