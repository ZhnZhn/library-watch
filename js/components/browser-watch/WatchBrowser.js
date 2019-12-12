"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _createReactClass = _interopRequireDefault(require("create-react-class"));

var _classnames = _interopRequireDefault(require("classnames"));

var _WithDnDStyle = _interopRequireDefault(require("./with/WithDnDStyle"));

var _createHandlerDnDGroup = _interopRequireDefault(require("./with/createHandlerDnDGroup"));

var _createHandlerDnDList = _interopRequireDefault(require("./with/createHandlerDnDList"));

var _createHandlerDnDItem = _interopRequireDefault(require("./with/createHandlerDnDItem"));

var _Type = require("../../constants/Type");

var _ComponentActions = _interopRequireDefault(require("../../flux/actions/ComponentActions"));

var _BrowserActions = _interopRequireDefault(require("../../flux/actions/BrowserActions"));

var _WatchActions = _interopRequireDefault(require("../../flux/actions/WatchActions"));

var _Browser = _interopRequireDefault(require("../zhn-atoms/Browser"));

var _CaptionRow = _interopRequireDefault(require("../zhn-atoms/CaptionRow"));

var _ButtonSave = _interopRequireDefault(require("../zhn-moleculs/ButtonSave"));

var _ButtonCircle = _interopRequireDefault(require("../zhn-atoms/ButtonCircle"));

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var _WrapperInputSearch = _interopRequireDefault(require("./WrapperInputSearch"));

var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose2"));

var _WatchItem = _interopRequireDefault(require("./WatchItem"));

