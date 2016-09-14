import StackTaggedQuestions from '../items/StackTaggedQuestions';

const fStackTaggedQuestions = function({
  factory, option, json=[], parentProps, onCloseItem, onWatchItem
}) {
  const { repo, requestType, chartType, browserType } = option
      , key = `${repo}_${requestType}`
  return factory.createElement(StackTaggedQuestions, {
      key : key,
      repo : repo,
      requestType : requestType,
      caption : `${repo}`,
      items : json.items,
      onCloseItem : onCloseItem.bind(null, chartType, browserType, key),
      onWatchItem : onWatchItem,
      ...parentProps
  })
}

export default fStackTaggedQuestions
