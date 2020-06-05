"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _Msg = _interopRequireDefault(require("../../constants/Msg"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _TabPane = _interopRequireDefault(require("../zhn-moleculs/TabPane"));

var _Tab = _interopRequireDefault(require("../zhn-atoms/Tab"));

var _ListCreatePane = _interopRequireDefault(require("./ListCreatePane"));

var _ListEditPane = _interopRequireDefault(require("./ListEditPane"));

var _ListDeletePane = _interopRequireDefault(require("./ListDeletePane"));

//import PropTypes from 'prop-types'
var _areEqual = function _areEqual(prevProps, nextProps) {
  return prevProps.isShow === nextProps.isShow;
};

var EditListDialog = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var isShow = _ref.isShow,
      store = _ref.store,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement(_ModalDialog["default"], {
    caption: "Watch Lists Edit",
    isShow: isShow,
    isWithButton: false,
    onClose: onClose
  }, /*#__PURE__*/_react["default"].createElement(_TabPane["default"], {
    key: "1",
    width: "380px"
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    title: "Create"
  }, /*#__PURE__*/_react["default"].createElement(_ListCreatePane["default"], {
    store: store,
    actionCompleted: _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    actionFailed: _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    forActionType: _WatchActions.WatchActionTypes.CREATE_LIST,
    msgOnNotSelect: _Msg["default"].NOT_SELECTED,
    msgOnIsEmptyName: _Msg["default"].IS_EMPTY_NAME,
    onCreate: _WatchActions["default"].createList,
    onClose: onClose
  })), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    title: "Rename"
  }, /*#__PURE__*/_react["default"].createElement(_ListEditPane["default"], {
    store: store,
    actionCompleted: _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    actionFailed: _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    forActionType: _WatchActions.WatchActionTypes.RENAME_LIST,
    msgOnNotSelect: _Msg["default"].NOT_SELECTED,
    msgOnIsEmptyName: _Msg["default"].IS_EMPTY_NAME,
    onRename: _WatchActions["default"].renameList,
    onClose: onClose
  })), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    title: "Delete"
  }, /*#__PURE__*/_react["default"].createElement(_ListDeletePane["default"], {
    store: store,
    actionCompleted: _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    actionFailed: _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    forActionType: _WatchActions.WatchActionTypes.DELETE_LIST,
    msgOnNotSelect: _Msg["default"].NOT_SELECTED,
    onDelete: _WatchActions["default"].deleteList,
    onClose: onClose
  }))));
}, _areEqual);
/*
EditListDialog.propTypes : {
isShow : PropTypes.bool,
store : PropTypes.object,
onClose : PropTypes.func
},
*/


var _default = EditListDialog;
exports["default"] = _default;
//# sourceMappingURL=EditListDialog.js.map