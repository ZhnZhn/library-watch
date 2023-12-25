export const HAS_TOUCH_EVENTS = document
  && 'ontouchstart' in document.documentElement
export const HAS_KEYBOARD_FOCUS = !HAS_TOUCH_EVENTS  

export const isWideWidth = () => window.innerWidth
  ? window.innerWidth > 700
  : true
