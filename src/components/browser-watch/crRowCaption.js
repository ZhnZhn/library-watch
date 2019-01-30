const crRowCaption = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str[str.length-1] !== ':'
    ? str + ':'
    : str;
};

export default crRowCaption
