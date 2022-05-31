"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Msg = require("../../constants/Msg");

var _ImArrayUtil = _interopRequireDefault(require("../../utils/ImArrayUtil"));

var _ObjUtil = _interopRequireDefault(require("../../utils/ObjUtil"));

var _ArrayUtil = _interopRequireDefault(require("../../utils/ArrayUtil"));

var Fn = {
  fResultNotFound: function fResultNotFound(itemType, name) {
    return {
      isDone: false,
      message: (0, _Msg.MSG_NOT_FOUND_ITEM)(itemType, name)
    };
  },
  fResultGroupExisted: function fResultGroupExisted(caption) {
    return {
      isDone: false,
      message: (0, _Msg.MSG_GROUP_EXISTED)(caption)
    };
  },
  fResultListExisted: function fResultListExisted(captionList, captionGroup) {
    return {
      isDone: false,
      message: (0, _Msg.MSG_LIST_EXISTED)(captionList, captionGroup)
    };
  },
  fResultItemExisted: function fResultItemExisted(caption, captionList) {
    return {
      isDone: false,
      message: (0, _Msg.MSG_ITEM_EXISTED)(caption, captionList)
    };
  },

  /* for DragDrop */
  fDragDropItemExisted: function fDragDropItemExisted(dropId, dragId) {
    return {
      isDone: false,
      alertItemId: dropId + ":" + dragId,
      alertCaption: _Msg.ALERT_DRAG_DROP_ITEM.caption,
      alertDescr: _Msg.ALERT_DRAG_DROP_ITEM.descr
    };
  },
  fDragDropListExisted: function fDragDropListExisted(dropGroupCaption, dragListCaption) {
    return {
      isDone: false,
      alertItemId: dropGroupCaption + ":" + dragListCaption,
      alertCaption: _Msg.ALERT_DRAG_DROP_LIST.caption,
      alertDescr: _Msg.ALERT_DRAG_DROP_LIST.descr
    };
  },

  /* for DragDrop */
  filter: _ImArrayUtil["default"].filterByProp.bind(null, 'caption'),
  getArrayWithObj: _ImArrayUtil["default"].push,
  getArrayWithRename: function getArrayWithRename(arr, index, caption) {
    return [].concat(arr.slice(0, index), [Object.assign({}, arr[index], {
      caption: caption
    })], arr.slice(index + 1));
  },

  /* for DragDrop */
  insertItemInArray: _ImArrayUtil["default"].insertItem,

  /* for DragDrop */
  findGroup: _ObjUtil["default"].findInPropArrayByPropItem.bind(null, 'groups', 'caption'),
  findList: _ObjUtil["default"].findInPropArrayByPropItem.bind(null, 'lists', 'caption'),
  findIndex: _ArrayUtil["default"].findIndexByProp.bind(null, 'caption'),
  checkIsInArraySameCaption: _ArrayUtil["default"].checkSameByProp.bind(null, 'caption')
};
var _default = Fn;
exports["default"] = _default;
//# sourceMappingURL=Fn.js.map