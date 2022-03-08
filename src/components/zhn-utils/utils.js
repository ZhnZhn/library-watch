
export const isFn = fn => typeof fn === 'function';

export const focusNode = n => {
  if (n && isFn(n.focus)) {
    n.focus()
  }
};

const utils = {
  isFn,
  focusNode
};

export default utils