var DRAG = {
  GROUP: 'GROUP',
  LIST: 'LIST',
  ITEM: 'ITEM'
};
var CL = {
  BROWSER_WATCH: "browser-watch",
  BROWSER_WATCH__30: "browser-watch--1r",
  BROWSER_WATCH__60: "browser-watch--2r",
  BT_BAR: "bt__watch__bar",
  BT_CAPTION: "bt__watch__caption"
};
var styles = {
  browser: {
    paddingRight: 0,
    maxWidth: 500
  },
  captionRoot: {
    minWidth: 340
  },
  captionRootDouble: {
    minWidth: 310
  },
  editBarDiv: {
    marginBottom: 10
  },
  btCircle: {
    marginLeft: 20
  },
  btCircleRight: {
    marginLeft: 20,
    marginRight: 20
  },
  btEditBarList: {
    marginLeft: 20
  },
  wrapperSearch: {
    paddingBottom: 8,
    width: '100%',
    paddingRight: 24
  },
  scrollDiv: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  groupDiv: {
    lineHeight: 2
  },
  listDiv: {
    marginLeft: 8,
    paddingLeft: 12,
    borderLeft: '1px solid yellow',
    lineHeight: 2
  },
  itemNotSelected: {
    borderBottom: '1px solid rgba(128, 192, 64, 0.6)',
    marginRight: 10
  }
};
var WatchBrowser = (0, _createReactClass["default"])((0, _extends2["default"])({
  displayName: "WatchBrowser"
}, _WithDnDStyle["default"], {}, (0, _createHandlerDnDGroup["default"])(DRAG, _WatchActions["default"]), {}, (0, _createHandlerDnDList["default"])(DRAG, _WatchActions["default"]), {}, (0, _createHandlerDnDItem["default"])(DRAG, _WatchActions["default"]), {
  getInitialState: function getInitialState() {
    var _this$props = this.props,
        _this$props$isShow = _this$props.isShow,
        isShow = _this$props$isShow === void 0 ? false : _this$props$isShow,
        _this$props$isEditMod = _this$props.isEditMode,
        isEditMode = _this$props$isEditMod === void 0 ? false : _this$props$isEditMod,
        store = _this$props.store;
    this.isShouldUpdateFind = false;
    return {
      isShow: isShow,
      isModeEdit: isEditMode,
      isShowFind: false,
      scrollClass: this._calcScrollClass(false, isEditMode),
      watchList: store.getWatchList()
    };
  },
  _calcScrollClass: function _calcScrollClass(isShowFind, isModeEdit) {
    var _classNames;

    return (0, _classnames["default"])((_classNames = {}, _classNames[CL.BROWSER_WATCH] = !(isShowFind && isModeEdit), _classNames[CL.BROWSER_WATCH__30] = isShowFind && !isModeEdit || !isShowFind && isModeEdit, _classNames[CL.BROWSER_WATCH__60] = isShowFind && isModeEdit, _classNames));
  },
  componentDidMount: function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  _onStore: function _onStore(actionType, data) {
    var _this$props2 = this.props,
        browserType = _this$props2.browserType,
        showAction = _this$props2.showAction,
        updateAction = _this$props2.updateAction;

    if (actionType === showAction && data === browserType) {
      this._handlerShow();
    } else if (actionType === updateAction) {
      var isModeEdit = this.state.isModeEdit;
      this.isShouldUpdateFind = true;
      this.setState({
        watchList: data,
        isShowFind: false,
        scrollClass: this._calcScrollClass(false, isModeEdit)
      });
    }
  },
  _handlerHide: function _handlerHide() {
    if (!this.props.isDoubleWatch) {
      this.setState({
        isShow: false
      });
    } else {
      _BrowserActions["default"].toggleWatchDbBrowser();
    }
  },
  _handlerShow: function _handlerShow() {
    if (!this.props.isDoubleWatch) {
      this.setState({
        isShow: true
      });
    }
  },
  _handlerToggleEditMode: function _handlerToggleEditMode() {
    var _this$state = this.state,
        isShowFind = _this$state.isShowFind,
        isModeEdit = _this$state.isModeEdit,
        _isModeEdit = !isModeEdit;

    this.setState({
      isModeEdit: _isModeEdit,
      scrollClass: this._calcScrollClass(isShowFind, _isModeEdit)
    });
  },
  _handlerToggleFindInput: function _handlerToggleFindInput() {
    var _this$state2 = this.state,
        isShowFind = _this$state2.isShowFind,
        isModeEdit = _this$state2.isModeEdit,
        _isShowFind = !isShowFind;

    this.setState({
      isShowFind: _isShowFind,
      scrollClass: this._calcScrollClass(_isShowFind, isModeEdit)
    });
  },
  _handlerEditGroup: function _handlerEditGroup() {
    _ComponentActions["default"].showModalDialog(_Type.ModalDialog.EDIT_WATCH_GROUP);
  },
  _handlerEditList: function _handlerEditList() {
    _ComponentActions["default"].showModalDialog(_Type.ModalDialog.EDIT_WATCH_LIST);
  },
  _handlerDouble: function _handlerDouble() {
    _BrowserActions["default"].toggleWatchDbBrowser();
  },
  _renderWatchList: function _renderWatchList(watchList) {
    var _this = this;

    var isModeEdit = this.state.isModeEdit;
    return watchList.groups.map(function (group, index) {
      var caption = group.caption,
          lists = group.lists;
      return _react["default"].createElement(_OpenClose["default"], {
        key: caption,
        style: styles.groupDiv,
        caption: caption,
        isClose: true,
        isDraggable: isModeEdit,
        option: {
          caption: caption
        },
        onDragStart: _this._handlerDragStartGroup,
        onDragEnter: _this._handlerDragEnterGroup,
        onDragOver: _this._handlerDragOverGroup,
        onDragLeave: _this._handlerDragLeaveGroup,
        onDrop: _this._handlerDropGroup
      }, lists && _this._renderLists(lists, caption));
    });
  },
  _renderLists: function _renderLists(lists, groupCaption) {
    var _this2 = this;

    var isModeEdit = this.state.isModeEdit;
    return lists.map(function (list) {
      var caption = list.caption,
          items = list.items;
      return _react["default"].createElement(_OpenClose["default"], {
        key: caption,
        fillOpen: '#80c040',
        style: styles.listDiv,
        styleNotSelected: styles.itemNotSelected,
        caption: caption,
        isClose: true,
        isDraggable: isModeEdit,
        option: {
          groupCaption: groupCaption,
          caption: caption
        },
        onDragStart: _this2._handlerDragStartList,
        onDragEnter: _this2._handlerDragEnterList,
        onDragOver: _this2._handlerDragOverList,
        onDragLeave: _this2._handlerDragLeaveList,
        onDrop: _this2._handlerDropList
      }, items && _this2._renderItems(items, groupCaption, caption));
    });
  },
  _handlerClickItem: function _handlerClickItem(item) {
    _ComponentActions["default"].showModalDialog(_Type.ModalDialog.LOAD_WATCH_ITEM, item);
  },
  _handlerRemoveItem: function _handlerRemoveItem(option, event) {
    event.stopPropagation();

    _WatchActions["default"].removeItem(option);
  },
  _renderItems: function _renderItems(items, groupCaption, listCaption) {
    var _this3 = this;

    var isModeEdit = this.state.isModeEdit;
    return items.map(function (item, index) {
      var caption = item.caption,
          _className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected';

      return _react["default"].createElement(_WatchItem["default"], {
        key: caption,
        className: _className,
        isModeEdit: isModeEdit,
        item: item,
        option: {
          groupCaption: groupCaption,
          listCaption: listCaption,
          caption: caption
        },
        onClick: _this3._handlerClickItem,
        onClose: _this3._handlerRemoveItem,
        onDragStart: _this3._handlerDragStartItem,
        onDragOver: _this3._handlerDragOverItem,
        onDragEnter: _this3._handlerDragEnterItem,
        onDragLeave: _this3._handlerDragLeaveItem,
        onDrop: _this3._handlerDropItem
      });
    });
  },
  _renderEditBar: function _renderEditBar(isModeEdit) {
    if (isModeEdit) {
      return _react["default"].createElement("div", {
        style: styles.editBarDiv
      }, _react["default"].createElement(_ButtonCircle["default"], {
        caption: "GROUP",
        title: "Edit Group",
        className: CL.BT_BAR,
        isWithoutDefault: true,
        onClick: this._handlerEditGroup
      }), _react["default"].createElement(_ButtonCircle["default"], {
        caption: "LIST",
        title: "Edit Group List",
        className: CL.BT_BAR,
        isWithoutDefault: true,
        style: styles.btEditBarList,
        onClick: this._handlerEditList
      }), _react["default"].createElement(_ButtonCircle["default"], {
        caption: "DB",
        title: "Double Watch Browser",
        className: CL.BT_BAR,
        isWithoutDefault: true,
        style: styles.btEditBarList,
        onClick: this._handlerDouble
      }));
    } else {
      return null;
    }
  },
  _renderFindInput: function _renderFindInput(watchList) {
    var _this4 = this;

    var isShowFind = this.state.isShowFind;

    var _isShouldUpdate = isShowFind && this.isShouldUpdateFind ? function () {
      _this4.isShouldUpdateFind = false;
      return true;
    } : false;

    return _react["default"].createElement(_ShowHide["default"], {
      isShow: isShowFind
    }, _react["default"].createElement(_WrapperInputSearch["default"], {
      style: styles.wrapperSearch,
      data: watchList,
      isShouldUpdate: _isShouldUpdate,
      onSelect: this._handlerClickItem
    }));
  },
  render: function render() {
    var _this$props3 = this.props,
        caption = _this$props3.caption,
        isDoubleWatch = _this$props3.isDoubleWatch,
        store = _this$props3.store,
        _this$state3 = this.state,
        isShow = _this$state3.isShow,
        isModeEdit = _this$state3.isModeEdit,
        scrollClass = _this$state3.scrollClass,
        watchList = _this$state3.watchList,
        _styleCaption = isDoubleWatch ? styles.captionRootDouble : styles.captionRoot,
        _captionEV = isModeEdit ? 'V' : 'E',
        _titleEV = isModeEdit ? "Toggle to View Mode" : "Toggle to Edit Mode";

    return _react["default"].createElement(_Browser["default"], {
      isShow: isShow,
      style: styles.browser
    }, _react["default"].createElement(_CaptionRow["default"], {
      styleRoot: _styleCaption,
      caption: caption,
      onClose: this._handlerHide
    }, _react["default"].createElement(_ButtonSave["default"], {
      className: CL.BT_CAPTION,
      store: store
    }), _react["default"].createElement(_ButtonCircle["default"], {
      className: CL.BT_CAPTION,
      caption: _captionEV,
      title: _titleEV,
      isWithoutDefault: true,
      onClick: this._handlerToggleEditMode
    }), _react["default"].createElement(_ButtonCircle["default"], {
      className: CL.BT_CAPTION,
      caption: "F",
      title: "Show/Hide : Find Item Input",
      isWithoutDefault: true,
      onClick: this._handlerToggleFindInput
    }), !isDoubleWatch && _react["default"].createElement(_ButtonCircle["default"], {
      className: CL.BT_CAPTION,
      caption: "B",
      title: "BackUp Watch Items to JSON File",
      isWithoutDefault: true,
      onClick: _WatchActions["default"].backupToJson
    }), !isDoubleWatch && _react["default"].createElement(_ButtonCircle["default"], {
      className: CL.BT_CAPTION,
      caption: "L",
      title: "Load Watch Items from JSON File",
      isWithoutDefault: true,
      onClick: _ComponentActions["default"].showModalDialog.bind(null, _Type.ModalDialog.LOAD_FILE, {
        onLoad: _WatchActions["default"].loadFromJson
      })
    })), this._renderEditBar(isModeEdit), watchList && this._renderFindInput(watchList), _react["default"].createElement(_ScrollPane["default"], {
      className: scrollClass
    }, watchList && this._renderWatchList(watchList)));
  }
}));
var _default = WatchBrowser;
exports["default"] = _default;
//# sourceMappingURL=WatchBrowser.js.map