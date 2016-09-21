
import Fn from './Fn';

const WithLogicDragDrop = {

  dragDropItem(watchList, {dragId, dropId}){
    const dragArr = dragId.split(';')
        , dragGroup = Fn.findGroup(watchList, dragArr[0])
        , dragList = Fn.findList(dragGroup, dragArr[1])
        , dragIndex = Fn.findIndex(dragList.items, dragArr[2])
        , dragItem = dragList.items[dragIndex];

    const dropArr = dropId.split(';')
        , dropGroup = Fn.findGroup(watchList, dropArr[0])
        , dropList = Fn.findList(dropGroup, dropArr[1])
        , dropIndex = (dropArr[2])
             ? Fn.findIndex(dropList.items, dropArr[2])
             : 0;

    if ( dragList.caption !== dropList.caption &&
         Fn.checkIsInArraySameCaption(dropList.items, dragArr[3]) )
    {
        return Fn.fDragDropItemExisted(dropArr[1], dragArr[2]);
    }

    dragList.items = Fn.filter(dragList.items, dragArr[2])
    dropList.items = Fn.insertItemInArray(dragItem, dropIndex, dropList.items);

    return { isDone : true }
  },

  dragDropList(watchList, {dragId, dropId}){
    const [ dragGroupCaption, dragListCaption ] = dragId.split(';')
        , dragGroup = Fn.findGroup(watchList, dragGroupCaption)
        , dragList = Fn.findList(dragGroup, dragListCaption);

    const [ dropGroupCaption, dropListCaption ] = dropId.split(';')
        , dropGroup = Fn.findGroup(watchList, dropGroupCaption)
        , dropIndex = (dropListCaption)
              ? Fn.findIndex(dropGroup.lists, dropListCaption)
              : 0;

    if ( dragGroup.caption !== dropGroup.caption &&
         Fn.checkIsInArraySameCaption(dropGroup.lists, dragListCaption) )
    {
      return Fn.fDragDropListExisted(dropGroupCaption, dragListCaption)        
    }

    dragGroup.lists = Fn.filter(dragGroup.lists, dragListCaption);
    dropGroup.lists = Fn.insertItemInArray(dragList, dropIndex, dropGroup.lists);

    return { isDone : true };
  },

  dragDropGroup(watchList, {dragId, dropId}){
     const [ dragGroupCaption ] = dragId.split(';')
         , dragGroup = Fn.findGroup(watchList, dragGroupCaption)

         , [ dropGroupCaption ] = dropId.split(';')
         , dropIndex = (dropGroupCaption)
               ? Fn.findIndex(watchList.groups, dropGroupCaption)
               : 0;

      watchList.groups = Fn.filter(watchList.groups, dragGroupCaption);
      watchList.groups = Fn.insertItemInArray(dragGroup, dropIndex, watchList.groups)

      return { isDone : true };
  }

};

export default WithLogicDragDrop
