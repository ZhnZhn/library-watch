import {
  readFromLs,
  writeToLs
} from '../../utils/localStorageFn';
import merge from '../../utils/merge';
import { mlsToYmd } from '../../utils/DateUtils';
import saveJsonToFile from './saveJsonToFile';

import { ComponentActions } from '../actions/ComponentActions';
import {
  BAT_UPDATE_WATCH_BROWSER
} from '../actions/BrowserActions';
import {
  WAT_SET_WATCH_EDITED,
  WAT_ADD_ITEM,
  WAT_EDIT_WATCH_COMPLETED,
  WAT_EDIT_WATCH_FAILED,
  WAT_ADD_GROUP,
  WAT_RENAME_GROUP,
  WAT_DELETE_GROUP,
  WAT_CREATE_LIST,
  WAT_RENAME_LIST,
  WAT_DELETE_LIST
} from '../actions/WatchActions';
import WatchDefault from '../../constants/WatchDefault';
import { ModalDialog }  from '../../constants/Type';
import {
  MSG_WATCH_SAVED,
  MSG_WATCH_PREV,
  ALERT_LOAD_FROM_JSON
} from '../../constants/Msg';

import { findGroup } from './Fn';
import {
  dragDropGroup,
  dragDropList,
  dragDropItem
} from './DragDropFn';
import {
  addGroup,
  renameGroup,
  deleteGroup
} from './GroupFn';
import {
  addList,
  renameList,
  deleteList
} from './ListFn';
import {
  addItem,
  deleteItem
} from './ItemFn';

const STORAGE_KEY = 'WATCH_LIST'
, CAPTION_WATCH_SAVE ='Watch List:'
, WATCH_FILE_NAME = "WatchItems"
, _crInfoDialogProps = (
  caption,
  descr
) => ({
   caption,
   descr
});

const WatchListSlice = {

  watchList : WatchDefault,
  isWatchEdited : false,

  initWatchList(){
    const [
      value
    ] = readFromLs(STORAGE_KEY);
    this.watchList = value || WatchDefault
    this.trigger(BAT_UPDATE_WATCH_BROWSER, this.watchList);
  },
  getWatchEdited(){
    return this.isWatchEdited;
  },
  setWatchEdited(value){
    this.isWatchEdited = value;
    this.trigger(WAT_SET_WATCH_EDITED, this.isWatchEdited);
  },
  getWatchList(){
    return this.watchList;
  },
  getWatchGroups(){
    return this.watchList.groups;
  },
  getWatchListsByGroup(groupCaption){
    const group = findGroup(this.watchList, groupCaption);
    if (!group) { return []; }
    return group.lists;
  },

  onAddItem(item){
    this._onEditWatch(
      addItem(this.watchList, item), WAT_ADD_ITEM
    );
  },
  onRemoveItem(option){
    deleteItem(this.watchList, option);
    this.setWatchEdited(true);
    this.trigger(BAT_UPDATE_WATCH_BROWSER, this.watchList);
  },

  _onDragDrop(result){
    if (result.isDone){
       this.setWatchEdited(true);
       this.trigger(BAT_UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      this.showAlertDialog(result);
    }
  },

  onDragDropItem(option){
    this._onDragDrop(dragDropItem(this.watchList, option) );
  },
  onDragDropList(option){
    this._onDragDrop(dragDropList(this.watchList, option) );
  },
  onDragDropGroup(option){
    this._onDragDrop(dragDropGroup(this.watchList, option));
  },

  onSaveWatch(){
    if (this.isWatchEdited){
       const err = writeToLs(STORAGE_KEY , this.watchList);
       if (err) {
         console.log(err.message);
       } else {
         this.setWatchEdited(false);
         this.onShowModalDialog(
           ModalDialog.INFO,
           _crInfoDialogProps(
              CAPTION_WATCH_SAVE,
              MSG_WATCH_SAVED
         ))
         console.log(MSG_WATCH_SAVED);
       }
    } else {
       this.onShowModalDialog(
          ModalDialog.INFO,
          _crInfoDialogProps(
            CAPTION_WATCH_SAVE,
            MSG_WATCH_PREV
       ))
    }
  },

  _onEditWatch(result, forActionType){
    if (result.isDone){
      this.setWatchEdited(true);
      this.trigger(BAT_UPDATE_WATCH_BROWSER, this.watchList);
      this.trigger(WAT_EDIT_WATCH_COMPLETED, {forActionType});
    } else {
      this.trigger(WAT_EDIT_WATCH_FAILED, {
          messages:[result.message],
          forActionType
      });
    }
  },
  onAddGroup(option){
    this._onEditWatch(
      addGroup(this.watchList, option),
      WAT_ADD_GROUP
    );
  },
  onRenameGroup(option){
    this._onEditWatch(
      renameGroup(this.watchList, option),
      WAT_RENAME_GROUP
    );
  },
  onDeleteGroup(option){
    this._onEditWatch(
      deleteGroup(this.watchList, option),
      WAT_DELETE_GROUP
    );
  },

  onCreateList(option){
    this._onEditWatch(
      addList(this.watchList, option),
      WAT_CREATE_LIST
    );
  },
  onRenameList(option){
    this._onEditWatch(
      renameList(this.watchList, option),
      WAT_RENAME_LIST
    );
  },
  onDeleteList(option){
    this._onEditWatch(
      deleteList(this.watchList, option),
      WAT_DELETE_LIST
    );
  },

  onBackupToJson(){
    const yyyymmdd = mlsToYmd(Date.now())
    , _fileName = `${WATCH_FILE_NAME}_${yyyymmdd}.json`;

    saveJsonToFile(this.watchList, _fileName)
  },

  onLoadFromJson(option){
    try {
      const { progressEvent } = option
      merge(this.watchList, JSON.parse(progressEvent.target.result));
      this.setWatchEdited(true);
      this.trigger(BAT_UPDATE_WATCH_BROWSER, this.watchList);
    } catch(exc) {
      ComponentActions.showModalDialog(ModalDialog.ALERT, {...ALERT_LOAD_FROM_JSON })
    }
  }

}

export default WatchListSlice
