"use strict";

exports.__esModule = true;
exports.setAlertMsgTo = exports.MSG_WATCH_SAVED = exports.MSG_WATCH_PREV = exports.MSG_WATCH_BACKUP_ZIP_FAILED = exports.MSG_WATCH_BACKUP_ZIP = exports.MSG_TEST_DATE_OR_EMPTY = exports.MSG_NOT_VALID_FORMAT = exports.MSG_NOT_SELECTED = exports.MSG_NOT_FOUND_ITEM = exports.MSG_LIST_EXISTED = exports.MSG_ITEM_EXISTED = exports.MSG_GROUP_EXISTED = exports.MSG_EMPTY_NAME = exports.ALERT_SERVICE_UNAVAILABLE = exports.ALERT_RUNTIME_ERROR = exports.ALERT_NETWORK_ERROR = exports.ALERT_LOAD_FROM_JSON = exports.ALERT_LOADING_IN_PROGRESS = exports.ALERT_DRAG_DROP_LIST = exports.ALERT_DRAG_DROP_ITEM = void 0;

var setAlertMsgTo = function setAlertMsgTo(option, msg) {
  var caption = msg.caption,
      descr = msg.descr;
  option.alertCaption = caption;
  option.alertDescr = descr;
};

exports.setAlertMsgTo = setAlertMsgTo;
var MSG_WATCH_SAVED = 'Watch List has been saved.';
exports.MSG_WATCH_SAVED = MSG_WATCH_SAVED;
var MSG_WATCH_PREV = 'Watch List has not been edited\nfrom previous save.';
exports.MSG_WATCH_PREV = MSG_WATCH_PREV;
var MSG_WATCH_BACKUP_ZIP_FAILED = 'Watch Items Saving was Failed.';
exports.MSG_WATCH_BACKUP_ZIP_FAILED = MSG_WATCH_BACKUP_ZIP_FAILED;

var MSG_WATCH_BACKUP_ZIP = function MSG_WATCH_BACKUP_ZIP(zipName) {
  return "Watch Items have been saved to\n" + zipName;
};

exports.MSG_WATCH_BACKUP_ZIP = MSG_WATCH_BACKUP_ZIP;

var MSG_NOT_FOUND_ITEM = function MSG_NOT_FOUND_ITEM(itemType, captionGroup) {
  return "The " + itemType + " witn name " + captionGroup + " not found.";
};

exports.MSG_NOT_FOUND_ITEM = MSG_NOT_FOUND_ITEM;

var MSG_GROUP_EXISTED = function MSG_GROUP_EXISTED(caption) {
  return "Group with name " + caption + " is already existed.";
};

exports.MSG_GROUP_EXISTED = MSG_GROUP_EXISTED;

var MSG_LIST_EXISTED = function MSG_LIST_EXISTED(captionList, captionGroup) {
  return "List with name " + captionList + "\n      In Group " + captionGroup + " is already existed.";
};

exports.MSG_LIST_EXISTED = MSG_LIST_EXISTED;

var MSG_ITEM_EXISTED = function MSG_ITEM_EXISTED(caption, captionList) {
  return "Item with name " + caption + "\n      In List " + captionList + " is already existed.";
};

exports.MSG_ITEM_EXISTED = MSG_ITEM_EXISTED;

var MSG_EMPTY_NAME = function MSG_EMPTY_NAME(item) {
  return item + " name can not be empty.";
};

exports.MSG_EMPTY_NAME = MSG_EMPTY_NAME;

var MSG_NOT_SELECTED = function MSG_NOT_SELECTED(item) {
  return item + " is not selected.";
};

exports.MSG_NOT_SELECTED = MSG_NOT_SELECTED;
var MSG_TEST_DATE_OR_EMPTY = "YYYY-MM-DD format must be OR Empty";
exports.MSG_TEST_DATE_OR_EMPTY = MSG_TEST_DATE_OR_EMPTY;

var MSG_NOT_VALID_FORMAT = function MSG_NOT_VALID_FORMAT(item) {
  return item + " is not in valid format.";
};

exports.MSG_NOT_VALID_FORMAT = MSG_NOT_VALID_FORMAT;

var _crAlerDescr = function _crAlerDescr(caption, descr) {
  return {
    caption: caption,
    descr: descr
  };
};

var ALERT_LOADING_IN_PROGRESS = _crAlerDescr('Loading In Progress', 'Loading the chart for this item-code in progress.\nIt seems several clicks on button Load repeatedly happend.');

exports.ALERT_LOADING_IN_PROGRESS = ALERT_LOADING_IN_PROGRESS;

var ALERT_DRAG_DROP_ITEM = _crAlerDescr('Drag Drop Item', 'Item in List already has been existed.');

exports.ALERT_DRAG_DROP_ITEM = ALERT_DRAG_DROP_ITEM;

var ALERT_DRAG_DROP_LIST = _crAlerDescr('Drag Drop List', 'List in Group already has been existed.');

exports.ALERT_DRAG_DROP_LIST = ALERT_DRAG_DROP_LIST;

var ALERT_LOAD_FROM_JSON = _crAlerDescr('Load from JSON File', 'Can not Load Watch Items from JSON File');

exports.ALERT_LOAD_FROM_JSON = ALERT_LOAD_FROM_JSON;

var ALERT_RUNTIME_ERROR = _crAlerDescr('Runtime Error');

exports.ALERT_RUNTIME_ERROR = ALERT_RUNTIME_ERROR;

var ALERT_NETWORK_ERROR = _crAlerDescr('Network Error', 'Network error is encountered. Failed to fetch. May be you are offline, a DNS lookup failure or a resource unreachable.');

exports.ALERT_NETWORK_ERROR = ALERT_NETWORK_ERROR;

var ALERT_SERVICE_UNAVAILABLE = _crAlerDescr('Service Unavailable 503', 'Back-end server is at capacity. HTTP Code 503');

exports.ALERT_SERVICE_UNAVAILABLE = ALERT_SERVICE_UNAVAILABLE;
//# sourceMappingURL=Msg.js.map