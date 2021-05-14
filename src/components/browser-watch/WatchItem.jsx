import SvgClose from '../zhn-atoms/SvgClose';

const STYLE = {
  ITEM_DIV : {
    position: 'relative',
    paddingRight: 40,
    paddingTop : 5,
    paddingBottom: 5,
    lineHeight : 1.4
  },
  ITEM_SPAN : {
    display: 'inline-block',
    verticalAlign : 'middle',
    width: '100%',
    maxWidth: 250,
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
     return;
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

const WatchItem = ({
  item, className, isModeEdit, option,
  onClick, onClose,
  onDragStart, onDragEnter, onDragOver, onDragLeave, onDrop
}) => {
  const { repo, version, date } = item
  , _compBtClose = isModeEdit
       ? (<SvgClose
             style={STYLE.SVG_CLOSE}
             onClose={onClose.bind(null, option)}
          />)
      : null
  , _compVersionDateRow = version
       ? <VersionDateRow version={version} date={date} />
       : null
  , _itemHandlers = isModeEdit ? {
       onDragStart: onDragStart.bind(null, option),
          onDrop: onDrop.bind(null, option),
          onDragOver,
          onDragEnter,
          onDragLeave,
     } : void 0;

  return (
     <div
       className={className}
       style={STYLE.ITEM_DIV}
       onClick={onClick.bind(null, item)}
       draggable={isModeEdit}
       {..._itemHandlers}
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
