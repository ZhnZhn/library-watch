import {
  S_BLOCK,
  S_NONE,
  CL_SHOW_POPUP
} from './styles/CL';

const CL_NOT_SELECTED = "not-selected";
export const crClNotSelected = (
  className
) => className
 ? `${className} ${CL_NOT_SELECTED}`
 : CL_NOT_SELECTED

export const crShowPopupStyle = isShow => isShow
 ? [S_BLOCK, CL_SHOW_POPUP]
 : [S_NONE]
