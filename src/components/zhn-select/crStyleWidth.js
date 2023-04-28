
const crStyleWidth = (
  width,
  style
) => width
  ? (''+width).indexOf('%') !== -1
      ? {...style, width: width}
      : {...style, width: width + 'px'}
  : null;

export default crStyleWidth
