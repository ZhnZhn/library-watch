

const createHandlerDnDList = function(DRAG, WatchActions){
  return {

    _handlerDragStartList({ groupCaption, caption}, ev){
       ev.dataTransfer.effectAllowed="move";
       ev.dataTransfer.dropEffect="move";
       const _data = {
         dragId : `${groupCaption};${caption}`,
         xType : DRAG.LIST
       };
       ev.dataTransfer.setData("text", JSON.stringify(_data));
    },

    _handlerDropList({ groupCaption, caption }, ev){
       const data = JSON.parse(ev.dataTransfer.getData("text"))
          ,  { xType, dragId } = data
          ,  dropId =  `${groupCaption};${caption};`

       if (xType === DRAG.LIST) {
         if (dragId !== dropId) {
           ev.preventDefault();
           WatchActions.dragDropList({
             dragId : dragId,
             dropId : dropId
           });
         } else {
           return undefined;
         }
       } else if (xType === DRAG.ITEM) {
         ev.preventDefault();
         WatchActions.dragDropItem({
           dragId : dragId,
           dropId : dropId
        });
      }
    },

    _handlerDragEnterList(ev){
       //ev.target.style.borderTop="3px solid yellow";
       ev.preventDefault();
    },

    _handlerDragOverList(ev){
       ev.preventDefault();
    },

    _handlerDragLeaveList(ev){
      //ev.target.style.borderTop="";
    }
  };
};

export default createHandlerDnDList
