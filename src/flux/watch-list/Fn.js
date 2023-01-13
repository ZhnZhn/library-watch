import {
  MSG_GROUP_EXISTED,
  MSG_LIST_EXISTED,
  MSG_ITEM_EXISTED,
  MSG_NOT_FOUND_ITEM,
  ALERT_DRAG_DROP_LIST,
  ALERT_DRAG_DROP_ITEM
} from '../../constants/Msg';

import ImArrayUtil from '../../utils/ImArrayUtil';
import ObjUtil from '../../utils/ObjUtil';
import {
  findArrIndexByProp,
  checkInArrSameByProp
} from '../../utils/ArrayUtil';

export const fResultNotFound = (
  itemType,
  name
) => ({
  isDone: false,
  message: MSG_NOT_FOUND_ITEM(itemType, name)
})

export const fResultGroupExisted = (
  caption
) => ({
  isDone: false,
  message: MSG_GROUP_EXISTED(caption)
})

export const fResultListExisted = (
  captionList,
  captionGroup
) => ({
   isDone : false,
   message : MSG_LIST_EXISTED(captionList, captionGroup)
})

export const fResultItemExisted = (
  caption,
  captionList
) => ({
   isDone: false,
   message: MSG_ITEM_EXISTED(caption, captionList)
})

/* for DragDrop */
export const fDragDropItemExisted = (
  dropId,
  dragId
) => ({
  isDone: false,
  alertItemId: `${dropId}:${dragId}`,
  alertCaption: ALERT_DRAG_DROP_ITEM.caption,
  alertDescr: ALERT_DRAG_DROP_ITEM.descr
})

export const fDragDropListExisted = (
  dropGroupCaption,
  dragListCaption
) => ({
   isDone: false,
   alertItemId: `${dropGroupCaption}:${dragListCaption}`,
   alertCaption: ALERT_DRAG_DROP_LIST.caption,
   alertDescr: ALERT_DRAG_DROP_LIST.descr
 })
 /* for DragDrop */

export const filter = ImArrayUtil.filterByProp.bind(null, 'caption')
export const getArrayWithObj = ImArrayUtil.push

export const getArrayWithRename = (
  arr,
  index,
  caption
) => [
   ...arr.slice(0, index),
   Object.assign({}, arr[index], {caption}),
   ...arr.slice(index+1)
]

/* for DragDrop */
export const insertItemInArray = ImArrayUtil.insertItem
/* for DragDrop */

export const findGroup = ObjUtil.findInPropArrayByPropItem.bind(null, 'groups', 'caption')
export const findList = ObjUtil.findInPropArrayByPropItem.bind(null, 'lists', 'caption')

export const findIndex = findArrIndexByProp.bind(null, 'caption')
export const checkIsInArraySameCaption = checkInArrSameByProp.bind(null, 'caption')
