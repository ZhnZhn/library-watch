const _crCaption = props => props.repo;

const crItemWatch = (props, itemDesription, crCaption=_crCaption) => {
  const { repo, requestType, version='' } = props
  , caption = _crCaption(props);
  return {
    caption,
    config: {
      descr: itemDesription,
      caption, version,
      repo, requestType
    }
  };
};

export default crItemWatch
