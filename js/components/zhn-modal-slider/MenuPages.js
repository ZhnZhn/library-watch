"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const MenuPages = _ref => {
  let {
    isShow,
    style,
    pages,
    pageCurrent,
    onNextPage,
    onPrevPage,
    onClose
  } = _ref;
  return pages.map((ElementPage, index) => (0, _uiApi.cloneUiElement)(ElementPage, {
    isShow,
    pageCurrent,
    style,
    pageNumber: index + 1,
    onNextPage: index === 0 ? onNextPage : void 0,
    onPrevPage: index !== 0 ? onPrevPage : void 0,
    onClose
  }));
};
var _default = exports.default = MenuPages;
//# sourceMappingURL=MenuPages.js.map