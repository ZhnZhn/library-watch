"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _styleFn = require("../../styleFn");
var _useDnDHandlers = _interopRequireDefault(require("./useDnDHandlers"));
var _Link = _interopRequireDefault(require("../../zhn/Link"));
var _DateAgo = _interopRequireDefault(require("../../zhn/DateAgo"));
var _TagList = _interopRequireDefault(require("./TagList"));
var _crImgToken = _interopRequireDefault(require("./crImgToken"));
var _jsxRuntime = require("react/jsx-runtime");
const CL = (0, _styleFn.crClNotSelected)("row-item"),
  S_NONE = {
    display: 'none'
  },
  S_INLINE_BLOCK = {
    display: 'inline-block'
  },
  S_FS_18 = {
    fontSize: '18px'
  },
  S_ITEM_CAPTION = {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: 8
  },
  S_BOUNTY = {
    color: '#6495ed',
    padding: '2px 8px 2px 0'
  },
  S_BADGE = {
    ...S_INLINE_BLOCK,
    ...S_FS_18,
    paddingRight: 8
  },
  S_FISH_BADGE = {
    ...S_BADGE,
    color: '#d7bb52'
  },
  S_GREEN_BADGE = {
    ...S_BADGE,
    color: '#80c040'
  },
  S_BLACK_BAGDE = {
    ...S_BADGE,
    color: 'black'
  },
  S_DATE_AGO = {
    ...S_INLINE_BLOCK,
    ...S_FS_18
  },
  S_TITLE = {
    ...S_FS_18,
    paddingBottom: 8
  },
  TOKEN_ANSWER = (0, _crImgToken.default)("A", "hammer and pick", [9874]),
  TOKEN_SCORE = (0, _crImgToken.default)("S", "fish", [55357, 56351]),
  TOKEN_VIEW = (0, _crImgToken.default)("V", "wheel of dharma", [9784]),
  TOKEN_REPUTATION = (0, _crImgToken.default)("R", "shamrock", [9752]),
  FN_NOOP = () => {};
const TaggedItem = _ref => {
  let {
    item,
    onRemoveItem = FN_NOOP,
    onRemoveUnder = FN_NOOP
  } = _ref;
  const [isClosed, setIsClose] = (0, _uiApi.useState)(false),
    _itemHandlers = (0, _useDnDHandlers.default)(item, setIsClose, onRemoveItem, onRemoveUnder),
    {
      is_answered,
      bounty_amount,
      answer_count,
      score,
      view_count,
      title,
      dateAgo,
      link,
      owner,
      tags
    } = item,
    {
      reputation,
      display_name
    } = owner || {};
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: CL,
    style: isClosed ? S_NONE : void 0,
    ..._itemHandlers,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Link.default, {
      href: link,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S_ITEM_CAPTION,
        children: [bounty_amount && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S_BOUNTY,
          children: `+${bounty_amount}`
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          style: is_answered ? S_GREEN_BADGE : S_FISH_BADGE,
          children: [TOKEN_ANSWER, "\xA0", answer_count]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          style: S_FISH_BADGE,
          children: [TOKEN_SCORE, "\xA0", score]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          style: S_BLACK_BAGDE,
          children: [TOKEN_VIEW, "\xA0", view_count]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          style: S_GREEN_BADGE,
          children: [TOKEN_REPUTATION, "\xA0", reputation]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S_BLACK_BAGDE,
          children: display_name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateAgo.default, {
          style: S_DATE_AGO,
          dateAgo: dateAgo
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S_TITLE,
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TagList.default, {
        tags: tags
      })]
    })
  });
};
var _default = exports.default = TaggedItem;
//# sourceMappingURL=TaggedItem.js.map