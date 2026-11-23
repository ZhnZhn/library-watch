"use strict";

exports.__esModule = true;
exports.crVisibilityHidden = exports.crTransformRotateStyle = exports.crStyle2 = exports.crShowStyle = exports.crColorStyle = exports.crCnElBg = exports.crCnBgColor = exports.crCn = exports.crClNotSelected = exports.S_NONE = exports.S_INLINE_BLOCK = exports.S_COLOR_GREY = exports.S_BLOCK = exports.CL_SOURCE_LINK = exports.CL_SHOW_POPUP = exports.CL_ROW_ITEM = exports.CL_NOT_SELECTED = exports.CL_MENU_MORE = exports.CL_LINK_WARPPER = exports.CL_LIB_VALUE_TITLE = exports.CL_LIB_VALUE = exports.CL_LIB_TITLE = exports.CL_LIB = exports.CL_ITEM_TITLE = exports.CL_ITEM = exports.CL_HIDE_POPUP = exports.CL_FILE_ITEM = exports.CL_BT_ITEM = exports.CL_BG_COLOR = void 0;
const _isArr = Array.isArray;
const _getCn = arrOrStr => _isArr(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : '' : arrOrStr || '';
const crCn = (conf1, conf2) => {
  const _cl1 = _getCn(conf1),
    _cl2 = _getCn(conf2);
  return _cl1 ? _cl2 ? `${_cl1} ${_cl2}` : _cl1 : _cl2 || void 0;
};
exports.crCn = crCn;
const _fCrCn = cn2 => cn1 => crCn(cn1, cn2);
const crStyle2 = (style1, style2) => style2 ? {
  ...style1,
  ...style2
} : style1;
exports.crStyle2 = crStyle2;
const _fCrStyle = propName => value => ({
  [propName]: value
});
const crColorStyle = exports.crColorStyle = _fCrStyle('color');
const crTransformRotateStyle = number => ({
  transform: `rotate(${number}deg)`
});
exports.crTransformRotateStyle = crTransformRotateStyle;
const _crDisplayStyle = _fCrStyle('display');
const S_BLOCK = exports.S_BLOCK = _crDisplayStyle('block');
const S_INLINE_BLOCK = exports.S_INLINE_BLOCK = _crDisplayStyle('inline-block');
const S_NONE = exports.S_NONE = _crDisplayStyle('none');
const crShowStyle = (isShow, isInlineStyle) => isShow ? isInlineStyle ? S_INLINE_BLOCK : S_BLOCK : S_NONE;
exports.crShowStyle = crShowStyle;
const CL_SHOW_POPUP = exports.CL_SHOW_POPUP = "show-popup";
const CL_HIDE_POPUP = exports.CL_HIDE_POPUP = "hide-popup";
const CL_NOT_SELECTED = exports.CL_NOT_SELECTED = "not-selected";
const crClNotSelected = exports.crClNotSelected = _fCrCn(CL_NOT_SELECTED);
const CL_BG_COLOR = exports.CL_BG_COLOR = "c-bg";
const crCnBgColor = exports.crCnBgColor = _fCrCn(CL_BG_COLOR);
const crCnElBg = exports.crCnElBg = _fCrCn("el-bg");
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
const S_COLOR_GREY = exports.S_COLOR_GREY = crColorStyle("grey");
//# sourceMappingURL=styleFn.js.map