import {
  memo,
  useCallback
} from '../uiApi';

import TransformFn from '../zhn-select/TransformFn';
import InputSearch from '../zhn-select/InputSearch';
import ItemTopicOption from '../zhn-select/ItemTopicOption';

const SEARCH_PLACEHOLDER = 'Find Item'
, FN_NOOP = () => {}
, _isNotShouldUpdate = (_, nextProps) =>
   !nextProps.isShouldUpdate

const WrapperInputSearch = memo(({
  style,
  data,
  onSelect=FN_NOOP
}) => {
  const _hSelectItem = useCallback(item => {
     if (item) {
       onSelect(item);
     }
  }, [onSelect])
  , _options = TransformFn.fromLevel3(data);

  return (
    <div style={style}>
      <InputSearch
         placeholder={SEARCH_PLACEHOLDER}
         propCaption="caption"
         options={_options}
         ItemOptionComp={ItemTopicOption}
         onSelect={_hSelectItem}
      />
   </div>
  );
}, _isNotShouldUpdate);

export default WrapperInputSearch
