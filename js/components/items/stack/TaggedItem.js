"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _has = _interopRequireDefault(require("../../has"));

var _withDnDStyle = _interopRequireDefault(require("../decorators/withDnDStyle"));

var _A = _interopRequireDefault(require("../../zhn-atoms/A"));

var _jsxRuntime = require("react/jsx-runtime");

var _class, _class2, _temp;

var CL = 'row-item not-selected';
var S = {
  NONE: {
    display: 'none'
  },
  ITEM_CAPTION: {
    paddingBottom: 8,
    display: 'flex',
    flexWrap: 'wrap'
  },
  FISH_BADGE: {
    display: 'inline-block',
    color: '#d7bb52',
    fontSize: 18,
    paddingRight: 8
  },
  GREEN_BADGE: {
    display: 'inline-block',
    color: '#80c040',
    fontSize: 18,
    paddingRight: 8
  },
  BLACK_BAGDE: {
    display: 'inline-block',
    color: 'black',
    fontSize: 18,
    paddingRight: 8
  },
  SPAN_TAG: {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 6,
    marginBottom: 2,
    borderRadius: 16
  },
  DATE_AGO: {
    display: 'inline-block',
    fontSize: '18px'
  },
  TITLE: {
    paddingBottom: 8,
    fontSize: '18px'
  }
};
var HAS_TOUCH = _has["default"].HAS_TOUCH;
var DELTA = HAS_TOUCH ? {
  MARK_REMOVE: 50,
  REMOVE_ITEM: 90,
  REMOVE_UNDER: 150
} : {
  MARK_REMOVE: 25,
  REMOVE_ITEM: 35,
  REMOVE_UNDER: 150
};
var TOKEN_ANSWER = HAS_TOUCH ? 'A' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": "hammer and pick",
  children: "\u2692"
});
var TOKEN_SCORE = HAS_TOUCH ? 'S' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "aria-label": "fish",
  children: "\uD83D\uDC1F"
});
var TOKEN_VIEW = HAS_TOUCH ? 'V' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "aria-label": "wheel of dharma",
  children: "\u2638"
});
var TOKEN_REPUTATION = HAS_TOUCH ? 'R' : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": "shamrock",
  children: "\u2618"
});

var _getTouchesClientX = function _getTouchesClientX(ev) {
  return (((ev || {}).touches || [])[0] || {}).clientX || 0;
};

var _getChangedTouches = function _getChangedTouches(ev) {
  return (((ev || {}).changedTouches || [])[0] || {}).clientX || 0;
};

var TagList = function TagList(_ref) {
  var tags = _ref.tags;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: (tags || []).map(function (tag, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: S.SPAN_TAG,
        children: tag
      }, index);
    })
  });
};

var _noopFn = function _noopFn() {};

var TaggedItem = (0, _withDnDStyle["default"])(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(TaggedItem, _Component);

  function TaggedItem(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._dragStart = function (ev) {
      _this._clientX = ev.clientX;

      _this.dragStartWithDnDStyle(ev);

      if (ev && ev.dataTransfer) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.dropEffect = "move";
      }
    };

    _this._onTouchStart = function (ev) {
      var _clientX = _getTouchesClientX(ev);

      if (_clientX) {
        _this._clientX = _clientX;
      }
    };

    _this._onTouchMove = function (ev) {
      var _clientX = _getTouchesClientX(ev);

      if (_clientX && Math.abs(_this._clientX - _clientX) > DELTA.MARK_REMOVE) {
        _this.dragStartWithDnDStyle(ev);
      }
    };

    _this._dragEnd = function (ev) {
      ev.preventDefault();

      _this.dragEndWithDnDStyle();

      var _deltaX = Math.abs(_this._clientX - ev.clientX),
          _this$props = _this.props,
          item = _this$props.item,
          onRemoveUnder = _this$props.onRemoveUnder;

      if (_deltaX > DELTA.REMOVE_UNDER) {
        onRemoveUnder(item);
      } else if (_deltaX > DELTA.REMOVE_ITEM) {
        _this._onHide();
      }
    };

    _this._onTouchEnd = function (ev) {
      //ev.preventDefault()
      _this.dragEndWithDnDStyle();

      var _clientX = _getChangedTouches(ev);

      if (_clientX) {
        var _deltaX = Math.abs(_this._clientX - _clientX),
            _this$props2 = _this.props,
            item = _this$props2.item,
            onRemoveUnder = _this$props2.onRemoveUnder;

        if (_deltaX > DELTA.REMOVE_UNDER) {
          onRemoveUnder(item);
        } else if (_deltaX > DELTA.REMOVE_ITEM) {
          _this._onHide();
        }
      }
    };

    _this._preventDefault = function (ev) {
      ev.preventDefault();
    };

    _this._onHide = function () {
      var _this$props3 = _this.props,
          onRemoveItem = _this$props3.onRemoveItem,
          item = _this$props3.item;
      onRemoveItem(item);

      _this.setState({
        isClosed: true
      });
    };

    _this._itemHandlers = HAS_TOUCH ? {
      onTouchStart: _this._onTouchStart.bind((0, _assertThisInitialized2["default"])(_this)),
      onTouchMove: _this._onTouchMove.bind((0, _assertThisInitialized2["default"])(_this)),
      onTouchEnd: _this._onTouchEnd.bind((0, _assertThisInitialized2["default"])(_this))
    } : {
      draggable: true,
      onDragStart: _this._dragStart.bind((0, _assertThisInitialized2["default"])(_this)),
      onDragEnd: _this._dragEnd.bind((0, _assertThisInitialized2["default"])(_this)),
      onDrop: _this._preventDefault,
      onDragOver: _this._preventDefault,
      onDragEnter: _this._preventDefault,
      onDragLeave: _this._preventDefault
    };
    _this.state = {
      isClosed: false
    };
    return _this;
  }

  var _proto = TaggedItem.prototype;

  _proto.render = function render() {
    var item = this.props.item,
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
        isClosed = this.state.isClosed,
        _style = isClosed ? S.NONE : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
      className: CL,
      style: _style
    }, this._itemHandlers, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        href: link,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: S.ITEM_CAPTION,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            style: is_answered ? S.GREEN_BADGE : S.FISH_BADGE,
            children: [TOKEN_ANSWER, "\xA0", answer_count]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            style: S.FISH_BADGE,
            children: [TOKEN_SCORE, "\xA0", score]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            style: S.BLACK_BAGDE,
            children: [TOKEN_VIEW, "\xA0", view_count]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            style: S.GREEN_BADGE,
            children: [TOKEN_REPUTATION, "\xA0", reputation]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.BLACK_BAGDE,
            children: display_name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].DateAgo, {
            style: S.DATE_AGO,
            dateAgo: dateAgo
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: S.TITLE,
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TagList, {
          tags: tags
        })]
      })
    }));
  };

  return TaggedItem;
}(_react.Component), _class2.defaultProps = {
  onRemoveUnder: _noopFn,
  onRemoveItem: _noopFn
}, _temp)) || _class;

var _default = TaggedItem;
exports["default"] = _default;
//# sourceMappingURL=TaggedItem.js.map