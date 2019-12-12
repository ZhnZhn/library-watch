"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createReactClass = _interopRequireDefault(require("create-react-class"));

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _Msg = _interopRequireDefault(require("../../constants/Msg"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _TabPane = _interopRequireDefault(require("../zhn-moleculs/TabPane"));

var _Tab = _interopRequireDefault(require("../zhn-atoms/Tab"));

var _ListCreatePane = _interopRequireDefault(require("./ListCreatePane"));

var _ListEditPane = _interopRequireDefault(require("./ListEditPane"));

var _ListDeletePane = _interopRequireDefault(require("./ListDeletePane"));

//import PropTypes from 'prop-types'
var EditListDialog = (0, _createReactClass["default"])({
  displayName: 'EditListDialog',

  /*
  propTypes : {
    isShow : PropTypes.bool,
    store : PropTypes.object,
    onClose : PropTypes.func
  },
  */
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  },
  render: function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        store = _this$props.store,
        onClose = _this$props.onClose;
    return _react["default"].createElement(_ModalDialog["default"], {
      caption: "Watch Lists Edit",
      isShow: isShow,
      isWithButton: false,
      onClose: onClose
    }, _react["default"].createElement(_TabPane["default"], {
      key: "1",
      width: "380px"
    }, _react["default"].createElement(_Tab["default"], {
      title: "Create"
    }, _react["default"].createElement(_ListCreatePane["default"], {
      store: store,
      actionCompleted: _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
      actionFailed: _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
      forActionType: _WatchActions.WatchActionTypes.CREATE_LIST,
      msgOnNotSelect: _Msg["default"].NOT_SELECTED,
      msgOnIsEmptyName: _Msg["default"].IS_EMPTY_NAME,
      onCreate: _WatchActions["default"].createList,
      onClose: onClose
    })), _react["default"].createElement(_Tab["default"], {
      title: "Rename"
    }, _react["default"].createElement(_ListEditPane["default"], {
      store: store,
      actionCompleted: _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
      actionFailed: _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
      forActionType: _WatchActions.WatchActionTypes.RENAME_LIST,
      msgOnNotSelect: _Msg["default"].NOT_SELECTED,
      msgOnIsEmptyName: _Msg["default"].IS_EMPTY_NAME,
      onRename: _WatchActions["default"].renameList,
      onClose: onClose
    })), _react["default"].createElement(_Tab["default"], {
      title: "Delete"
    }, _react["default"].createElement(_ListDeletePane["default"], {
      store: store,
      actionCompleted: _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
      actionFailed: _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
      forActionType: _WatchActions.WatchActionTypes.DELETE_LIST,
      msgOnNotSelect: _Msg["default"].NOT_SELECTED,
      onDelete: _WatchActions["default"].deleteList,
      onClose: onClose
    }))));
  }
});
var _default = EditListDialog;
exports["default"] = _default;
//# sourceMappingURL=EditListDialog.js.map