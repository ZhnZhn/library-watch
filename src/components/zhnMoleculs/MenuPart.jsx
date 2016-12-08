import React from 'react';

import MenuBadge from '../zhnAtoms/MenuBadge';
import OpenClose2 from '../zhnAtoms/OpenClose2';

const _renderMenuItems = function(items){
  return items.map((item, index) => {
    const className = (index % 2)
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
           className={className}
           onClick={item.onClick}
        >
          {item.title}
          {menuBadge}
       </div>
    )
  })
}

const MenuPart = (props) => {
  const {caption, items} = props;
  return (
    <OpenClose2 caption={caption}>
        {_renderMenuItems(items)}
    </OpenClose2>
  )
}

export default MenuPart
