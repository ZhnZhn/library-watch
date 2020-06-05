"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _A = _interopRequireDefault(require("../../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("../ItemCaption"));

var _ModalSlider = _interopRequireDefault(require("../../zhn-modal-slider/ModalSlider"));

var _crModelMore = _interopRequireDefault(require("./crModelMore"));

var _sortItemsBy = _interopRequireDefault(require("./sortItemsBy"));

var _TaggedItemList = _interopRequireDefault(require("./TaggedItemList"));

var _Item = _interopRequireDefault(require("../Item.Style"));

var _CL = _interopRequireDefault(require("../../styles/CL"));

var S = {
  BT_MORE: {
    marginRight: 12
  },
  ITEM_COUNT: {
    color: '#a9a9a9',
    paddingLeft: 12,
    paddingRight: 12
  },
  BT_REVERSE: {
    color: '#a487d4',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  NOT_FLOAT: {
    "float": 'none'
  }
};

var StackTaggedQuestions = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(StackTaggedQuestions, _Component);

  function StackTaggedQuestions(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._sortItemsByPropName = function (propName, title) {
      _this.setState(function (prevState) {
        return {
          pnForSort: propName,
          titleForSort: title,
          items: [].concat((0, _sortItemsBy["default"])(prevState.items, propName))
        };
      });
    };

    _this._reverseItems = function () {
      _this.setState(function (prevState) {
        return {
          items: [].concat(prevState.items.reverse())
        };
      });
    };

    _this._hToggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    _this._hShowMore = function () {
      _this.setState({
        isMore: true
      });
    };

    _this._hToggleMore = function () {
      _this.setState(function (prevState) {
        return {
          isMore: !prevState.isMore
        };
      });
    };

    _this._onRemoveItem = function () {
      _this.setState(function (prevState) {
        return {
          itemRemoved: prevState.itemRemoved + 1
        };
      });
    };

    _this._MODEL_MORE = (0, _crModelMore["default"])({
      setSortByProp: _this._sortItemsByPropName.bind((0, _assertThisInitialized2["default"])(_this)),
      reverse: _this._reverseItems.bind((0, _assertThisInitialized2["default"])(_this))
    });
    _this.state = {
      isShow: true,
      isMore: false,
      pnForSort: '',
      titleForSort: '',
      items: props.items,
      itemRemoved: 0
    };
    return _this;
  }

  var _proto = StackTaggedQuestions.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        repo = _this$props.repo,
        caption = _this$props.caption,
        onCloseItem = _this$props.onCloseItem,
        _this$state = this.state,
        isShow = _this$state.isShow,
        isMore = _this$state.isMore,
        items = _this$state.items,
        titleForSort = _this$state.titleForSort,
        itemRemoved = _this$state.itemRemoved,
        _items_count = items.length,
        _token_count = itemRemoved ? _items_count - itemRemoved + "/" + _items_count : "" + _items_count,
        _titleForSort = "Sorted By " + titleForSort;

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: _Item["default"].ROOT
    }, /*#__PURE__*/_react["default"].createElement(_ItemCaption["default"], {
      onClose: onCloseItem
    }, /*#__PURE__*/_react["default"].createElement(_ModalSlider["default"], {
      isShow: isMore,
      className: _CL["default"].MENU_MORE,
      model: this._MODEL_MORE,
      onClose: this._hToggleMore
    }), /*#__PURE__*/_react["default"].createElement(_A["default"].SvgMore, {
      style: S.BT_MORE,
      onClick: this._hShowMore
    }), /*#__PURE__*/_react["default"].createElement("button", {
      className: _CL["default"].NOT_SELECTED,
      title: caption,
      style: (0, _extends2["default"])({}, _Item["default"].CAPTION_OPEN, S.NOT_FLOAT),
      onClick: this._hToggleOpen
    }, /*#__PURE__*/_react["default"].createElement("span", null, repo), /*#__PURE__*/_react["default"].createElement("span", {
      style: S.ITEM_COUNT
    }, _token_count)), /*#__PURE__*/_react["default"].createElement("button", {
      className: _CL["default"].NOT_SELECTED,
      style: S.BT_REVERSE,
      title: "Reverse Items",
      onClick: this._reverseItems
    }, _titleForSort)), /*#__PURE__*/_react["default"].createElement(_A["default"].ShowHide, {
      isShow: isShow
    }, /*#__PURE__*/_react["default"].createElement(_TaggedItemList["default"], {
      items: items,
      onRemoveItem: this._onRemoveItem
    })));
  };

  return StackTaggedQuestions;
}(_react.Component);

StackTaggedQuestions.defaultProps = {
  items: []
};
var _default = StackTaggedQuestions;
exports["default"] = _default;
//# sourceMappingURL=TaggedQuestions.js.map