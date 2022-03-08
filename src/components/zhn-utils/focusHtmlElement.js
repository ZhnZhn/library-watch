const _isFn = fn => typeof fn === 'function';

const focusHtmlElement = el => {
  if (el && _isFn(el.focus)) {
    el.focus()
  }
};

export default focusHtmlElement
