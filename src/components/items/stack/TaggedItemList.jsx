import { memo, safeMap } from '../../uiApi';

import TaggedItem from './TaggedItem';

const _isNotShouldRerender = (
  prevProps,
  nextProps
) => prevProps.items === nextProps.items;

const TaggedItemList = memo(({
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
), _isNotShouldRerender);

export default TaggedItemList
