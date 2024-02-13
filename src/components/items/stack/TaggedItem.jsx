import { useState } from '../../uiApi';
import { crClNotSelected } from '../../styleFn';

import useDnDHandlers from './useDnDHandlers';

import { HAS_TOUCH_EVENTS } from '../../has';
import A from '../../zhn-atoms/A';
import TagList from './TagList';

const CL = crClNotSelected("row-item")
, S_NONE = { display: 'none' }
, S_INLINE_BLOCK = { display: 'inline-block'}
, S_FS_18 = { fontSize: '18px' }
, S_ITEM_CAPTION = {
  display: 'flex',
  flexWrap: 'wrap',
  paddingBottom: 8
}
, S_BOUNTY = {
  color: '#6495ed',
  padding: '2px 8px 2px 0'
}
, S_BADGE = {
  ...S_INLINE_BLOCK,
  ...S_FS_18,
  paddingRight: 8
}
, S_FISH_BADGE = {
  ...S_BADGE,
  color: '#d7bb52'
}
, S_GREEN_BADGE = {
  ...S_BADGE,
  color: '#80c040'
}
, S_BLACK_BAGDE = {
  ...S_BADGE,
  color: 'black'
}
, S_DATE_AGO = {
  ...S_INLINE_BLOCK,
  ...S_FS_18
}
, S_TITLE = {
  ...S_FS_18,
  paddingBottom: 8
}

, TOKEN_ANSWER = HAS_TOUCH_EVENTS ? "A" : (
   <span role="img" arial-label="hammer and pick">&#x2692;</span>
 )
, TOKEN_SCORE = HAS_TOUCH_EVENTS ? "S" : (
   <span role="img" arial-label="fish">&#x1F41F;</span>
 )
, TOKEN_VIEW = HAS_TOUCH_EVENTS ? "V" : (
   <span role="img" arial-label="wheel of dharma">&#x2638;</span>
 )
, TOKEN_REPUTATION = HAS_TOUCH_EVENTS ? "R" : (
   <span role="img" arial-label="shamrock">&#x2618;</span>
 )

, FN_NOOP = () => {};

const TaggedItem = ({
  item,
  onRemoveItem=FN_NOOP,
  onRemoveUnder=FN_NOOP
}) => {
  const [
    isClosed,
    setIsClose
  ] = useState(false)
  , _itemHandlers = useDnDHandlers(
      item,
      setIsClose,
      onRemoveItem,
      onRemoveUnder
   )
  , {
     is_answered,
     bounty_amount,
     answer_count,
     score,
     view_count,
     title,
     dateAgo,
     link,
     owner,
     tags
  } = item
  , {
    reputation,
    display_name
  } = owner || {};

  return (
    <div
      className={CL}
      style={isClosed ? S_NONE : void 0}
      {..._itemHandlers}
    >
       <A.Link href={link}>
         <div style={S_ITEM_CAPTION}>
           {bounty_amount && <span style={S_BOUNTY}>
             {`+${bounty_amount}`}
           </span>}
           <span style={is_answered ? S_GREEN_BADGE: S_FISH_BADGE}>
             {TOKEN_ANSWER}&nbsp;{answer_count}
           </span>
           <span style={S_FISH_BADGE}>
             {TOKEN_SCORE}&nbsp;{score}
           </span>
           <span style={S_BLACK_BAGDE}>
             {TOKEN_VIEW}&nbsp;{view_count}
           </span>
           <span style={S_GREEN_BADGE}>
             {TOKEN_REPUTATION}&nbsp;{reputation}
           </span>
           <span style={S_BLACK_BAGDE}>
             {display_name}
           </span>
           <A.DateAgo
              style={S_DATE_AGO}
              dateAgo={dateAgo}
           />
         </div>
         <div style={S_TITLE}>
           {title}
         </div>
         <TagList tags={tags} />
       </A.Link>
    </div>
  );
};

export default TaggedItem
