import { htmlDecode } from '../../utils/domFn';
import { safeFormatSec } from '../../utils/formatDate';

import { safeMap } from '../uiApi';

import StackTaggedQuestions from '../items/stack/TaggedQuestions';

const _crItems = items => {
  const _nowMls = Date.now();
  return safeMap(items, item => {
     const {
       title,
       last_activity_date,
       owner
     } = item
     , { display_name } = owner || {};

     item.dateAgo = safeFormatSec(last_activity_date, _nowMls)
     item.title = htmlDecode(title);
     item.owner.display_name = htmlDecode(display_name);

     return item;
  });
};

const fStackTaggedQuestions = ({
  createElement,
  option,
  json,
  parentProps,
  onCloseItem,
  onWatchItem
}) => {
  const {
    repo,
    requestType,
    key
  } = option
  , {
    items
  } = json || {}
  , _items = _crItems(items);

  return createElement(StackTaggedQuestions, {
     key,
     repo,
     requestType,
     caption: repo,
     items: _items,
     onCloseItem,     
     onWatchItem: onWatchItem,
     ...parentProps
  });
};

export default fStackTaggedQuestions
