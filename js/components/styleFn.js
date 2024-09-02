"use strict";

exports.__esModule = true;
exports.crShowPopupStyle = exports.crClNotSelected = exports.S_NONE = exports.S_INLINE_BLOCK = exports.S_BLOCK = exports.CL_SOURCE_LINK = exports.CL_SHOW_POPUP = exports.CL_ROW_MENU_MORE = exports.CL_ROW_ITEM = exports.CL_NOT_SELECTED = exports.CL_MENU_MORE = exports.CL_LINK_WARPPER = exports.CL_LIB_VALUE_TITLE = exports.CL_LIB_VALUE = exports.CL_LIB_TITLE = exports.CL_LIB = exports.CL_ITEM_TITLE = exports.CL_ITEM = exports.CL_FILE_ITEM = exports.CL_BT_ITEM = void 0;
const _fStyleDisplay = value => ({
  display: value
});
const S_BLOCK = exports.S_BLOCK = _fStyleDisplay('block');
const S_INLINE_BLOCK = exports.S_INLINE_BLOCK = _fStyleDisplay('inline-block');
const S_NONE = exports.S_NONE = _fStyleDisplay('none');
const CL_NOT_SELECTED = exports.CL_NOT_SELECTED = "not-selected";
const crClNotSelected = className => className ? `${className} ${CL_NOT_SELECTED}` : CL_NOT_SELECTED;
exports.crClNotSelected = crClNotSelected;
const CL_BT_ITEM = exports.CL_BT_ITEM = crClNotSelected("bt-item");
const CL_MENU_MORE = exports.CL_MENU_MORE = "popup-menu charts__menu-more";
const CL_ROW_ITEM = exports.CL_ROW_ITEM = crClNotSelected("row-item");
const CL_ROW_MENU_MORE = exports.CL_ROW_MENU_MORE = crClNotSelected("row__pane-topic");
const CL_ITEM = exports.CL_ITEM = "item";
const CL_ITEM_TITLE = exports.CL_ITEM_TITLE = crClNotSelected("item-title");
const CL_LINK_WARPPER = exports.CL_LINK_WARPPER = "link-wrapper";
const CL_SOURCE_LINK = exports.CL_SOURCE_LINK = "source-link";
const CL_LIB = exports.CL_LIB = "library";
const CL_LIB_TITLE = exports.CL_LIB_TITLE = `${CL_LIB}__title`;
const CL_LIB_VALUE = exports.CL_LIB_VALUE = `${CL_LIB}__value`;
const CL_LIB_VALUE_TITLE = exports.CL_LIB_VALUE_TITLE = `${CL_LIB_VALUE}-title`;
const CL_FILE_ITEM = exports.CL_FILE_ITEM = "row__item";
const CL_SHOW_POPUP = exports.CL_SHOW_POPUP = "show-popup";
const crShowPopupStyle = isShow => isShow ? [S_BLOCK, CL_SHOW_POPUP] : [S_NONE];
exports.crShowPopupStyle = crShowPopupStyle;
//# sourceMappingURL=styleFn.js.map