"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHandlerDnDGroup = function createHandlerDnDGroup(DRAG, WatchActions) {
  return {
    _handlerDragStartGroup: function _handlerDragStartGroup(_ref, ev) {
      var caption = _ref.caption;

      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.dropEffect = "move";
      var _data = {
        dragId: caption + ";",
        xType: DRAG.GROUP
      };
      ev.dataTransfer.setData("text", JSON.stringify(_data));
    },
    _handlerDropGroup: function _handlerDropGroup(_ref2, ev) {
      var caption = _ref2.caption;
      var data = JSON.parse(ev.dataTransfer.getData("text"));
      var xType = data.xType;
      var dragId = data.dragId;
      var dropId = caption + ";";

      if (xType === DRAG.GROUP) {
        if (dragId !== dropId) {
          ev.preventDefault();
          WatchActions.dragDropGroup({
            dragId: dragId,
            dropId: dropId
          });
        } else {
          return undefined;
        }
      } else if (xType === DRAG.LIST) {
        ev.preventDefault();
        WatchActions.dragDropList({
          dragId: dragId,
          dropId: dropId
        });
      }
    },
    _handlerDragEnterGroup: function _handlerDragEnterGroup(ev) {
      //ev.target.style.borderTop="3px solid yellow";
      ev.preventDefault();
    },
    _handlerDragOverGroup: function _handlerDragOverGroup(ev) {
      ev.preventDefault();
    },
    _handlerDragLeaveGroup: function _handlerDragLeaveGroup(ev) {
      //ev.target.style.borderTop="";
    }
  };
};

exports.default = createHandlerDnDGroup;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\browser-watch\with\createHandlerDnDGroup.js.map