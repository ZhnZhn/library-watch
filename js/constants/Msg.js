"use strict";

exports.__esModule = true;
exports.setAlertMsgTo = exports.MSG_WATCH_SAVED = exports.MSG_WATCH_PREV = exports.MSG_WATCH_BACKUP_ZIP_FAILED = exports.MSG_WATCH_BACKUP_ZIP = exports.MSG_TEST_DATE_OR_EMPTY = exports.MSG_NOT_VALID_FORMAT = exports.MSG_NOT_SELECTED = exports.MSG_NOT_FOUND_ITEM = exports.MSG_LIST_EXISTED = exports.MSG_ITEM_EXISTED = exports.MSG_GROUP_EXISTED = exports.MSG_EMPTY_NAME = exports.ALERT_SERVICE_UNAVAILABLE = exports.ALERT_RUNTIME_ERROR = exports.ALERT_NETWORK_ERROR = exports.ALERT_LOAD_FROM_JSON = exports.ALERT_LOADING_IN_PROGRESS = exports.ALERT_DRAG_DROP_LIST = exports.ALERT_DRAG_DROP_ITEM = void 0;
const setAlertMsgTo = (option, msg) => {
  const {
    caption,
    descr
  } = msg;
  option.alertCaption = caption;
  option.alertDescr = descr;
};
exports.setAlertMsgTo = setAlertMsgTo;
const MSG_WATCH_SAVED = exports.MSG_WATCH_SAVED = 'Watch List has been saved.';
const MSG_WATCH_PREV = exports.MSG_WATCH_PREV = 'Watch List has not been edited\nfrom previous save.';
const MSG_WATCH_BACKUP_ZIP_FAILED = exports.MSG_WATCH_BACKUP_ZIP_FAILED = 'Watch Items Saving was Failed.';
const MSG_WATCH_BACKUP_ZIP = zipName => `Watch Items have been saved to\n${zipName}`;
exports.MSG_WATCH_BACKUP_ZIP = MSG_WATCH_BACKUP_ZIP;
const MSG_NOT_FOUND_ITEM = (itemType, captionGroup) => `The ${itemType} witn name ${captionGroup} not found.`;
exports.MSG_NOT_FOUND_ITEM = MSG_NOT_FOUND_ITEM;
const MSG_GROUP_EXISTED = caption => `Group with name ${caption} is already existed.`;
exports.MSG_GROUP_EXISTED = MSG_GROUP_EXISTED;
const MSG_LIST_EXISTED = (captionList, captionGroup) => `List with name ${captionList}\n      In Group ${captionGroup} is already existed.`;
exports.MSG_LIST_EXISTED = MSG_LIST_EXISTED;
const MSG_ITEM_EXISTED = (caption, captionList) => `Item with name ${caption}\n      In List ${captionList} is already existed.`;
exports.MSG_ITEM_EXISTED = MSG_ITEM_EXISTED;
const MSG_EMPTY_NAME = item => `${item} name can not be empty.`;
exports.MSG_EMPTY_NAME = MSG_EMPTY_NAME;
const MSG_NOT_SELECTED = item => `${item} is not selected.`;
exports.MSG_NOT_SELECTED = MSG_NOT_SELECTED;
const MSG_TEST_DATE_OR_EMPTY = exports.MSG_TEST_DATE_OR_EMPTY = "YYYY-MM-DD format must be OR Empty";
const MSG_NOT_VALID_FORMAT = item => `${item} is not in valid format.`;
exports.MSG_NOT_VALID_FORMAT = MSG_NOT_VALID_FORMAT;
const _crAlerDescr = (caption, descr) => ({
  caption,
  descr
});
const ALERT_LOADING_IN_PROGRESS = exports.ALERT_LOADING_IN_PROGRESS = _crAlerDescr('Loading In Progress', 'Loading the chart for this item-code in progress.\nIt seems several clicks on button Load repeatedly happend.');
const ALERT_DRAG_DROP_ITEM = exports.ALERT_DRAG_DROP_ITEM = _crAlerDescr('Drag Drop Item', 'Item in List already has been existed.');
const ALERT_DRAG_DROP_LIST = exports.ALERT_DRAG_DROP_LIST = _crAlerDescr('Drag Drop List', 'List in Group already has been existed.');
const ALERT_LOAD_FROM_JSON = exports.ALERT_LOAD_FROM_JSON = _crAlerDescr('Load from JSON File', 'Can not Load Watch Items from JSON File');
const ALERT_RUNTIME_ERROR = exports.ALERT_RUNTIME_ERROR = _crAlerDescr('Runtime Error');
const ALERT_NETWORK_ERROR = exports.ALERT_NETWORK_ERROR = _crAlerDescr('Network Error', 'Network error is encountered. Failed to fetch. May be you are offline, a DNS lookup failure or a resource unreachable.');
const ALERT_SERVICE_UNAVAILABLE = exports.ALERT_SERVICE_UNAVAILABLE = _crAlerDescr('Service Unavailable 503', 'Back-end server is at capacity. HTTP Code 503');
//# sourceMappingURL=Msg.js.map