import { useState } from '../../uiApi';
import useDnDHandlers from './useDnDHandlers';

import { HAS_TOUCH_EVENTS } from '../../has';
import A from '../../zhn-atoms/A';
import TagList from './TagList';

const CL = 'row-item not-selected'

, S_NONE = { display: 'none' }
, S_ITEM_CAPTION = {
  display: 'flex',
  flexWrap: 'wrap',
  paddingBottom: 8
}
, S_BADGE = {
  display: 'inline-block',
  fontSize: 18,
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
  display: 'inline-block',
  fontSize: '18px'
}
, S_TITLE = {
  paddingBottom: 8,
  fontSize: '18px'
};

const TOKEN_ANSWER = HAS_TOUCH_EVENTS ? 'A' : (
  <span role="img" arial-label="hammer and pick">&#x2692;</span>
);
const TOKEN_SCORE = HAS_TOUCH_EVENTS ? 'S' : (
  <span role="img" aria-label="fish">&#x1F41F;</span>
);
const TOKEN_VIEW = HAS_TOUCH_EVENTS ? 'V' : (
  <span role="img" aria-label="wheel of dharma">&#x2638;</span>
);
const TOKEN_REPUTATION = HAS_TOUCH_EVENTS ? 'R' : (
  <span role="img" arial-label="shamrock">&#x2618;</span>
);

const FN_NOOP = () => {};

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
  } = owner || {}
  , _style = isClosed ? S_NONE : void 0;

  return (
    <div
      className={CL}
      style={_style}
      {..._itemHandlers}
    >
       <A.Link href={link}>
         <div style={S_ITEM_CAPTION}>
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
