'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Type = require('../../constants/Type');

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _WatchActions = require('../../flux/actions/WatchActions');

var _WatchActions2 = _interopRequireDefault(_WatchActions);

var _Browser = require('../zhnAtoms/Browser');

var _Browser2 = _interopRequireDefault(_Browser);

var _CaptionRow = require('../zhnAtoms/CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _ButtonCircle = require('../zhnAtoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

var _ScrollPane = require('../zhnAtoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _OpenClose = require('../zhnAtoms/OpenClose2');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

var _WatchItem = require('./WatchItem');

var _WatchItem2 = _interopRequireDefault(_WatchItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DRAG = {
  LIST: 'ItemList',
  ITEM: 'ItemType'
};

var styles = {
  browser: {
    paddingRight: '0px'
  },
  btCircle: {
    marginLeft: '20px'
  },
  scrollDiv: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  groupDiv: {
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

var WatchBrowser = _react2.default.createClass({
  displayName: 'WatchBrowser',
  getInitialState: function getInitialState() {
    var store = this.props.store;

    return {
      isShow: false,
      isModeEdit: false,
      watchList: store.getWatchList()
    };
  },
  componentWillMount: function componentWillMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  _onStore: function _onStore(actionType, data) {
    var _props = this.props;
    var browserType = _props.browserType;
    var showAction = _props.showAction;
    var updateAction = _props.updateAction;

    if (actionType === showAction && data === browserType) {
      this._handlerShow();
    } else if (actionType === updateAction) {
      this.setState({ watchList: data });
    }
  },
  _handlerHide: function _handlerHide() {
    this.setState({ isShow: false });
  },
  _handlerShow: function _handlerShow() {
    this.setState({ isShow: true });
  },
  _handlerSaveWatch: function _handlerSaveWatch() {
    _WatchActions2.default.saveWatch();
  },
  _handlerToggleEditMode: function _handlerToggleEditMode() {
    this.setState({ isModeEdit: !this.state.isModeEdit });
  },
  _handlerEditGroup: function _handlerEditGroup() {
    _ComponentActions2.default.showModalDialog(_Type.ModalDialog.EDIT_WATCH_GROUP);
  },
  _handlerEditList: function _handlerEditList() {
    _ComponentActions2.default.showModalDialog(_Type.ModalDialog.EDIT_WATCH_LIST);
  },
  _renderWatchList: function _renderWatchList(watchList) {
    var _this = this;

    return watchList.groups.map(function (group, index) {
      var caption = group.caption;
      var lists = group.lists;

      return _react2.default.createElement(
        _OpenClose2.default,
        {
          key: index,
          caption: caption,
          isClose: true
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
          style: styles.groupDiv,
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
  _handlerDragStartList: function _handlerDragStartList(_ref, ev) {
    var groupCaption = _ref.groupCaption;
    var caption = _ref.caption;

    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.dropEffect = "move";
    var _data = {
      dragId: groupCaption + ';' + caption,
      xType: DRAG.LIST
    };
    ev.dataTransfer.setData("text", JSON.stringify(_data));
  },
  _handlerDropList: function _handlerDropList(_ref2, ev) {
    var groupCaption = _ref2.groupCaption;
    var caption = _ref2.caption;
    var data = JSON.parse(ev.dataTransfer.getData("text"));
    var xType = data.xType;
    var dragId = data.dragId;
    var dropId = groupCaption + ';' + caption + ';';

    if (xType === DRAG.LIST) {
      if (dragId !== dropId) {
        ev.preventDefault();
        _WatchActions2.default.dragDropList({
          dragId: dragId,
          dropId: dropId
        });
      } else {
        return undefined;
      }
    } else if (xType === DRAG.ITEM) {
      ev.preventDefault();
      _WatchActions2.default.dragDropItem({
        dragId: dragId,
        dropId: dropId
      });
    }
  },
  _handlerDragEnterList: function _handlerDragEnterList(ev) {
    //ev.target.style.borderTop="3px solid yellow";
    ev.preventDefault();
  },
  _handlerDragOverList: function _handlerDragOverList(ev) {
    ev.preventDefault();
  },
  _handlerDragLeaveList: function _handlerDragLeaveList(ev) {
    //ev.target.style.borderTop="";
  },
  _handlerClickItem: function _handlerClickItem(item) {
    _ComponentActions2.default.showModalDialog(_Type.ModalDialog.LOAD_WATCH_ITEM, item);
  },
  _handlerRemoveItem: function _handlerRemoveItem(option, event) {
    event.stopPropagation();
    _WatchActions2.default.removeItem(option);
  },
  _handlerDragStartItem: function _handlerDragStartItem(_ref3, ev) {
    var groupCaption = _ref3.groupCaption;
    var listCaption = _ref3.listCaption;
    var caption = _ref3.caption;

    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.dropEffect = "move";
    //.setDragImage(img, 0, 0);
    var _data = {
      dragId: groupCaption + ';' + listCaption + ';' + caption,
      xType: DRAG.ITEM
    };
    ev.dataTransfer.setData("text", JSON.stringify(_data));
  },
  _handlerDropItem: function _handlerDropItem(_ref4, ev) {
    var groupCaption = _ref4.groupCaption;
    var listCaption = _ref4.listCaption;
    var caption = _ref4.caption;
    var data = JSON.parse(ev.dataTransfer.getData("text"));
    var xType = data.xType;
    var dragId = data.dragId;
    var dropId = groupCaption + ';' + listCaption + ';' + caption;

    if (xType === DRAG.ITEM) {
      if (dragId !== dropId) {
        ev.preventDefault();
        _WatchActions2.default.dragDropItem({
          dragId: dragId,
          dropId: dropId
        });
      } else {
        return undefined;
      }
    }
  },
  _handlerDragOverItem: function _handlerDragOverItem(ev) {
    ev.preventDefault();
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
        onDragEnter: _this3._handlerDragOverItem,
        onDrop: _this3._handlerDropItem
      });
    });
  },
  _renderEditBar: function _renderEditBar(isModeEdit) {
    if (isModeEdit) {
      return _react2.default.createElement(
        'div',
        { style: { marginBottom: '10px' } },
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
          style: { marginLeft: '20px' },
          onClick: this._handlerEditList
        })
      );
    } else {
      return null;
    }
  },
  render: function render() {
    var caption = this.props.caption;
    var _state = this.state;
    var isShow = _state.isShow;
    var isModeEdit = _state.isModeEdit;
    var watchList = _state.watchList;
    var _captionEV = isModeEdit ? 'V' : 'E';
    var _titleEV = isModeEdit ? "Toggle to View Mode" : "Toggle to Edit Mode";
    return _react2.default.createElement(
      _Browser2.default,
      { isShow: isShow, style: Object.assign({}, styles.browser, { maxWidth: '500px' }) },
      _react2.default.createElement(
        _CaptionRow2.default,
        {
          caption: caption,
          onClose: this._handlerHide
        },
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'S',
          title: 'Save Watch',
          style: styles.btCircle,
          onClick: this._handlerSaveWatch
        }),
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: _captionEV,
          title: _titleEV,
          style: styles.btCircle,
          onClick: this._handlerToggleEditMode
        })
      ),
      this._renderEditBar(isModeEdit),
      _react2.default.createElement(
        _ScrollPane2.default,
        { style: styles.scrollDiv },
        watchList && this._renderWatchList(watchList)
      )
    );
  }
});

exports.default = WatchBrowser;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\browser-watch\WatchBrowser.js.map