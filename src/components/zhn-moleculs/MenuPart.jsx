import React, { useCallback } from 'react';
import isKeyEnter from '../zhn-atoms/isKeyEnter'
import MenuBadge from '../zhn-atoms/MenuBadge';
import OpenClose2 from '../zhn-atoms/OpenClose2';

const CL = {
  NOT_SELECTED: 'not-selected',
  ROW_EVEN: 'row__topic__even not-selected',
  ROW_ODD: 'row__topic__odd not-selected'
};

const FILL_OPEN = '#1b2836';
const FILL_CLOSE = 'transparent';


const S = {
  CAPTION_ROW: {
    paddingLeft: 6
  }
};

const MenuItem = ({ title, className, menuBadge, onClick }) => {
  const _hKeyDown = useCallback((event)=>{
    if(isKeyEnter(event)) {
      onClick()
    }
  }, []);
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
}

const _renderMenuItems = function(rowClass, items=[]){
  return items.map((item, index) => {
    const { counter, title, onClick } = item
    const _className = rowClass
             ? rowClass + ' ' + CL.NOT_SELECTED
             : (index % 2)
                 ? CL.ROW_EVEN
                 : CL.ROW_ODD
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
    )
  })
}

const MenuPart = ({ rowClass, caption, items, isInitClose }) => (
  <OpenClose2
     styleCaptionRow={S.CAPTION_ROW}
     fillOpen={FILL_OPEN}
     fillClose={FILL_CLOSE}
     caption={caption}
     isClose={isInitClose}
  >
     {_renderMenuItems(rowClass, items)}
  </OpenClose2>
)

/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/

export default MenuPart
