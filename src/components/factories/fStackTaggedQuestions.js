import { htmlDecode } from '../../utils/domFn';
import formatDate from '../../utils/formatDate';

import StackTaggedQuestions from '../items/stack/TaggedQuestions';

const THREE_ZERO = '000';

const _fnTransform = items => {
  return (items || []).map(item => {
     const { title, last_activity_date, owner={} } = item
     , { display_name } = owner
     , _millisUTC = last_activity_date + '' + THREE_ZERO;

     item.dateAgo = formatDate(_millisUTC)
     item.title = htmlDecode(title);
     item.owner.display_name = htmlDecode(display_name);

     return item;
  });
}

const fStackTaggedQuestions = ({
  createElement,
  option,
  json={},
  parentProps,
  onCloseItem,
  onWatchItem
}) => {
  const {
    repo,
    requestType,
    chartType,
    browserType,
    key
  } = option
  //, key = `${repo}_${requestType}`
  , _items = _fnTransform(json.items);

  return createElement(StackTaggedQuestions, {
     key,
     repo,
     requestType,
     caption: repo,
     items: _items,
     onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
     onWatchItem: onWatchItem,
     ...parentProps
  });
}

export default fStackTaggedQuestions
