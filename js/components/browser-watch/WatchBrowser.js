'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _WithDnDStyle = require('./with/WithDnDStyle');

var _WithDnDStyle2 = _interopRequireDefault(_WithDnDStyle);

var _createHandlerDnDGroup = require('./with/createHandlerDnDGroup');

var _createHandlerDnDGroup2 = _interopRequireDefault(_createHandlerDnDGroup);

var _createHandlerDnDList = require('./with/createHandlerDnDList');

var _createHandlerDnDList2 = _interopRequireDefault(_createHandlerDnDList);

var _createHandlerDnDItem = require('./with/createHandlerDnDItem');

var _createHandlerDnDItem2 = _interopRequireDefault(_createHandlerDnDItem);

var _Type = require('../../constants/Type');

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _BrowserActions = require('../../flux/actions/BrowserActions');

var _BrowserActions2 = _interopRequireDefault(_BrowserActions);

var _WatchActions = require('../../flux/actions/WatchActions');

var _WatchActions2 = _interopRequireDefault(_WatchActions);

var _Browser = require('../zhnAtoms/Browser');

var _Browser2 = _interopRequireDefault(_Browser);

var _CaptionRow = require('../zhnAtoms/CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _ButtonCircle = require('../zhnAtoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

var _ShowHide = require('../zhnAtoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

var _WrapperInputSearch = require('./WrapperInputSearch');

var _WrapperInputSearch2 = _interopRequireDefault(_WrapperInputSearch);

var _ScrollPane = require('../zhnAtoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _OpenClose = require('../zhnAtoms/OpenClose2');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

var _WatchItem = require('./WatchItem');

var _WatchItem2 = _interopRequireDefault(_WatchItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DRAG = {
  GROUP: 'GROUP',
  LIST: 'LIST',
  ITEM: 'ITEM'
};

var CLASS = {
  BROWSER_WATCH: "browser-watch",
  BROWSER_WATCH__30: "browser-watch--1r",
  BROWSER_WATCH__60: "browser-watch--2r"
};

var styles = {
  browser: {
    paddingRight: '0px',
    maxWidth: '500px'
  },
  captionRoot: {
    minWidth: '340px'
  },
  captionRootDouble: {
    minWidth: '310px'
  },
  editBarDiv: {
    marginBottom: '10px'
  },
  btCircle: {
    marginLeft: '20px'
  },
  btCircleRight: {
    marginLeft: '20px',
    marginRight: '20px'
  },
  btEditBarList: {
    marginLeft: '20px'
  },
  wrapperSearch: {
    paddingBottom: '8px',
    width: '100%',
    paddingRight: '24px'
  },
  scrollDiv: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  groupDiv: {
    lineHeight: 2
  },
  listDiv: {
    marginLeft: '8px',
    paddingLeft: '12px',
    borderLeft: '1px solid yellow',
    lineHeight: 2
  },
  itemNotSelected: {
    borderBottom: '1px solid rgba(128, 192, 64, 0.6)',
    marginRight: '10px'
  }
};

var WatchBrowser = _react2.default.createClass(_extends({
  displayName: 'WatchBrowser'
}, _WithDnDStyle2.default, (0, _createHandlerDnDGroup2.default)(DRAG, _WatchActions2.default), (0, _createHandlerDnDList2.default)(DRAG, _WatchActions2.default), (0, _createHandlerDnDItem2.default)(DRAG, _WatchActions2.default), {
  getInitialState: function getInitialState() {
    var _props = this.props;
    var _props$isShow = _props.isShow;
    var isShow = _props$isShow === undefined ? false : _props$isShow;
    var _props$isEditMode = _props.isEditMode;
    var isEditMode = _props$isEditMode === undefined ? false : _props$isEditMode;
    var store = _props.store;


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

    return (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, CLASS.BROWSER_WATCH, !(isShowFind && isModeEdit)), _defineProperty(_classNames, CLASS.BROWSER_WATCH__30, isShowFind && !isModeEdit || !isShowFind && isModeEdit), _defineProperty(_classNames, CLASS.BROWSER_WATCH__60, isShowFind && isModeEdit), _classNames));
  },
  componentWillMount: function componentWillMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  _onStore: function _onStore(actionType, data) {
    var _props2 = this.props;
    var browserType = _props2.browserType;
    var showAction = _props2.showAction;
    var updateAction = _props2.updateAction;

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
      this.setState({ isShow: false });
    } else {
      _BrowserActions2.default.toggleWatchDbBrowser();
    }
  },
  _handlerShow: function _handlerShow() {
    if (!this.props.isDoubleWatch) {
      this.setState({ isShow: true });
    }
  },
  _handlerSaveWatch: function _handlerSaveWatch() {
    _WatchActions2.default.saveWatch();
  },
  _handlerToggleEditMode: function _handlerToggleEditMode() {
    var _state = this.state;
    var isShowFind = _state.isShowFind;
    var isModeEdit = _state.isModeEdit;
    var _isModeEdit = !isModeEdit;
    this.setState({
      isModeEdit: _isModeEdit,
      scrollClass: this._calcScrollClass(isShowFind, _isModeEdit)
    });
  },
  _handlerToggleFindInput: function _handlerToggleFindInput() {
    var _state2 = this.state;
    var isShowFind = _state2.isShowFind;
    var isModeEdit = _state2.isModeEdit;
    var _isShowFind = !isShowFind;
    this.setState({
      isShowFind: _isShowFind,
      scrollClass: this._calcScrollClass(_isShowFind, isModeEdit)
    });
  },
  _handlerEditGroup: function _handlerEditGroup() {
    _ComponentActions2.default.showModalDialog(_Type.ModalDialog.EDIT_WATCH_GROUP);
  },
  _handlerEditList: function _handlerEditList() {
    _ComponentActions2.default.showModalDialog(_Type.ModalDialog.EDIT_WATCH_LIST);
  },
  _handlerDouble: function _handlerDouble() {
    _BrowserActions2.default.toggleWatchDbBrowser();
  },
  _renderWatchList: function _renderWatchList(watchList) {
    var _this = this;

    var isModeEdit = this.state.isModeEdit;

    return watchList.groups.map(function (group, index) {
      var caption = group.caption;
      var lists = group.lists;

      return _react2.default.createElement(
        _OpenClose2.default,
        {
          key: caption,
          style: styles.groupDiv,
          caption: caption,
          isClose: true,
          isDraggable: isModeEdit,
          option: { caption: caption },
          onDragStart: _this._handlerDragStartGroup,
          onDragEnter: _this._handlerDragEnterGroup,
          onDragOver: _this._handlerDragOverGroup,
          onDragLeave: _this._handlerDragLeaveGroup,
          onDrop: _this._handlerDropGroup
        },
        lists && _this._renderLists(lists, caption)
      );
    });
  },
  _renderLists: function _renderLists(lists, groupCaption) {
    var _this2 = this;

    var isModeEdit = this.state.isModeEdit;

    return lists.map(function (list) {
      var caption = list.caption;
      var items = list.items;

      return _react2.default.createElement(
        _OpenClose2.default,
        {
          key: caption,
          fillOpen: '#80c040',
          style: styles.listDiv,
          styleNotSelected: styles.itemNotSelected,
          caption: caption,
          isClose: true,
          isDraggable: isModeEdit,
          option: { groupCaption: groupCaption, caption: caption },
          onDragStart: _this2._handlerDragStartList,
          onDragEnter: _this2._handlerDragEnterList,
          onDragOver: _this2._handlerDragOverList,
          onDragLeave: _this2._handlerDragLeaveList,
          onDrop: _this2._handlerDropList
        },
        items && _this2._renderItems(items, groupCaption, caption)
      );
    });
  },
  _handlerClickItem: function _handlerClickItem(item) {
    _ComponentActions2.default.showModalDialog(_Type.ModalDialog.LOAD_WATCH_ITEM, item);
  },
  _handlerRemoveItem: function _handlerRemoveItem(option, event) {
    event.stopPropagation();
    _WatchActions2.default.removeItem(option);
  },
  _renderItems: function _renderItems(items, groupCaption, listCaption) {
    var _this3 = this;

    var isModeEdit = this.state.isModeEdit;

    return items.map(function (item, index) {
      var caption = item.caption;
      var _className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected';
      return _react2.default.createElement(_WatchItem2.default, {
        key: caption,
        className: _className,
        isModeEdit: isModeEdit,
        item: item,
        option: { groupCaption: groupCaption, listCaption: listCaption, caption: caption },
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
      return _react2.default.createElement(
        'div',
        { style: styles.editBarDiv },
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'GROUP',
          title: 'Edit Group',
          className: 'bt__watch__bar',
          isWithoutDefault: true,
          onClick: this._handlerEditGroup
        }),
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'LIST',
          title: 'Edit Group List',
          className: 'bt__watch__bar',
          isWithoutDefault: true,
          style: styles.btEditBarList,
          onClick: this._handlerEditList
        }),
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'DB',
          title: 'Double Watch Browser',
          className: 'bt__watch__bar',
          isWithoutDefault: true,
          style: styles.btEditBarList,
          onClick: this._handlerDouble
        })
      );
    } else {
      return null;
    }
  },
  _renderFindInput: function _renderFindInput(watchList) {
    var _this4 = this;

    var isShowFind = this.state.isShowFind;

    var _isShouldUpdate = isShowFind && this.isShouldUpdateFind ? function () {
      _this4.isShouldUpdateFind = false;return true;
    } : false;

    return _react2.default.createElement(
      _ShowHide2.default,
      { isShow: isShowFind },
      _react2.default.createElement(_WrapperInputSearch2.default, {
        style: styles.wrapperSearch,
        data: watchList,
        isShouldUpdate: _isShouldUpdate,
        onSelect: this._handlerClickItem
      })
    );
  },
  render: function render() {
    var _props3 = this.props;
    var caption = _props3.caption;
    var isDoubleWatch = _props3.isDoubleWatch;
    var _state3 = this.state;
    var isShow = _state3.isShow;
    var isModeEdit = _state3.isModeEdit;
    var scrollClass = _state3.scrollClass;
    var watchList = _state3.watchList;
    var _styleCaption = isDoubleWatch ? styles.captionRootDouble : styles.captionRoot;
    var _captionEV = isModeEdit ? 'V' : 'E';
    var _titleEV = isModeEdit ? "Toggle to View Mode" : "Toggle to Edit Mode";

    return _react2.default.createElement(
      _Browser2.default,
      {
        isShow: isShow,
        style: styles.browser
      },
      _react2.default.createElement(
        _CaptionRow2.default,
        {
          styleRoot: _styleCaption,
          caption: caption,
          onClose: this._handlerHide
        },
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'S',
          title: 'Save Watch Items to Locale Storage',
          style: styles.btCircle,
          onClick: this._handlerSaveWatch
        }),
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: _captionEV,
          title: _titleEV,
          style: styles.btCircle,
          onClick: this._handlerToggleEditMode
        }),
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'F',
          title: 'Show/Hide : Find Item Input',
          style: styles.btCircle,
          onClick: this._handlerToggleFindInput
        }),
        !isDoubleWatch && _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'B',
          title: 'BackUp Watch Items to JSON File',
          style: styles.btCircle,
          onClick: _WatchActions2.default.backupToJson
        }),
        !isDoubleWatch && _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'L',
          title: 'Load Watch Items from JSON File',
          style: styles.btCircleRight,
          onClick: _ComponentActions2.default.showModalDialog.bind(null, _Type.ModalDialog.LOAD_FILE, {
            onLoad: _WatchActions2.default.loadFromJson
          })
        })
      ),
      this._renderEditBar(isModeEdit),
      watchList && this._renderFindInput(watchList),
      _react2.default.createElement(
        _ScrollPane2.default,
        { className: scrollClass },
        watchList && this._renderWatchList(watchList)
      )
    );
  }
}));

exports.default = WatchBrowser;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\browser-watch\WatchBrowser.js.map