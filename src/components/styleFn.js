const _isArr = Array.isArray;

const _getCn = (arrOrStr) => _isArr(arrOrStr)
  ? arrOrStr[0] ? arrOrStr[1] : ''
  : arrOrStr || '';

export const crCn = (conf1, conf2) => {
  const _cl1 = _getCn(conf1)
  , _cl2 = _getCn(conf2);
  return _cl1
    ? _cl2 ? `${_cl1} ${_cl2}` : _cl1
    : _cl2 || void 0 ;
};

const _fStyleDisplay = value => ({
  display: value
});
export const S_BLOCK = _fStyleDisplay('block')
export const S_INLINE_BLOCK = _fStyleDisplay('inline-block')
export const S_NONE = _fStyleDisplay('none')

export const crStyle2 = (
  style1,
  style2
) => style2
 ? {...style1, ...style2}
 : style1;

export const CL_SHOW_POPUP = "show-popup"
export const crShowPopupStyle = isShow => isShow
 ? [S_BLOCK, CL_SHOW_POPUP]
 : [S_NONE]

export const CL_NOT_SELECTED = "not-selected";
export const crClNotSelected = (
  className
) => className
 ? `${className} ${CL_NOT_SELECTED}`
 : CL_NOT_SELECTED

export const CL_BT_ITEM = crClNotSelected("bt-item")
export const CL_MENU_MORE = "popup-menu charts__menu-more"
export const CL_ROW_ITEM = crClNotSelected("row-item")
export const CL_ROW_MENU_MORE = crClNotSelected("row__pane-topic")

export const CL_ITEM = "item"
export const CL_ITEM_TITLE = crClNotSelected("item-title")
export const CL_LINK_WARPPER = "link-wrapper"

export const CL_SOURCE_LINK = "source-link"

export const CL_LIB = "library"
export const CL_LIB_TITLE = `${CL_LIB}__title`
export const CL_LIB_VALUE = `${CL_LIB}__value`
export const CL_LIB_VALUE_TITLE = `${CL_LIB_VALUE}-title`

export const CL_FILE_ITEM = "row__item"

export const crVisibilityHidden = (
  isVisible
) => isVisible
  ? void 0
  : { visibility: 'hidden' }
