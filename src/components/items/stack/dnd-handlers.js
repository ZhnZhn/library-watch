const BORDER_LEFT = 'border-left'
, DRAG_START_BORDER_LEFT = '4px solid #d64336';
let _element
, _getElementStyle = () => _element.style;

export const styleDragStart = event => {
  if (_element){
    _getElementStyle()
      .removeProperty(BORDER_LEFT)
  }
  _element = event.currentTarget
  _getElementStyle()
     .setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT)
}

export const styleDragEnd = () => {
  if (_element) {
    _getElementStyle()
       .removeProperty(BORDER_LEFT)
    _element = null
  }
}

export const preventDefault = event => {
  event.preventDefault()
}
