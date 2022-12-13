"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../../uiApi");
var _useDnDHandlers = _interopRequireDefault(require("./useDnDHandlers"));
var _has = require("../../has");
var _A = _interopRequireDefault(require("../../zhn-atoms/A"));
var _TagList = _interopRequireDefault(require("./TagList"));
var _jsxRuntime = require("react/jsx-runtime");
var CL = 'row-item not-selected',
  S_NONE = {
    display: 'none'
  },
  S_ITEM_CAPTION = {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: 8
  },
  S_BADGE = {
    display: 'inline-block',
    fontSize: 18,
    paddingRight: 8
  },
  S_FISH_BADGE = (0, _extends2["default"])({}, S_BADGE, {
    color: '#d7bb52'
  }),
  S_GREEN_BADGE = (0, _extends2["default"])({}, S_BADGE, {
    color: '#80c040'
  }),
  S_BLACK_BAGDE = (0, _extends2["default"])({}, S_BADGE, {
    color: 'black'
  }),
  S_DATE_AGO = {
    display: 'inline-block',
    fontSize: '18px'
  },
  S_TITLE = {
    paddingBottom: 8,
    fontSize: '18px'
  };
var TOKEN_ANSWER = _has.HAS_TOUCH_EVENTS ? 'A' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": "hammer and pick",
  children: "\u2692"
});
var TOKEN_SCORE = _has.HAS_TOUCH_EVENTS ? 'S' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "aria-label": "fish",
  children: "\uD83D\uDC1F"
});
var TOKEN_VIEW = _has.HAS_TOUCH_EVENTS ? 'V' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "aria-label": "wheel of dharma",
  children: "\u2638"
});
var TOKEN_REPUTATION = _has.HAS_TOUCH_EVENTS ? 'R' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": "shamrock",
  children: "\u2618"
});
var FN_NOOP = function FN_NOOP() {};
var TaggedItem = function TaggedItem(_ref) {
  var item = _ref.item,
    _ref$onRemoveItem = _ref.onRemoveItem,
    onRemoveItem = _ref$onRemoveItem === void 0 ? FN_NOOP : _ref$onRemoveItem,
    _ref$onRemoveUnder = _ref.onRemoveUnder,
    onRemoveUnder = _ref$onRemoveUnder === void 0 ? FN_NOOP : _ref$onRemoveUnder;
  var _useState = (0, _uiApi.useState)(false),
    isClosed = _useState[0],
    setIsClose = _useState[1],
    _itemHandlers = (0, _useDnDHandlers["default"])(item, setIsClose, onRemoveItem, onRemoveUnder),
    is_answered = item.is_answered,
    answer_count = item.answer_count,
    score = item.score,
    view_count = item.view_count,
    title = item.title,
    dateAgo = item.dateAgo,
    link = item.link,
    owner = item.owner,
    tags = item.tags,
    _ref2 = owner || {},
    reputation = _ref2.reputation,
    display_name = _ref2.display_name,
    _style = isClosed ? S_NONE : void 0;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
    className: CL,
    style: _style
  }, _itemHandlers, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_A["default"].Link, {
      href: link,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S_ITEM_CAPTION,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].DateAgo, {
          style: S_DATE_AGO,
          dateAgo: dateAgo
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S_TITLE,
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TagList["default"], {
        tags: tags
      })]
    })
  }));
};
var _default = TaggedItem;
exports["default"] = _default;
//# sourceMappingURL=TaggedItem.js.map