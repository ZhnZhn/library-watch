"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _WrapperInputSearch = _interopRequireDefault(require("./WrapperInputSearch"));
var _Handlers = require("./Handlers");
var _jsxRuntime = require("react/jsx-runtime");
const S_WRAPPER_SEARCH = {
  width: '100%',
  padding: '0 0 8px 0'
};
const SearchInput = _ref => {
  let {
    isShow,
    isShouldUpdate,
    data
  } = _ref;
  return data ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide.default, {
    isShow: isShow,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapperInputSearch.default, {
      style: S_WRAPPER_SEARCH,
      data: data,
      isShouldUpdate: isShouldUpdate,
      onSelect: _Handlers.showDialogWatchItem
    })
  }) : null;
};
var _default = exports.default = SearchInput;
//# sourceMappingURL=SearchInput.js.map