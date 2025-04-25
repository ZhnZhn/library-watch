"use strict";

exports.__esModule = true;
exports.crA11yLabelledByProps = exports.crA11yExpandedProps = exports.crA11yComboboxProps = void 0;
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
//# sourceMappingURL=a11yFn.js.map