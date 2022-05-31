import {
  filter,
  findIndex,
  checkIsInArraySameCaption,
  getArrayWithObj,
  getArrayWithRename,
  fResultGroupExisted,
  fResultNotFound
} from './Fn';

const WithLogicGroup = {

  addGroup(watchList, { caption }){
    const groups = watchList.groups;

    if ( checkIsInArraySameCaption(groups, caption)){
      return fResultGroupExisted(caption);
    }

    const _captionObj = (caption)
             ? { caption }
             : { caption: "Default" };

    watchList.groups = getArrayWithObj(groups, _captionObj);
    return {isDone : true};
  },

  renameGroup(watchList, {captionFrom, captionTo}){
    const groups = watchList.groups
        , groupIndex = findIndex(groups, captionFrom);

    if (groupIndex === -1){
      return fResultNotFound('group', captionFrom);
    }
    if ( checkIsInArraySameCaption(groups, captionTo) ){
      return fResultGroupExisted(captionTo);
    }

    watchList.groups = getArrayWithRename(groups, groupIndex, captionTo)
    return {isDone : true}
  },

  deleteGroup(watchList, {caption}){
    watchList.groups = filter(watchList.groups, caption);
    return {isDone : true}
  }

};

export default WithLogicGroup
