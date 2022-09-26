import useKeyEnter  from '../hooks/useKeyEnter';
import MenuBadge from '../zhn-atoms/MenuBadge';
import OpenClose2 from '../zhn-atoms/OpenClose2';

const CL_NOT_SELECTED = 'not-selected'
, CL_ROW_ITEM = `row__topic ${CL_NOT_SELECTED}`
, FILL_OPEN = '#1b2836'
, FILL_CLOSE = 'transparent'

, S_CAPTION_ROW = { paddingLeft: 6 };

const MenuItem = ({
  title,
  className,
  menuBadge,
  onClick
}) => {
  const _hKeyDown = useKeyEnter(onClick);
  return (
    <div
      role="menuitem"
      tabIndex={0}
      className={className}
      onClick={onClick}
      onKeyDown={_hKeyDown}
     >
       {title}
       {menuBadge}
    </div>
  );
};

const _renderMenuItems = (
  rowClass,
  items=[]
) => {
  return (items || []).map((item, index) => {
    const {
      counter,
      title,
      onClick
    } = item
    , _className = rowClass
         ? rowClass + ' ' + CL_NOT_SELECTED
         : CL_ROW_ITEM

    , menuBadge = (counter !== 0)
         ? (
              <MenuBadge
                counter={counter}
                isOpen={item.isOpen}
                onBadgeOpen={item.onBadgeOpen}
                onBadgeClose={item.onBadgeClose}
             />
            )
          : null;
    return (
      <MenuItem
         key={index}
         className={_className}
         title={title}
         menuBadge={menuBadge}
         onClick={onClick}
      />
    );
  })
};

const MenuPart = ({
  rowClass,
  caption,
  items,
  isInitClose
}) => (
  <OpenClose2
     styleCaptionRow={S_CAPTION_ROW}
     fillOpen={FILL_OPEN}
     fillClose={FILL_CLOSE}
     caption={caption}
     isClose={isInitClose}
  >
     {_renderMenuItems(rowClass, items)}
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
