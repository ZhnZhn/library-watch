import DomUtil from '../../utils/DomUtil';
import formatDate from '../../utils/formatDate'

import StackTaggedQuestions from '../items/stack/TaggedQuestions';

const THREE_ZERO = '000';

const _fnTransform = items => {
  return (items || []).map(item => {
     const { title, last_activity_date, owner={} } = item
     , { display_name } = owner
     , _millisUTC = last_activity_date + '' + THREE_ZERO;

     item.dateAgo = formatDate(_millisUTC)
     item.title = DomUtil.htmlDecode(title);
     item.owner.display_name = DomUtil.htmlDecode(display_name);

     return item;
  });
}

const fStackTaggedQuestions = ({
  factory, option, json={}, parentProps,
  onCloseItem, onWatchItem
}) => {
  const { repo, requestType, chartType, browserType, key } = option
  //, key = `${repo}_${requestType}`
  , _items = _fnTransform(json.items);

  return factory.createElement(StackTaggedQuestions, {
      key : key,
      repo : repo,
      requestType : requestType,
      caption : `${repo}`,
      items : _items,
      onCloseItem : onCloseItem.bind(null, chartType, browserType, key),
      onWatchItem : onWatchItem,
      ...parentProps
  });
}

export default fStackTaggedQuestions
