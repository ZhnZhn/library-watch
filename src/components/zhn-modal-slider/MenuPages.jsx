import { cloneUiElement } from "../uiApi";

const MenuPages = ({
  isShow,
  style,
  pages,
  pageCurrent,
  onNextPage,
  onPrevPage,
  onClose
}) => pages
 .map((ElementPage, index) => {
   const _pageNumber = index + 1;   
   return cloneUiElement(ElementPage, {
    isShow,
    pageCurrent,
    style,
    isVisible: isShow && (_pageNumber === pageCurrent),
    canBeHidden: _pageNumber > pageCurrent,
    pageNumber: _pageNumber,
    onNextPage: index === 0 ? onNextPage : void 0,
    onPrevPage: index !== 0 ? onPrevPage : void 0,
    onClose
 })}
);

export default MenuPages
