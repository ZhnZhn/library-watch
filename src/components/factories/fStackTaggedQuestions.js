import timeago from 'timeago.js';
import DomUtil from '../../utils/DomUtil';

import StackTaggedQuestions from '../items/stack/TaggedQuestions';

const THREE_ZERO = '000';

const _fnTransform = (items=[]) => {
  const _timeago = timeago(Date.now());
  return items.map((item) => {
     const { title, last_activity_date, owner={} } = item
         , { display_name } = owner
         , _millisUTC = last_activity_date + '' + THREE_ZERO

     item.dateAgo = _timeago.format(_millisUTC);
     item.title = DomUtil.htmlDecode(title);
     item.owner.display_name = DomUtil.htmlDecode(display_name);

     return item;
  });
}

const fStackTaggedQuestions = function({
  factory, option, json={}, parentProps, onCloseItem, onWatchItem
}) {
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
