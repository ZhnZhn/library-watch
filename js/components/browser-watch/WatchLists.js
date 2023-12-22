"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DnDListHandlers = require("./dnd-handlers/DnDListHandlers");
var _Comp = _interopRequireDefault(require("../Comp"));
var _WatchItems = _interopRequireDefault(require("./WatchItems"));
var _jsxRuntime = require("react/jsx-runtime");
const {
    OpenClose2
  } = _Comp.default,
  S_LIST_DIV = {
    marginLeft: 8,
    paddingLeft: 12,
    lineHeight: 2,
    borderLeft: '1px solid yellow'
  },
  _isArr = Array.isArray;
const WatchLists = _ref => {
  let {
    isModeEdit,
    groupCaption,
    lists
  } = _ref;
  return _isArr(lists) ? lists.map(_ref2 => {
    let {
      caption,
      items
    } = _ref2;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(OpenClose2, {
      fillOpen: "#80c040",
      style: S_LIST_DIV,
      caption: caption,
      dndHandlers: (0, _DnDListHandlers.crDnDListHandlers)(isModeEdit, {
        groupCaption,
        caption
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchItems.default, {
        isModeEdit: isModeEdit,
        items: items,
        groupCaption: groupCaption,
        listCaption: caption
      })
    }, caption);
  }) : null;
};
var _default = exports.default = WatchLists;
//# sourceMappingURL=WatchLists.js.map