
import {
  filter,
  findGroup,
  findIndex,
  checkIsInArraySameCaption,
  getArrayWithObj,
  getArrayWithRename,
  fResultListExisted,
  fResultNotFound
} from './Fn';

const WithLogicList = {

  createList(watchList, {captionGroup, captionList}){
    const groupTo = findGroup(watchList, captionGroup)

    if (!groupTo){
      return fResultNotFound('group', captionGroup);
    }
    const lists = groupTo.lists;
    if (checkIsInArraySameCaption(lists, captionList)){
      return fResultListExisted(captionList, captionGroup);
    }

    groupTo.lists = getArrayWithObj(lists, {caption: captionList});
    return {isDone : true};
  },

  renameList(watchList, {captionGroup, captionListFrom, captionListTo}){
    const groupIn = findGroup(watchList, captionGroup);

    if (!groupIn){
      return fResultNotFound('group', captionGroup);
    }
    const lists = groupIn.lists;
    const listIndex = findIndex(lists, captionListFrom);
    if (listIndex === -1){
      return fResultNotFound('list', captionListFrom);
    }
    if ( checkIsInArraySameCaption(lists, captionListTo) ){
      return fResultListExisted(captionListTo, captionGroup);
    }

    groupIn.lists = getArrayWithRename(lists, listIndex, captionListTo);
    return {isDone : true}
  },

  deleteList(watchList, {captionGroup, captionList}){
    const groupFrom = findGroup(watchList, captionGroup);

    if (!groupFrom){
      return fResultNotFound('group', captionGroup);
    }

    groupFrom.lists = filter(groupFrom.lists, captionList);
    return {isDone : true}
  }

};

export default WithLogicList
