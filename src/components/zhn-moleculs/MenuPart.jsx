import { crClNotSelected } from '../styleFn';
import useKeyEnter  from '../hooks/useKeyEnter';

import AtomCounter from '../zhn-atoms/AtomCounter';
import OpenClose2 from '../zhn-atoms/OpenClose2';

const CL_NOT_SELECTED = crClNotSelected()
, CL_ROW_ITEM = `row__topic`
, FILL_OPEN = '#1b2836'
, FILL_CLOSE = 'transparent'

, S_CAPTION_ROW = { paddingLeft: 6 };

const MenuItem = ({
  item,
  className,
  onFocus
}) => {
  const _hKeyDown = useKeyEnter(item.onClick);
  return (
    <div
      role="menuitem"
      tabIndex={0}
      className={className}
      onClick={item.onClick}
      onKeyDown={_hKeyDown}
      onFocus={onFocus}
     >
       {item.title}
       <AtomCounter
          atom={item.atomCounter}
          onOpen={item.onOpen}
          onClose={item.onClose}
       />
    </div>
  );
};

const MenuPart = ({
  refFirstItem,
  rowClass,
  caption,
  items,
  isInitClose,
  onFocus
}) => (
  <OpenClose2
     refItem={refFirstItem}
     styleCaptionRow={S_CAPTION_ROW}
     fillOpen={FILL_OPEN}
     fillClose={FILL_CLOSE}
     caption={caption}
     isClose={isInitClose}
     onFocus={onFocus}
  >
     {(items || []).map((item, index) => (
         <MenuItem
            key={item.id || index}
            className={`${rowClass || CL_ROW_ITEM} ${CL_NOT_SELECTED}`}
            item={item}
            onFocus={onFocus}
         />
     ))}
  </OpenClose2>
);

/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/

export default MenuPart
