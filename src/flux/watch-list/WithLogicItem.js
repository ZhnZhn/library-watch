import {
  filter,
  findGroup,
  findList,
  checkIsInArraySameCaption,
  fResultItemExisted
} from './Fn';

const WithLogicItem = {

  addItem(watchList, item){
    const {groupCaption, listCaption, caption, config} = item
        , toGroup = findGroup(watchList, groupCaption)
        , toList = findList(toGroup, listCaption)
        , items = toList.items;

    if ( checkIsInArraySameCaption(items, caption) ){
      return fResultItemExisted(caption, listCaption);
    }

    if (items) {
      toList.items.push(config);
    } else {
      toList.items = [config];
    }

    return {isDone : true}
  },

  removeItem(watchList, {groupCaption, listCaption, caption}){
    const groupFrom = findGroup(watchList, groupCaption)
        , listFrom = findList(groupFrom, listCaption);

    listFrom.items = filter(listFrom.items, caption);
  }

};

export default WithLogicItem
