'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Msg = {
  setAlertMsg: function setAlertMsg(option, msg) {
    var caption = msg.caption;
    var descr = msg.descr;

    option.alertCaption = caption;
    option.alertDescr = descr;
  },

  WATCH_SAVED: 'Watch List has been saved.',
  WATCH_PREV: 'Watch List has not been edited\nfrom previous save.',

  NOT_FOUND_ITEM: function NOT_FOUND_ITEM(itemType, captionGroup) {
    return 'The ' + itemType + ' witn name ' + captionGroup + ' not found.';
  },
  GROUP_EXISTED: function GROUP_EXISTED(caption) {
    return 'Group with name ' + caption + ' is already existed.';
  },
  LIST_EXISTED: function LIST_EXISTED(captionList, captionGroup) {
    return 'List with name ' + captionList + '\n      In Group ' + captionGroup + ' is already existed.';
  },
  ITEM_EXISTED: function ITEM_EXISTED(caption, captionList) {
    return 'Item with name ' + caption + '\n      In List ' + captionList + ' is already existed.';
  },

  IS_EMPTY_NAME: function IS_EMPTY_NAME(item) {
    return item + ' name can not be empty.';
  },
  NOT_SELECTED: function NOT_SELECTED(item) {
    return item + ' is not selected.';
  },

  NOT_VALID_FORMAT: function NOT_VALID_FORMAT(item) {
    return item + ' is not in valid format.';
  },
  TEST_DATE_OR_EMPTY: "YYYY-MM-DD format must be OR Empty",

  Alert: {
    ALREADY_EXIST: {
      caption: 'Check Error',
      descr: 'The chart for this code has already existed in a container. Please, close it and load again.'
    },
    LOADING_IN_PROGRESS: {
      caption: 'Loading In Progress',
      descr: 'Loading the chart for this item-code in progress.\nIt seems several clicks on button Load repeatedly happend.'
    },
    DOUBLE_LOAD_META: {
      caption: 'Double Load Meta Error',
      descr: 'Meta data for this code already have been loaded.'
    },
    DRAG_DROP_ITEM: {
      caption: 'Drag Drop Item',
      descr: 'Item in List already has been existed.'
    },
    DRAG_DROP_LIST: {
      caption: 'Drag Drop List',
      descr: 'List in Group already has been existed.'
    },
    RUNTIME_ERROR: {
      caption: 'Runtime Error'
    },
    NETWORK_ERROR: {
      caption: 'Network Error',
      descr: 'Network error is encountered. Failed to fetch. It seems you offline or maybe a DNS lookup failure.'
    },
    SERVICE_UNAVAILABLE: {
      caption: 'Service Unavailable 503',
      descr: 'Back-end server is at capacity. HTTP Code 503'
    }
  }
};

exports.default = Msg;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\constants\Msg.js.map