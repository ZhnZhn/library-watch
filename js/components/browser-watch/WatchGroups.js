"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _DnDGroupHandlers = require("./dnd-handlers/DnDGroupHandlers");
var _OpenClose = _interopRequireDefault(require("../zhn/OpenClose2"));
var _WatchLists = _interopRequireDefault(require("./WatchLists"));
var _jsxRuntime = require("react/jsx-runtime");
const S_GROUP_DIV = {
    lineHeight: 2
  },
  S_CAPTION_ROW = {
    paddingLeft: 6
  },
  FILL_OPEN = '#1b2836';
const WatchGroups = ({
  refFirstItem,
  isModeEdit,
  groups
}) => (0, _uiApi.safeMap)(groups, ({
  caption,
  lists
}, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose.default, {
  refItem: index === 0 ? refFirstItem : void 0,
  style: S_GROUP_DIV,
  styleCaptionRow: S_CAPTION_ROW,
  fillOpen: FILL_OPEN,
  caption: caption,
  dndHandlers: (0, _DnDGroupHandlers.crDnDGroupHandlers)(isModeEdit, {
    caption
  }),
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchLists.default, {
    isModeEdit: isModeEdit,
    groupCaption: caption,
    lists: lists,
    color: FILL_OPEN
  })
}, caption));
var _default = exports.default = WatchGroups;
//# sourceMappingURL=WatchGroups.js.map