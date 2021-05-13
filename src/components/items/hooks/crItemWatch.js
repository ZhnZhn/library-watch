const crItemWatch = (repo, requestType, itemDesription) => {
  const caption = `${repo}`;
  return {
    caption,
    config: {
      version: '',
      descr: itemDesription,
      repo, requestType, caption
    }
  };
};

export default crItemWatch
