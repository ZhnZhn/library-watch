"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _withWatchDnD = _interopRequireDefault(require("./decorators/withWatchDnD"));

var _Type = require("../../constants/Type");

var _ComponentActions = _interopRequireDefault(require("../../flux/actions/ComponentActions"));

var _BrowserActions = _interopRequireDefault(require("../../flux/actions/BrowserActions"));

var _WatchActions = _interopRequireDefault(require("../../flux/actions/WatchActions"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _WrapperInputSearch = _interopRequireDefault(require("./WrapperInputSearch"));

var _WatchItem = _interopRequireDefault(require("./WatchItem"));

var _class, _temp;

var Browser = _Comp["default"].Browser,
    CaptionRow = _Comp["default"].CaptionRow,
    ButtonCircle = _Comp["default"].ButtonCircle,
    ButtonSave = _Comp["default"].ButtonSave,
    ShowHide = _Comp["default"].ShowHide,
    ScrollPane = _Comp["default"].ScrollPane,
    OpenClose2 = _Comp["default"].OpenClose2;
var C_GROUP_OPEN = '#1b2836';
var C_LIST_OPEN = '#80c040';
var DRAG = {
  GROUP: 'GROUP',
  C_GROUP_ENTER: C_GROUP_OPEN,
  LIST: 'LIST',
  C_LIST_ENTER: C_LIST_OPEN,
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

var _calcScrollClass = function _calcScrollClass(isShowFind, isModeEdit) {
  var _clsx;

  return (0, _clsx2["default"])((_clsx = {}, _clsx[CL.BROWSER_WATCH] = !(isShowFind && isModeEdit), _clsx[CL.BROWSER_WATCH__30] = isShowFind && !isModeEdit || !isShowFind && isModeEdit, _clsx[CL.BROWSER_WATCH__60] = isShowFind && isModeEdit, _clsx));
};

var WatchBrowser = (0, _withWatchDnD["default"])(_class = (_temp = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(WatchBrowser, _Component);

  function WatchBrowser(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          browserType = _this$props.browserType,
          showAction = _this$props.showAction,
          updateAction = _this$props.updateAction;

      if (actionType === showAction && data === browserType) {
        _this._handlerShow();
      } else if (actionType === updateAction) {
        var isModeEdit = _this.state.isModeEdit;
        _this.isShouldUpdateFind = true;

        _this.setState({
          watchList: data,
          isShowFind: false,
          scrollClass: _calcScrollClass(false, isModeEdit)
        });
      }
    };

    _this._handlerHide = function () {
      if (!_this.props.isDoubleWatch) {
        _this.setState({
          isShow: false
        });
      } else {
        _BrowserActions["default"].toggleWatchDbBrowser();
      }
    };

    _this._handlerShow = function () {
      if (!_this.props.isDoubleWatch) {
        _this.setState({
          isShow: true
        });
      }
    };

    _this._handlerToggleEditMode = function () {
      var _this$state = _this.state,
          isShowFind = _this$state.isShowFind,
          isModeEdit = _this$state.isModeEdit,
          _isModeEdit = !isModeEdit;

      _this.setState({
        isModeEdit: _isModeEdit,
        scrollClass: _calcScrollClass(isShowFind, _isModeEdit)
      });
    };

    _this._handlerToggleFindInput = function () {
      var _this$state2 = _this.state,
          isShowFind = _this$state2.isShowFind,
          isModeEdit = _this$state2.isModeEdit,
          _isShowFind = !isShowFind;

      _this.setState({
        isShowFind: _isShowFind,
        scrollClass: _calcScrollClass(_isShowFind, isModeEdit)
      });
    };

    _this._renderWatchList = function (watchList) {
      var isModeEdit = _this.state.isModeEdit;
      return watchList.groups.map(function (group, index) {
        var caption = group.caption,
            lists = group.lists;
        return /*#__PURE__*/_react["default"].createElement(OpenClose2, {
          key: caption,
          style: styles.groupDiv,
          caption: caption,
          isClose: true,
          isDraggable: isModeEdit,
          option: {
            caption: caption
          },
          onDragStart: _this._hDragStartGroup,
          onDragEnter: _this._hDragEnterGroup,
          onDragOver: _this._hDragOverGroup,
          onDragLeave: _this._hDragLeaveGroup,
          onDrop: _this._hDropGroup
        }, lists && _this._renderLists(lists, caption));
      });
    };

    _this._renderLists = function (lists, groupCaption) {
      var isModeEdit = _this.state.isModeEdit;
      return lists.map(function (list) {
        var caption = list.caption,
            items = list.items;
        return /*#__PURE__*/_react["default"].createElement(OpenClose2, {
          key: caption,
          fillOpen: "#80c040",
          style: styles.listDiv,
          styleNotSelected: styles.itemNotSelected,
          caption: caption,
          isClose: true,
          isDraggable: isModeEdit,
          option: {
            groupCaption: groupCaption,
            caption: caption
          },
          onDragStart: _this._hDragStartList,
          onDragEnter: _this._hDragEnterList,
          onDragOver: _this._hDragOverList,
          onDragLeave: _this._hDragLeaveList,
          onDrop: _this._hDropList
        }, items && _this._renderItems(items, groupCaption, caption));
      });
    };

    _this._renderItems = function (items, groupCaption, listCaption) {
      var isModeEdit = _this.state.isModeEdit;
      return items.map(function (item, index) {
        var caption = item.caption,
            _className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected';

        return /*#__PURE__*/_react["default"].createElement(_WatchItem["default"], {
          key: caption,
          className: _className,
          isModeEdit: isModeEdit,
          item: item,
          option: {
            groupCaption: groupCaption,
            listCaption: listCaption,
            caption: caption
          },
          onClick: _this._handlerClickItem,
          onClose: _this._handlerRemoveItem,
          onDragStart: _this._hDragStartItem,
          onDragOver: _this._hDragOverItem,
          onDragEnter: _this._hDragEnterItem,
          onDragLeave: _this._hDragLeaveItem,
          onDrop: _this._hDropItem
        });
      });
    };

    _this._renderEditBar = function (isModeEdit) {
      if (isModeEdit) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: styles.editBarDiv
        }, /*#__PURE__*/_react["default"].createElement(ButtonCircle, {
          caption: "GROUP",
          title: "Edit Group",
          className: CL.BT_BAR,
          isWithoutDefault: true,
          onClick: _this._handlerEditGroup
        }), /*#__PURE__*/_react["default"].createElement(ButtonCircle, {
          caption: "LIST",
          title: "Edit Group List",
          className: CL.BT_BAR,
          isWithoutDefault: true,
          style: styles.btEditBarList,
          onClick: _this._handlerEditList
        }), /*#__PURE__*/_react["default"].createElement(ButtonCircle, {
          caption: "DB",
          title: "Double Watch Browser",
          className: CL.BT_BAR,
          isWithoutDefault: true,
          style: styles.btEditBarList,
          onClick: _this._handlerDouble
        }));
      } else {
        return null;
      }
    };

    _this._renderFindInput = function (watchList) {
      var isShowFind = _this.state.isShowFind;

      var _isShouldUpdate = isShowFind && _this.isShouldUpdateFind ? function () {
        _this.isShouldUpdateFind = false;
        return true;
      } : false;

      return /*#__PURE__*/_react["default"].createElement(ShowHide, {
        isShow: isShowFind
      }, /*#__PURE__*/_react["default"].createElement(_WrapperInputSearch["default"], {
        style: styles.wrapperSearch,
        data: watchList,
        isShouldUpdate: _isShouldUpdate,
        onSelect: _this._handlerClickItem
      }));
    };

    var _props$isShow = props.isShow,
        isShow = _props$isShow === void 0 ? false : _props$isShow,
        _props$isEditMode = props.isEditMode,
        isEditMode = _props$isEditMode === void 0 ? false : _props$isEditMode,
        store = props.store;

    _this._bindDnDGroup(DRAG, _WatchActions["default"]);

    _this._bindDnDList(DRAG, _WatchActions["default"]);

    _this._bindDnDItem(DRAG, _WatchActions["default"]);

    _this.isShouldUpdateFind = false;
    _this.state = {
      isShow: isShow,
      isModeEdit: isEditMode,
      isShowFind: false,
      scrollClass: _calcScrollClass(false, isEditMode),
      watchList: store.getWatchList()
    };
    return _this;
  }

  var _proto = WatchBrowser.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto._handlerEditGroup = function _handlerEditGroup() {
    _ComponentActions["default"].showModalDialog(_Type.ModalDialog.EDIT_WATCH_GROUP);
  };

  _proto._handlerEditList = function _handlerEditList() {
    _ComponentActions["default"].showModalDialog(_Type.ModalDialog.EDIT_WATCH_LIST);
  };

  _proto._handlerDouble = function _handlerDouble() {
    _BrowserActions["default"].toggleWatchDbBrowser();
  };

  _proto._handlerClickItem = function _handlerClickItem(item) {
    _ComponentActions["default"].showModalDialog(_Type.ModalDialog.LOAD_WATCH_ITEM, item);
  };

  _proto._handlerRemoveItem = function _handlerRemoveItem(option, event) {
    event.stopPropagation();

    _WatchActions["default"].removeItem(option);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        caption = _this$props2.caption,
        isDoubleWatch = _this$props2.isDoubleWatch,
        store = _this$props2.store,
        _this$state3 = this.state,
        isShow = _this$state3.isShow,
        isModeEdit = _this$state3.isModeEdit,
        scrollClass = _this$state3.scrollClass,
        watchList = _this$state3.watchList,
        _styleCaption = isDoubleWatch ? styles.captionRootDouble : styles.captionRoot,
        _captionEV = isModeEdit ? 'V' : 'E',
        _titleEV = isModeEdit ? "Toggle to View Mode" : "Toggle to Edit Mode";

    return /*#__PURE__*/_react["default"].createElement(Browser, {
      isShow: isShow,
      style: styles.browser
    }, /*#__PURE__*/_react["default"].createElement(CaptionRow, {
      styleRoot: _styleCaption,
      caption: caption,
      onClose: this._handlerHide
    }, /*#__PURE__*/_react["default"].createElement(ButtonSave, {
      className: CL.BT_CAPTION,
      store: store
    }), /*#__PURE__*/_react["default"].createElement(ButtonCircle, {
      className: CL.BT_CAPTION,
      caption: _captionEV,
      title: _titleEV,
      isWithoutDefault: true,
      onClick: this._handlerToggleEditMode
    }), /*#__PURE__*/_react["default"].createElement(ButtonCircle, {
      className: CL.BT_CAPTION,
      caption: "F",
      title: "Show/Hide : Find Item Input",
      isWithoutDefault: true,
      onClick: this._handlerToggleFindInput
    }), !isDoubleWatch && /*#__PURE__*/_react["default"].createElement(ButtonCircle, {
      className: CL.BT_CAPTION,
      caption: "B",
      title: "BackUp Watch Items to JSON File",
      isWithoutDefault: true,
      onClick: _WatchActions["default"].backupToJson
    }), !isDoubleWatch && /*#__PURE__*/_react["default"].createElement(ButtonCircle, {
      className: CL.BT_CAPTION,
      caption: "L",
      title: "Load Watch Items from JSON File",
      isWithoutDefault: true,
      onClick: _ComponentActions["default"].showModalDialog.bind(null, _Type.ModalDialog.LOAD_FILE, {
        onLoad: _WatchActions["default"].loadFromJson
      })
    })), this._renderEditBar(isModeEdit), watchList && this._renderFindInput(watchList), /*#__PURE__*/_react["default"].createElement(ScrollPane, {
      className: scrollClass
    }, watchList && this._renderWatchList(watchList)));
  };

  return WatchBrowser;
}(_react.Component), _temp)) || _class;

var _default = WatchBrowser;
exports["default"] = _default;
//# sourceMappingURL=WatchBrowser.js.map