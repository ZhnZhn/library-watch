"use strict";

exports.__esModule = true;
exports.crShowPopupStyle = exports.crClNotSelected = void 0;
var _CL = require("./styles/CL");
const CL_NOT_SELECTED = "not-selected";
const crClNotSelected = className => className ? `${className} ${CL_NOT_SELECTED}` : CL_NOT_SELECTED;
exports.crClNotSelected = crClNotSelected;
const crShowPopupStyle = isShow => isShow ? [_CL.S_BLOCK, _CL.CL_SHOW_POPUP] : [_CL.S_NONE];
exports.crShowPopupStyle = crShowPopupStyle;
//# sourceMappingURL=styleFn.js.map