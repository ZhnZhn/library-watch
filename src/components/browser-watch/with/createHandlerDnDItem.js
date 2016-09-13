
const createHandlerDnDItem = function(DRAG, WatchActions){
  return {

    _handlerDragStartItem({groupCaption, listCaption, caption}, ev){
      ev.dataTransfer.effectAllowed="move";
      ev.dataTransfer.dropEffect="move";
      //.setDragImage(img, 0, 0);
      const _data = {
        dragId : `${groupCaption};${listCaption};${caption}`,
        xType : DRAG.ITEM
      };
      ev.dataTransfer.setData("text", JSON.stringify(_data));

    },

    _handlerDropItem({ groupCaption, listCaption, caption }, ev){
       const data = JSON.parse(ev.dataTransfer.getData("text"))
           , { xType, dragId } = data
           , dropId = `${groupCaption};${listCaption};${caption}`

       if (xType === DRAG.ITEM) {
         if ( dragId !== dropId) {
           ev.preventDefault();
           WatchActions.dragDropItem({
             dragId : dragId,
             dropId : dropId
           });
        } else {
          return undefined;
        }
      }
    },

    _handlerDragOverItem(ev){
       ev.preventDefault();
    }
  };
};

export default createHandlerDnDItem
