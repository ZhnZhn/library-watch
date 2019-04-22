import React from 'react';
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
