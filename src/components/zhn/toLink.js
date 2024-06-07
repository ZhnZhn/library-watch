const toLink = (
  href
) => {
  const protocol = (href || '')
    .split('://')[0];
  return protocol === 'https'
    ? href
    : void 0;
};

export default toLink
