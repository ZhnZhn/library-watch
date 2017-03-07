import React, { PropTypes } from 'react';

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

const MenuPart = ({ caption, items, isInitClose }) => (
  <OpenClose2 caption={caption} isClose={isInitClose}>
     {_renderMenuItems(items)}
  </OpenClose2>
)

MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
MenuPart.defaultProps = {
  items: []
}

export default MenuPart
