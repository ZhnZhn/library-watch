import { memo } from '../../uiApi';

import TaggedItem from './TaggedItem';

const _isNotShouldRerender = (prevProps, nextProps) =>
 prevProps.items === nextProps.items;

const TaggedItemList = memo(({
  items,
  onRemoveItem
}) => (
  <>
    {(items || []).map((item, index) => {
       const { question_id } = item;
       return (
         <TaggedItem
            key={question_id}
            item={item}
            onRemoveItem={onRemoveItem}
          />
       );
    })}
  </>
), _isNotShouldRerender);

export default TaggedItemList
