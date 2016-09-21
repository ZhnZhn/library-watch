
import Fn from './Fn';

const WithLogicItem = {

  addItem(watchList, item){
    const {groupCaption, listCaption, caption, config} = item
        , toGroup = Fn.findGroup(watchList, groupCaption)
        , toList = Fn.findList(toGroup, listCaption)
        , items = toList.items;

    if ( Fn.checkIsInArraySameCaption(items, caption) ){
      return Fn.fResultItemExisted(caption, listCaption);
    }

    if (items) {
      toList.items.push(config);
    } else {
      toList.items = [config];
    }

    return {isDone : true}
  },

  removeItem(watchList, {groupCaption, listCaption, caption}){
    const groupFrom = Fn.findGroup(watchList, groupCaption)
        , listFrom = Fn.findList(groupFrom, listCaption);

    listFrom.items = Fn.filter(listFrom.items, caption);
  }

};

export default WithLogicItem
