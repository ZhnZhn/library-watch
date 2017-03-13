import React, { PropTypes } from 'react';

import MenuBadge from '../zhnAtoms/MenuBadge';
import OpenClose2 from '../zhnAtoms/OpenClose2';

const _renderMenuItems = function(rowClass, items=[]){
  return items.map((item, index) => {
    const _className = (rowClass)
             ? rowClass + ' not-selected'
             : (index % 2)
                 ? 'row__topic__even not-selected'
                 : 'row__topic__odd not-selected'
        , menuBadge = (item.counter !== 0)
             ? (
                  <MenuBadge
                    counter={item.counter}
                    isOpen={item.isOpen}
                    onBadgeOpen={item.onBadgeOpen}
                    onBadgeClose={item.onBadgeClose}
                 />
                )
              : null;
    return (
       <div
           key={index}
           className={_className}
           onClick={item.onClick}
        >
          {item.title}
          {menuBadge}
       </div>
    )
  })
}

const MenuPart = ({ rowClass, caption, items, isInitClose }) => (
  <OpenClose2
     caption={caption}
     isClose={isInitClose}
  >
     {_renderMenuItems(rowClass, items)}
  </OpenClose2>
)

MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}

export default MenuPart
