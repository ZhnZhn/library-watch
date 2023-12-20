import useKeyEnter from '../hooks/useKeyEnter';
import SvgClose from '../zhn-atoms/SvgClose';

const S_ITEM_DIV = {
  position: 'relative',
  paddingRight: 40,
  paddingTop : 5,
  paddingBottom: 5,
  lineHeight: 1.4
}
, S_ITEM_SPAN = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '100%',
  maxWidth: 250,
  textOverflow: 'ellipsis',
  overflow: 'hidden'
}
, S_SVG_CLOSE = {
  position: 'absolute',
  right: 0
}
, S_DATE_SPAN = {
  float: 'right'
};

const VersionDateRow = ({
  version,
  date
}) => version ? (
  <div>
   <span>
     {version}
   </span>
   <span style={S_DATE_SPAN}>
      {(date || '').split(' ')[0]}
   </span>
  </div>
) : null;

const WatchItem = ({
  item,
  className,
  isModeEdit,
  onClick,
  onClose,
  ddItemHandlers,
}) => {
  const {
    repo,
    version,
    date
  } = item
  , _onKeyDown = useKeyEnter(onClick);

  return (
     <div
       role="menuitem"
       tabIndex="0"
       className={className}
       style={S_ITEM_DIV}
       onClick={onClick}
       onKeyDown={_onKeyDown}
       draggable={isModeEdit}
       {...ddItemHandlers}
     >
       <div>
         <span style={S_ITEM_SPAN}>
           {repo}
         </span>
         {isModeEdit
            ? <SvgClose
                 style={S_SVG_CLOSE}
                 onClose={onClose}
               />
            : null
         }
       </div>
       {version
          ? <VersionDateRow
               version={version}
               date={date}
            />
          : null
       }
    </div>
  );
};

export default WatchItem
