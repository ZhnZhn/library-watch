'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Msg = require('../../constants/Msg');

var _Msg2 = _interopRequireDefault(_Msg);

var _ImArrayUtil = require('../../utils/ImArrayUtil');

var _ImArrayUtil2 = _interopRequireDefault(_ImArrayUtil);

var _ObjUtil = require('../../utils/ObjUtil');

var _ObjUtil2 = _interopRequireDefault(_ObjUtil);

var _ArrayUtil = require('../../utils/ArrayUtil');

var _ArrayUtil2 = _interopRequireDefault(_ArrayUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Fn = {
  fResultNotFound: function fResultNotFound(itemType, name) {
    return { isDone: false, message: _Msg2.default.NOT_FOUND_ITEM(itemType, name) };
  },
  fResultGroupExisted: function fResultGroupExisted(caption) {
    return { isDone: false, message: _Msg2.default.GROUP_EXISTED(caption) };
  },
  fResultListExisted: function fResultListExisted(captionList, captionGroup) {
    return { isDone: false, message: _Msg2.default.LIST_EXISTED(captionList, captionGroup) };
  },
  fResultItemExisted: function fResultItemExisted(caption, captionList) {
    return { isDone: false, message: _Msg2.default.ITEM_EXISTED(caption, captionList) };
  },


  /* for DragDrop */
  fDragDropItemExisted: function fDragDropItemExisted(dropId, dragId) {
    return {
      isDone: false,
      alertItemId: dropId + ':' + dragId,
      alertCaption: _Msg2.default.Alert.DRAG_DROP_ITEM.caption,
      alertDescr: _Msg2.default.Alert.DRAG_DROP_ITEM.descr
    };
  },
  fDragDropListExisted: function fDragDropListExisted(dropGroupCaption, dragListCaption) {
    return {
      isDone: false,
      alertItemId: dropGroupCaption + ':' + dragListCaption,
      alertCaption: _Msg2.default.Alert.DRAG_DROP_LIST.caption,
      alertDescr: _Msg2.default.Alert.DRAG_DROP_LIST.descr
    };
  },

  /* for DragDrop */

  filter: _ImArrayUtil2.default.filterByProp.bind(null, 'caption'),
  getArrayWithObj: _ImArrayUtil2.default.push,

  getArrayWithRename: function getArrayWithRename(arr, index, caption) {
    return [].concat(_toConsumableArray(arr.slice(0, index)), [Object.assign({}, arr[index], { caption: caption })], _toConsumableArray(arr.slice(index + 1)));
  },

  /* for DragDrop */
  insertItemInArray: _ImArrayUtil2.default.insertItem,
  /* for DragDrop */

  findGroup: _ObjUtil2.default.findInPropArrayByPropItem.bind(null, 'groups', 'caption'),
  findList: _ObjUtil2.default.findInPropArrayByPropItem.bind(null, 'lists', 'caption'),

  findIndex: _ArrayUtil2.default.findIndexByProp.bind(null, 'caption'),
  checkIsInArraySameCaption: _ArrayUtil2.default.checkSameByProp.bind(null, 'caption')

};

exports.default = Fn;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\flux\watch-list\Fn.js.map