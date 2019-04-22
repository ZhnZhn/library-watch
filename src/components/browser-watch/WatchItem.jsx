import React from 'react';

import SvgClose from '../zhn-atoms/SvgClose';

const STYLE = {
  ITEM_DIV : {
    position: 'relative',
    paddingRight: '40px',
    lineHeight : 1.4,
    paddingTop : '5px',
    paddingBottom: '5px'
  },
  ITEM_SPAN : {
    display: 'inline-block',
    verticalAlign : 'middle',
    width: '100%',
    maxWidth: '250px',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },

  SVG_CLOSE : {
    position: 'absolute',
    right: 0
  },

  DATE_SPAN : {
    float : 'right'
  }
}


const VersionDateRow = (props) => {
   const { version, date='' } = props
   if (!version) {
     return undefined;
   }
   return (
     <div>
       <span>
         {version}
       </span>
       <span style={STYLE.DATE_SPAN}>
          {date.split(' ')[0]}
       </span>
     </div>
   );
}

const WatchItem = (props) => {
  const {
           item, className, isModeEdit, option,
           onClick, onClose,
           onDragStart, onDragEnter, onDragOver, onDragLeave, onDrop
         } = props

  const { repo, version, date } = item
      , _compBtClose = (isModeEdit)
           ? (
               <SvgClose
                 style={STYLE.SVG_CLOSE}
                 onClose={onClose.bind(null, option)}
               />
            )
          : undefined
      , _compVersionDateRow = (version)
           ? (
               <VersionDateRow
                  version={version}
                  date={date}
               />
             )
           : undefined

  return (
     <div
       className={className}
       style={STYLE.ITEM_DIV}
       onClick={onClick.bind(null, item)}
       draggable={isModeEdit}
       onDragStart={isModeEdit && onDragStart.bind(null, option)}
       onDrop={isModeEdit && onDrop.bind(null, option)}
       onDragOver={isModeEdit && onDragOver}
       onDragEnter={isModeEdit && onDragEnter}       
       onDragLeave={isModeEdit && onDragLeave}
     >
       <div>
         <span style={STYLE.ITEM_SPAN}>
           {repo}
         </span>
         {_compBtClose}
       </div>
       {_compVersionDateRow}
    </div>
  );
};

export default WatchItem
