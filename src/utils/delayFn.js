
export const delayFn = (
  mls,
  fn
) => (new Promise(resolve => {
  setTimeout(resolve, mls)
})).then(fn)
