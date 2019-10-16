
import is from '../utils/is'

const has = {
  HAS_TOUCH: is.isTouchable(),

  wideWidth: () => window.innerWidth
    ? window.innerWidth > 700
    : true
};

export default has
