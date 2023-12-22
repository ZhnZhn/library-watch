import { bindTo } from '../../uiApi';

const crDnDHandlers = (
  onDragStart,
  onDrop,
  onDragEnter,
  onDragOver,
  onDragLeave,
  isEditMode,
  option,
) => isEditMode
 ? {
    draggable: true,
    onDragStart: bindTo(onDragStart, option),
    onDrop: bindTo(onDrop, option),
    onDragEnter,
    onDragOver,
    onDragLeave
  }
 : void 0

export default crDnDHandlers  
