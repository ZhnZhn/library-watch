import merge from '../../utils/merge';
import { mlsToYmd } from '../../utils/dateFn';
import saveJsonToFile from './saveJsonToFile';
import {
  readFromLs,
  writeToLs
} from '../../utils/localStorageFn';

import {
  createStoreWithSelector,
  fCrUse
} from '../storeApi';

import {
  showAlert,
  showInfo
} from '../compStore';

import {
  MSG_WATCH_SAVED,
  MSG_WATCH_PREV,
  ALERT_LOAD_FROM_JSON
} from '../../constants/Msg';
import WatchDefault from '../../constants/WatchDefault';

import {
  WAT_CREATE_GROUP,
  WAT_RENAME_GROUP,
  WAT_DELETE_GROUP,

  WAT_CREATE_LIST,
  WAT_RENAME_LIST,
  WAT_DELETE_LIST,

  WAT_ADD_ITEM
} from '../actions/WatchActions';

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

const STORAGE_KEY = 'WL_LIBRARY_WATCH'
, DIALOG_CAPTION ='Watch List:'
, WATCH_FILE_NAME = "WatchItems";

const _crStore = () => ({
  isWatchEdited: false,
  watchList: WatchDefault,
  msEdit: {}
})
, _watchListStore = createStoreWithSelector(_crStore)
, _selectWatchList = state => state.watchList
, _selectMsEdit = state => state.msEdit
, _selectIsWatchEdited = state => state.isWatchEdited
, _set = _watchListStore.setState
, _get = _watchListStore.getState;

export const getIsWatchEdited = () => _selectIsWatchEdited(_get());

export const getWatchList = () => _selectWatchList(_get())

export const useWatchList = fCrUse(_watchListStore, _selectWatchList)
export const useMsEdit = fCrUse(_watchListStore, _selectMsEdit)
export const useIsWatchEdited = fCrUse(_watchListStore, _selectIsWatchEdited)

export const getWatchGroups = () => (getWatchList() || {}).groups
export const getWatchListsByGroup = (groupCaption) => {
  const group = findGroup(getWatchList(), groupCaption);
  return group
    ? group.lists
    : [];
}

const _onEditWatch = (
  result,
  forActionType
) => {
  if (result.isDone){
    _set({
      isWatchEdited: true,
      watchList: { ...getWatchList() },
      msEdit: { forActionType }
    })
  } else {
    _set({
      msEdit: {
        messages:[result.message],
        forActionType
      }
    })
  }
}
const _fEditWatch = (
  editEntity,
  EDIT_ENTITY
) => (option) => {
  _onEditWatch(
    editEntity(getWatchList(), option),
    EDIT_ENTITY
  )
};
export const crGroup = _fEditWatch(addGroup, WAT_CREATE_GROUP)
export const renGroup = _fEditWatch(renameGroup, WAT_RENAME_GROUP)
export const delGroup = _fEditWatch(deleteGroup, WAT_DELETE_GROUP)
export const crList = _fEditWatch(addList, WAT_CREATE_LIST)
export const renList = _fEditWatch(renameList, WAT_RENAME_LIST)
export const delList = _fEditWatch(deleteList, WAT_DELETE_LIST)
const _addItem = _fEditWatch(addItem, WAT_ADD_ITEM);

const _onDragDrop = (
  result
) => {
  if (result.isDone){
    _set({
      isWatchEdited: true,
      watchList: {...getWatchList()}
    })
  } else {
    showAlert(result)
  }
}
const _fDdEntity = (ddEntity) => (option) => {
  _onDragDrop(ddEntity(getWatchList(), option))
};
export const ddItem = _fDdEntity(dragDropItem)
export const ddList = _fDdEntity(dragDropList)
export const ddGroup = _fDdEntity(dragDropGroup)

const _crMsgOption = (
  descr
) => ({
  caption: DIALOG_CAPTION,
  descr
});

const _saveWl = (
  isShowDialog=true
) => {
  if (getIsWatchEdited()){
    const _err = writeToLs(STORAGE_KEY, getWatchList());
    if (_err) {
      showAlert(_crMsgOption(_err.message))
    } else {
     _set({ isWatchEdited: false })
     if (isShowDialog) {
       showInfo(_crMsgOption(MSG_WATCH_SAVED))
     }
    }
  } else {
     showInfo(_crMsgOption(MSG_WATCH_PREV))
  }
}

export const initWatchList = () => {
  _set({
    watchList: readFromLs(STORAGE_KEY)[0] || WatchDefault
  })
}
export const saveWatchList = ({ isShowDialog } = {}) => {
  _saveWl(isShowDialog)
}
export const addWatchItem = (item) => {
  _addItem(item)
}
export const deleteWatchItem = (option) => {
  deleteItem(getWatchList(), option);
  _set({
    isWatchEdited: true,
    watchList: {...getWatchList()}
  })
}

export const backupToJson = () => {
  const yyyymmdd = mlsToYmd(Date.now())
  , _fileName = `${WATCH_FILE_NAME}_${yyyymmdd}.json`;

  saveJsonToFile(getWatchList(), _fileName)
}
export const loadFromJson = (option) => {
  try {
    const { progressEvent } = option
    merge(
      getWatchList(),
      JSON.parse(progressEvent.target.result)
    );
    _set({
      isWatchEdited: true,
      watchList: {...getWatchList()}
    })
  } catch(exc) {
    showAlert({...ALERT_LOAD_FROM_JSON })
  }
}
