import React from 'react';
//import PropTypes from 'prop-types'

import MenuBadge from '../zhnAtoms/MenuBadge';
import OpenClose2 from '../zhnAtoms/OpenClose2';

const CL = {
  NOT_SELECTED: 'not-selected',
  ROW_EVEN: 'row__topic__even not-selected',
  ROW_ODD: 'row__topic__odd not-selected'
};

const COLOR_FILL = '#1b2836';

const S = {
  CAPTION_ROW: {
    paddingLeft: 6
  }
};

const _renderMenuItems = function(rowClass, items=[]){
  return items.map((item, index) => {
    const _className = (rowClass)
             ? rowClass + ' ' + CL.NOT_SELECTED
             : (index % 2)
                 ? CL.ROW_EVEN
                 : CL.ROW_ODD
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
         tabIndex={0}
         className={_className}
         onClick={item.onClick}
         //onKeyPress={item.onClick}
        >
          {item.title}
          {menuBadge}
       </div>
    )
  })
}

const MenuPart = ({ rowClass, caption, items, isInitClose }) => (
  <OpenClose2
     styleCaptionRow={S.CAPTION_ROW}
     fillOpen={COLOR_FILL}
     fillClose={COLOR_FILL}
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
