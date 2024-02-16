import { crMemoCompList } from '../../hoc/memoFn';

import TaggedItem from './TaggedItem';

const TaggedItemList = crMemoCompList(
 (item, index, { onRemoveItem }) => (
   <TaggedItem
      key={item.question_id || index}
      item={item}
      onRemoveItem={onRemoveItem}
   />
 )
)

export default TaggedItemList
