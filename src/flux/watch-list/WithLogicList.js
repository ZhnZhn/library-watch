
import Fn from './Fn';

const WithLogicList = {

  createList(watchList, {captionGroup, captionList}){
    const groupTo = Fn.findGroup(watchList, captionGroup)

    if (!groupTo){
      return Fn.fResultNotFound('group', captionGroup);
    }
    const lists = groupTo.lists;
    if (Fn.checkIsInArraySameCaption(lists, captionList)){
      return Fn.fResultListExisted(captionList, captionGroup);
    }

    groupTo.lists = Fn.getArrayWithObj(lists, {caption: captionList});
    return {isDone : true};
  },

  renameList(watchList, {captionGroup, captionListFrom, captionListTo}){
    const groupIn = Fn.findGroup(watchList, captionGroup);

    if (!groupIn){
      return Fn.fResultNotFound('group', captionGroup);
    }
    const lists = groupIn.lists;
    const listIndex = Fn.findIndex(lists, captionListFrom);
    if (listIndex === -1){
      return Fn.fResultNotFound('list', captionListFrom);
    }
    if ( Fn.checkIsInArraySameCaption(lists, captionListTo) ){
      return Fn.fResultListExisted(captionListTo, captionGroup);
    }

    groupIn.lists = Fn.getArrayWithRename(lists, listIndex, captionListTo);
    return {isDone : true}
  },

  deleteList(watchList, {captionGroup, captionList}){
    const groupFrom = Fn.findGroup(watchList, captionGroup);

    if (!groupFrom){
      return Fn.fResultNotFound('group', captionGroup);
    }

    groupFrom.lists = Fn.filter(groupFrom.lists, captionList);
    return {isDone : true}
  }

};

export default WithLogicList
