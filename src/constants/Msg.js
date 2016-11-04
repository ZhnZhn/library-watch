const Msg = {
  setAlertMsg : (option, msg) => {
    const {caption, descr} = msg;
    option.alertCaption = caption;
    option.alertDescr = descr;
  },

  WATCH_SAVED : 'Watch List has been saved.',
  WATCH_PREV : 'Watch List has not been edited\nfrom previous save.',
  WATCH_BACKUP_ZIP : (zipName) => `Watch Items have been saved to\n${zipName}`,
  WATCH_BACKUP_ZIP_FAILED : 'Watch Items Saving was Failed.',

  NOT_FOUND_ITEM : (itemType, captionGroup) => `The ${itemType} witn name ${captionGroup} not found.`,
  GROUP_EXISTED : (caption) => `Group with name ${caption} is already existed.`,
  LIST_EXISTED : (captionList, captionGroup) => `List with name ${captionList}\n      In Group ${captionGroup} is already existed.`,
  ITEM_EXISTED : (caption, captionList) => `Item with name ${caption}\n      In List ${captionList} is already existed.`,

  IS_EMPTY_NAME : (item) => `${item} name can not be empty.`,
  NOT_SELECTED : (item) => `${item} is not selected.`,

  NOT_VALID_FORMAT : (item) => `${item} is not in valid format.`,
  TEST_DATE_OR_EMPTY : "YYYY-MM-DD format must be OR Empty",

  Alert : {
     ALREADY_EXIST : {
        caption : 'Check Error',
        descr: 'The chart for this code has already existed in a container. Please, close it and load again.'
     },
     LOADING_IN_PROGRESS : {
        caption : 'Loading In Progress',
        descr: 'Loading the chart for this item-code in progress.\nIt seems several clicks on button Load repeatedly happend.'
     },
     DOUBLE_LOAD_META : {
       caption : 'Double Load Meta Error',
       descr: 'Meta data for this code already have been loaded.'
     },
     DRAG_DROP_ITEM : {
       caption : 'Drag Drop Item',
       descr : 'Item in List already has been existed.'
     },
     DRAG_DROP_LIST : {
       caption : 'Drag Drop List',
       descr : 'List in Group already has been existed.'
     },
     LOAD_FROM_JSON : {
       caption : 'Load from JSON File',
       descr : 'Can not Load Watch Items from JSON File'
     },
     RUNTIME_ERROR : {
        caption : 'Runtime Error'
     },
     NETWORK_ERROR : {
        caption : 'Network Error',
        descr: 'Network error is encountered. Failed to fetch. May be you are offline, a DNS lookup failure or a resource unreachable.'
     },
     SERVICE_UNAVAILABLE : {
       caption : 'Service Unavailable 503',
       descr: 'Back-end server is at capacity. HTTP Code 503'
     }
  }
}

export default Msg
