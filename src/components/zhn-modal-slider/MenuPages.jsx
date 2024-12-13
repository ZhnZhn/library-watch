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
 .map((ElementPage, index) => cloneUiElement(ElementPage, {
    isShow,
    pageCurrent,
    style,
    pageNumber: index + 1,
    onNextPage: index === 0 ? onNextPage : void 0,
    onPrevPage: index !== 0 ? onPrevPage : void 0,
    onClose
 }));

export default MenuPages
