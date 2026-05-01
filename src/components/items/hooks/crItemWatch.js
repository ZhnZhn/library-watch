const _crCaptionDf = props => props.repo;

const crItemWatch = (
  props,
  itemDesription,
  crCaption=_crCaptionDf
) => {
  const {
    repo,
    requestType,
    version=''
  } = props
  , caption = crCaption(props);
  return {
    caption,
    config: {
      descr: itemDesription,
      caption,
      version,
      repo,
      requestType
    }
  };
};

export default crItemWatch
