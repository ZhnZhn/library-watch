"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _useToggle = _interopRequireDefault(require("../../hooks/useToggle"));
var _useMenuMore = _interopRequireDefault(require("../../hooks/useMenuMore"));
var _A = _interopRequireDefault(require("../../zhn-atoms/A"));
var _ItemCaption = _interopRequireDefault(require("../ItemCaption"));
var _ModalSlider = _interopRequireDefault(require("../../zhn-modal-slider/ModalSlider"));
var _crModelMore = _interopRequireDefault(require("./crModelMore"));
var _sortItemsBy = _interopRequireDefault(require("./sortItemsBy"));
var _TaggedItemList = _interopRequireDefault(require("./TaggedItemList"));
var _CL = require("../../styles/CL");
var _Item = require("../Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const S_BT_MORE = {
    position: 'relative',
    top: 3,
    marginRight: 12
  },
  S_ITEM_COUNT = {
    color: '#a9a9a9',
    padding: '0 12px'
  },
  S_BT_REVERSE = {
    color: '#a487d4',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  S_NOT_FLOAT = {
    float: 'none'
  },
  DF_ITEMS = [];
const StackTaggedQuestions = props => {
  const {
      repo,
      caption,
      onCloseItem
    } = props,
    [state, setState] = (0, _uiApi.useState)(() => ({
      items: props.items || DF_ITEMS,
      pnForSort: '',
      titleForSort: '',
      itemRemoved: 0
    })),
    {
      items,
      titleForSort,
      itemRemoved
    } = state,
    [isShow, _toggleIsShow] = (0, _useToggle.default)(true),
    _reverseItems = (0, _uiApi.useCallback)(() => {
      setState(prevState => ({
        ...prevState,
        items: [...prevState.items.reverse()]
      }));
    }, []),
    _sortItemsByPropName = (0, _uiApi.useCallback)((propName, title) => {
      setState(prevState => ({
        ...prevState,
        pnForSort: propName,
        titleForSort: title,
        items: [...(0, _sortItemsBy.default)(prevState.items, propName)]
      }));
    }, []),
    _onRemoveItem = (0, _uiApi.useCallback)(() => {
      setState(prevState => ({
        ...prevState,
        itemRemoved: prevState.itemRemoved + 1
      }));
    }, []),
    [_MODEL_MORE, _isMenuMore, _toggleMenuMore, _showMenuMore] = (0, _useMenuMore.default)(_crModelMore.default, {
      setSortByProp: _sortItemsByPropName,
      reverse: _reverseItems
    }),
    _itemsLength = items.length,
    _tokenItemsCount = itemRemoved ? `${_itemsLength - itemRemoved}/${_itemsLength}` : `${_itemsLength}`,
    _titleForSort = `Sorted By ${titleForSort}`;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item.S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalSlider.default, {
      isShow: _isMenuMore,
      className: _CL.CL_MENU_MORE,
      model: _MODEL_MORE,
      onClose: _toggleMenuMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption.default, {
      onClose: onCloseItem,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_A.default.SvgMore, {
        style: S_BT_MORE,
        onClick: _showMenuMore
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: _CL.CL_NOT_SELECTED,
        title: caption,
        style: {
          ..._Item.S_CAPTION_OPEN,
          ...S_NOT_FLOAT
        },
        onClick: _toggleIsShow,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: repo
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S_ITEM_COUNT,
          children: _tokenItemsCount
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: _CL.CL_NOT_SELECTED,
        style: S_BT_REVERSE,
        title: "Reverse Items",
        onClick: _reverseItems,
        children: _titleForSort
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A.default.ShowHide, {
      isShow: isShow,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TaggedItemList.default, {
        items: items,
        onRemoveItem: _onRemoveItem
      })
    })]
  });
};
var _default = exports.default = StackTaggedQuestions;
//# sourceMappingURL=TaggedQuestions.js.map