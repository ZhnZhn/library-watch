import {
  MSG_GROUP_EXISTED,
  MSG_LIST_EXISTED,
  MSG_ITEM_EXISTED,
  MSG_NOT_FOUND_ITEM,
  ALERT_DRAG_DROP_LIST,
  ALERT_DRAG_DROP_ITEM
} from '../../constants/Msg';

import {
  imArrPush,
  imArrInsertItem,
  imArrFilterByProp
} from '../../utils/ImArrayUtil';
import {
  findInPropArrayByPropItem
} from '../../utils/ObjUtil';
import {
  findByPropNameInArrIndex,
  isInArrByPropName
} from '../../utils/arrFn';

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

export const filter = imArrFilterByProp.bind(null, 'caption')
export const getArrayWithObj = imArrPush

export const getArrayWithRename = (
  arr,
  index,
  caption
) => [
   ...arr.slice(0, index),
   {...arr[index], caption},
   ...arr.slice(index+1)
]

/* for DragDrop */
export const insertItemInArray = imArrInsertItem
/* for DragDrop */

export const findGroup = findInPropArrayByPropItem.bind(null, 'groups', 'caption')
export const findList = findInPropArrayByPropItem.bind(null, 'lists', 'caption')

export const findIndex = findByPropNameInArrIndex.bind(null, 'caption')
export const checkIsInArraySameCaption = isInArrByPropName.bind(null, 'caption')
