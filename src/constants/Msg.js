export const setAlertMsgTo = (
  option,
  msg
) => {
  const {caption, descr} = msg;
  option.alertCaption = caption;
  option.alertDescr = descr;
}

export const MSG_WATCH_SAVED = 'Watch List has been saved.'
export const MSG_WATCH_PREV = 'Watch List has not been edited\nfrom previous save.'
export const MSG_WATCH_BACKUP_ZIP_FAILED = 'Watch Items Saving was Failed.'
export const MSG_WATCH_BACKUP_ZIP = (zipName) => `Watch Items have been saved to\n${zipName}`

export const MSG_NOT_FOUND_ITEM = (itemType, captionGroup) => `The ${itemType} witn name ${captionGroup} not found.`
export const MSG_GROUP_EXISTED = (caption) => `Group with name ${caption} is already existed.`
export const MSG_LIST_EXISTED = (captionList, captionGroup) => `List with name ${captionList}\n      In Group ${captionGroup} is already existed.`
export const MSG_ITEM_EXISTED = (caption, captionList) => `Item with name ${caption}\n      In List ${captionList} is already existed.`

export const MSG_EMPTY_NAME = (item) => `${item} name can not be empty.`
export const MSG_NOT_SELECTED = (item) => `${item} is not selected.`

export const MSG_TEST_DATE_OR_EMPTY = "YYYY-MM-DD format must be OR Empty"
export const MSG_NOT_VALID_FORMAT = (item) => `${item} is not in valid format.`

const _crAlerDescr = (
  caption,
  descr
) => ({
  caption,
  descr
})

export const ALERT_LOADING_IN_PROGRESS = _crAlerDescr(
  'Loading In Progress',
  'Loading the chart for this item-code in progress.\nIt seems several clicks on button Load repeatedly happend.'
)
export const ALERT_DRAG_DROP_ITEM = _crAlerDescr(
  'Drag Drop Item',
  'Item in List already has been existed.'
)
export const ALERT_DRAG_DROP_LIST = _crAlerDescr(
  'Drag Drop List',
  'List in Group already has been existed.'
)
export const ALERT_LOAD_FROM_JSON = _crAlerDescr(
  'Load from JSON File',
  'Can not Load Watch Items from JSON File'
)
export const ALERT_RUNTIME_ERROR = _crAlerDescr(
  'Runtime Error'
)
export const ALERT_NETWORK_ERROR = _crAlerDescr(
  'Network Error',
  'Network error is encountered. Failed to fetch. May be you are offline, a DNS lookup failure or a resource unreachable.'
)
export const ALERT_SERVICE_UNAVAILABLE = _crAlerDescr(
  'Service Unavailable 503',
  'Back-end server is at capacity. HTTP Code 503'
)
