"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _isFn = function _isFn(fn) {
  return typeof fn === "function";
};

var saveJsonToFile = function saveJsonToFile(json, fileName) {
  try {
    var _blob = new Blob([JSON.stringify(json)], {
      type: "application/json"
    }),
        a = document.createElement("a");

    a.href = URL.createObjectURL(_blob);
    a.rel = "noopener"; // tabnabbing

    a.target = "_blank";
    a.download = fileName;
    a.click();

    if (_isFn(URL.revokeObjectURL)) {
      URL.revokeObjectURL(a.href);
    }

    a.remove();
  } catch (err) {
    console.log(err.message);
  }
};

var _default = saveJsonToFile;
exports["default"] = _default;
//# sourceMappingURL=saveJsonToFile.js.map