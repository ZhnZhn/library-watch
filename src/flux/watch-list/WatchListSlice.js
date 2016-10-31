
import LocalForage from 'localforage';
import JSZip from 'jszip';
import FileSaver from 'browser-filesaver';

import DateUtils from '../../utils/DateUtils';

import ComponentActions from '../actions/ComponentActions';
import { BrowserActionTypes } from '../actions/BrowserActions';
import { WatchActionTypes } from '../actions/WatchActions';
import WatchDefault from '../../constants/WatchDefault';
import { ModalDialog }  from '../../constants/Type';
import Msg from '../../constants/Msg';

import Logic from './Logic';

const STORAGE_KEY = 'WATCH_LIST_PACKAGE'
    , CAPTION_WATCH_SAVE ='Watch List:'
    , CAPTION_WATCH_EXPORT = "BackUp Watch Items:"
    , WATCH_FILE_NAME = "WatchItems"

const WatchListSlice = {

  watchList : WatchDefault,
  isWatchEdited : false,

  initWatchList(){
    LocalForage.getItem(STORAGE_KEY).then((value) => {
      this.watchList = (value)
              ? value
              : WatchDefault;
      this.trigger(BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
    })
    .catch(() => {
      this.watchList = WatchDefault;
      this.trigger(BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
    })
  },
  getWatchList(){
    return this.watchList;
  },
  getWatchGroups(){
    return this.watchList.groups;
  },
  getWatchListsByGroup(groupCaption){
    const group = Logic.findGroup(this.watchList, groupCaption);
    if (!group) { return []; }
    return group.lists;
  },

  onAddItem(item){
    this._onEditWatch(
      Logic.addItem(this.watchList, item), WatchActionTypes.ADD_ITEM
    );
  },
  onRemoveItem(option){
    Logic.removeItem(this.watchList, option);
    this.isWatchEdited = true;
    this.trigger(BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
  },

  _onDragDrop(result){
    if (result.isDone){
       this.isWatchEdited = true;
       this.trigger(BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      this.showAlertDialog(result);
    }
  },

  onDragDropItem(option){
    this._onDragDrop(Logic.dragDropItem(this.watchList, option) );
  },
  onDragDropList(option){
    this._onDragDrop(Logic.dragDropList(this.watchList, option) );
  },
  onDragDropGroup(option){
    this._onDragDrop(Logic.dragDropGroup(this.watchList, option));
  },

  onSaveWatch(){
    if (this.isWatchEdited){
       LocalForage.setItem(STORAGE_KEY , this.watchList)
          .then(()=>{
             this.isWatchEdited = false;
             this.onShowModalDialog(ModalDialog.INFO, {
                caption : CAPTION_WATCH_SAVE,
                descr : Msg.WATCH_SAVED
             })
             console.log(Msg.WATCH_SAVED);
          })
          .catch((error) => {
             console.log(error);
          })
    } else {
       this.onShowModalDialog(ModalDialog.INFO, {
          caption : CAPTION_WATCH_SAVE,
          descr : Msg.WATCH_PREV
       })
    }
  },

  _onEditWatch(result, forActionType){
    if (result.isDone){
      this.isWatchEdited = true;
      this.trigger(BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
      this.trigger(WatchActionTypes.EDIT_WATCH_COMPLETED, {forActionType});
    } else {
      this.trigger(WatchActionTypes.EDIT_WATCH_FAILED, {
          messages:[result.message],
          forActionType
      });
    }
  },
  onAddGroup(option){
    this._onEditWatch(
      Logic.addGroup(this.watchList, option),
      WatchActionTypes.ADD_GROUP
    );
  },
  onRenameGroup(option){
    this._onEditWatch(
      Logic.renameGroup(this.watchList, option),
      WatchActionTypes.RENAME_GROUP
    );
  },
  onDeleteGroup(option){
    this._onEditWatch(
      Logic.deleteGroup(this.watchList, option),
      WatchActionTypes.DELETE_GROUP
    );
  },

  onCreateList(option){
    this._onEditWatch(
      Logic.createList(this.watchList, option),
      WatchActionTypes.CREATE_LIST
    );
  },
  onRenameList(option){
    this._onEditWatch(
      Logic.renameList(this.watchList, option),
      WatchActionTypes.RENAME_LIST
    );
  },
  onDeleteList(option){
    this._onEditWatch(
      Logic.deleteList(this.watchList, option),
      WatchActionTypes.DELETE_LIST
    );
  },

  onExportToZip(){
    const zip = new JSZip();
    const yyyymmdd = DateUtils.formatToYYYYMMDD(Date.now());

    zip.file(
       `${WATCH_FILE_NAME}_${yyyymmdd}.json}`,
        JSON.stringify(this.watchList)
     );

    zip.generateAsync({ type:"blob" })
       .then( (content) => {
          const _zipName = `${WATCH_FILE_NAME}_${yyyymmdd}.zip`
          FileSaver.saveAs(content, _zipName);
          ComponentActions.showModalDialog(ModalDialog.INFO, {
            caption : CAPTION_WATCH_EXPORT,
            descr : Msg.WATCH_BACKUP_ZIP(_zipName)
          })
       })
       .catch( (err) => {
         ComponentActions.showModalDialog(ModalDialog.ALERT, {
            caption : CAPTION_WATCH_EXPORT,
            descr : Msg.WATCH_BACKUP_ZIP_FAILED
         })
       })
  }

}

export default WatchListSlice
