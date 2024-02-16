"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoFn = require("../../hoc/memoFn");
var _TaggedItem = _interopRequireDefault(require("./TaggedItem"));
var _jsxRuntime = require("react/jsx-runtime");
const TaggedItemList = (0, _memoFn.crMemoCompList)((item, index, _ref) => {
  let {
    onRemoveItem
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TaggedItem.default, {
    item: item,
    onRemoveItem: onRemoveItem
  }, item.question_id || index);
});
var _default = exports.default = TaggedItemList;
//# sourceMappingURL=TaggedItemList.js.map