import { safeMap } from '../../uiApi';
import { memoItems } from '../../hoc/memoFn'

import TaggedItem from './TaggedItem';

const TaggedItemList = memoItems(({
  items,
  onRemoveItem
}) => (
  <>
    {safeMap(items, (item, index) => (
       <TaggedItem
          key={item.question_id || index}
          item={item}
          onRemoveItem={onRemoveItem}
       />
    ))}
  </>
));

export default TaggedItemList
