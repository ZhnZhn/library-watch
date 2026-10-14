"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _DnDListHandlers = require("./dnd-handlers/DnDListHandlers");
var _OpenClose = _interopRequireDefault(require("../zhn/OpenClose2"));
var _WatchItems = _interopRequireDefault(require("./WatchItems"));
var _jsxRuntime = require("react/jsx-runtime");
const FILL_OPEN = '#80c040',
  S_LIST_DIV = {
    marginLeft: 8,
    lineHeight: 2
  },
  S_CAPTION_ROW = {
    paddingLeft: 12
  };
const WatchLists = ({
  isModeEdit,
  groupCaption,
  lists,
  color
}) => (0, _uiApi.safeMap)(lists, ({
  caption,
  items
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose.default, {
  fillOpen: FILL_OPEN,
  style: {
    ...S_LIST_DIV,
    borderLeft: `2px solid var(--el-bg, #1b2836)`
  },
  styleCaptionRow: S_CAPTION_ROW,
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
}, caption));
var _default = exports.default = WatchLists;
//# sourceMappingURL=WatchLists.js.map