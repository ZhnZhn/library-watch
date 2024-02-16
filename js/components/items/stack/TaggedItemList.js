"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _memoFn = require("../../hoc/memoFn");
var _TaggedItem = _interopRequireDefault(require("./TaggedItem"));
var _jsxRuntime = require("react/jsx-runtime");
const TaggedItemList = (0, _memoFn.memoItems)(_ref => {
  let {
    items,
    onRemoveItem
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: (0, _uiApi.safeMap)(items, (item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_TaggedItem.default, {
      item: item,
      onRemoveItem: onRemoveItem
    }, item.question_id || index))
  });
});
var _default = exports.default = TaggedItemList;
//# sourceMappingURL=TaggedItemList.js.map