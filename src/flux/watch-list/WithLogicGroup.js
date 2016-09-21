
import Fn from './Fn'

const WithLogicGroup = {

  addGroup(watchList, { caption }){
    const groups = watchList.groups;

    if ( Fn.checkIsInArraySameCaption(groups, caption)){
      return Fn.fResultGroupExisted(caption);
    }

    const _captionObj = (caption)
             ? { caption }
             : { caption: "Default" };

    watchList.groups = Fn.getArrayWithObj(groups, _captionObj);
    return {isDone : true};
  },

  renameGroup(watchList, {captionFrom, captionTo}){
    const groups = watchList.groups
        , groupIndex = Fn.findIndex(groups, captionFrom);

    if (groupIndex === -1){
      return Fn.fResultNotFound('group', captionFrom);
    }
    if ( Fn.checkIsInArraySameCaption(groups, captionTo) ){
      return Fn.fResultGroupExisted(captionTo);
    }

    watchList.groups = Fn.getArrayWithRename(groups, groupIndex, captionTo)
    return {isDone : true}
  },

  deleteGroup(watchList, {caption}){
    watchList.groups = Fn.filter(watchList.groups, caption);
    return {isDone : true}
  }

};

export default WithLogicGroup
