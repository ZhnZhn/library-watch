import timeago from 'timeago.js';

const formatDate = (mlsOrStr) => timeago(Date.now())
  .format(mlsOrStr);

export default formatDate
