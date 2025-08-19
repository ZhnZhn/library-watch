"use strict";

exports.__esModule = true;
exports.crVisibilityHidden = exports.crStyle2 = exports.crShowPopupStyle = exports.crCn = exports.crClNotSelected = exports.S_NONE = exports.S_INLINE_BLOCK = exports.S_BLOCK = exports.CL_SOURCE_LINK = exports.CL_SHOW_POPUP = exports.CL_ROW_ITEM = exports.CL_NOT_SELECTED = exports.CL_MENU_MORE = exports.CL_LINK_WARPPER = exports.CL_LIB_VALUE_TITLE = exports.CL_LIB_VALUE = exports.CL_LIB_TITLE = exports.CL_LIB = exports.CL_ITEM_TITLE = exports.CL_ITEM = exports.CL_FILE_ITEM = exports.CL_BT_ITEM = void 0;
const _isArr = Array.isArray;
const _getCn = arrOrStr => _isArr(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : '' : arrOrStr || '';
const crCn = (conf1, conf2) => {
  const _cl1 = _getCn(conf1),
    _cl2 = _getCn(conf2);
  return _cl1 ? _cl2 ? `${_cl1} ${_cl2}` : _cl1 : _cl2 || void 0;
};
exports.crCn = crCn;
const _fStyleDisplay = value => ({
  display: value
});
const S_BLOCK = exports.S_BLOCK = _fStyleDisplay('block');
const S_INLINE_BLOCK = exports.S_INLINE_BLOCK = _fStyleDisplay('inline-block');
const S_NONE = exports.S_NONE = _fStyleDisplay('none');
const crStyle2 = (style1, style2) => style2 ? {
  ...style1,
  ...style2
} : style1;
exports.crStyle2 = crStyle2;
const CL_SHOW_POPUP = exports.CL_SHOW_POPUP = "show-popup";
const crShowPopupStyle = isShow => isShow ? [S_BLOCK, CL_SHOW_POPUP] : [S_NONE];
exports.crShowPopupStyle = crShowPopupStyle;
const CL_NOT_SELECTED = exports.CL_NOT_SELECTED = "not-selected";
const crClNotSelected = className => className ? `${className} ${CL_NOT_SELECTED}` : CL_NOT_SELECTED;
exports.crClNotSelected = crClNotSelected;
const CL_BT_ITEM = exports.CL_BT_ITEM = crClNotSelected("bt-item");
const CL_MENU_MORE = exports.CL_MENU_MORE = "popup-menu charts__menu-more";
const CL_ROW_ITEM = exports.CL_ROW_ITEM = crClNotSelected("row-item");
const CL_ITEM = exports.CL_ITEM = "item";
const CL_ITEM_TITLE = exports.CL_ITEM_TITLE = crClNotSelected("item-title");
const CL_LINK_WARPPER = exports.CL_LINK_WARPPER = "link-wrapper";
const CL_SOURCE_LINK = exports.CL_SOURCE_LINK = "source-link";
const CL_LIB = exports.CL_LIB = "library";
const CL_LIB_TITLE = exports.CL_LIB_TITLE = `${CL_LIB}__title`;
const CL_LIB_VALUE = exports.CL_LIB_VALUE = `${CL_LIB}__value`;
const CL_LIB_VALUE_TITLE = exports.CL_LIB_VALUE_TITLE = `${CL_LIB_VALUE}-title`;
const CL_FILE_ITEM = exports.CL_FILE_ITEM = "row__item";
const crVisibilityHidden = isVisible => isVisible ? void 0 : {
  visibility: 'hidden'
};
exports.crVisibilityHidden = crVisibilityHidden;
//# sourceMappingURL=styleFn.js.map