"use strict";

exports.__esModule = true;
exports.crMenuItemRole = exports.crA11yLabelledByProps = exports.crA11yExpandedProps = exports.crA11yComboboxProps = void 0;
var _styleFn = require("./styleFn");
const crA11yLabelledByProps = labelId => ({
  "aria-labelledby": labelId
});
exports.crA11yLabelledByProps = crA11yLabelledByProps;
const crA11yComboboxProps = labelId => ({
  role: "combobox",
  "aria-autocomplete": "list",
  ...crA11yLabelledByProps(labelId)
});
exports.crA11yComboboxProps = crA11yComboboxProps;
const crA11yExpandedProps = (isExpaned, controlsId) => ({
  "aria-expanded": isExpaned,
  "aria-controls": isExpaned ? controlsId : void 0
});
exports.crA11yExpandedProps = crA11yExpandedProps;
const crMenuItemRole = function (tabIndex) {
  if (tabIndex === void 0) {
    tabIndex = "0";
  }
  return {
    role: "menuitem",
    className: `menu-item ${_styleFn.CL_NOT_SELECTED}`,
    tabIndex
  };
};
exports.crMenuItemRole = crMenuItemRole;
//# sourceMappingURL=a11yFn.js.map