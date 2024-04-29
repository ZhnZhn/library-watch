import {
  useRef,
  useState,
  useCallback,
  focusRefNextSiblingFirstChildElement
} from '../uiApi';

import useToggle from '../hooks/useToggle';
import useKeyDelete from '../hooks/useKeyDelete';
import useKeyEnter from '../hooks/useKeyEnter';

import A from '../zhn-atoms/A';
import {
  CL_ITEM,
  CL_ITEM_TITLE,
  CL_LINK_WARPPER
} from '../styles/CL';

import {
  S_COLOR_GREY,
  S_PR_8,
  S_PB_8
} from './Item.Style';
import DivComments from './DivComments';

const S_STATE = {
  ...S_PR_8,
  color: '#d7bb52'
}
, S_NUMBER = {
  ...S_PR_8,
  color: '#80c040'
}
, S_DATE = {
  ...S_PR_8,
  ...S_COLOR_GREY
}
, S_SHOW_HIDE = {
  padding: 8
}

const IssueItem = ({
  url,
  state,
  number,
  createdAt,
  updatedAt,
  title,
  comments,
  body
}) => {
  const _refItem = useRef()
  , [
    isDescr,
    toggleIsDescr
  ] = useToggle(false)
  , [
    isShow,
    setIsShow
  ] = useState(true)
  , _close = useCallback(() => {
    setIsShow(false)
    focusRefNextSiblingFirstChildElement(_refItem)
  }, [])
  , _onKeyDownItem = useKeyDelete(_close)
  , _onKeyDown = useKeyEnter(toggleIsDescr, { isPropagation: true });

  return (
    <A.ShowHide
       refEl={_refItem}
       isShow={isShow}
       className={CL_ITEM}
       onKeyDown={_onKeyDownItem}
    >
      <div
         role="button"
         tabIndex="0"
         className={CL_ITEM_TITLE}
         onClick={toggleIsDescr}
         onKeyDown={_onKeyDown}
      >
           <div style={S_PB_8}>
             <span style={S_STATE}>
               {state}
             </span>
             <span style={S_NUMBER}>
               {`(#${number})`}
             </span>
             <span style={S_DATE}>
               {createdAt}
             </span>
             <span style={S_DATE}>
               {updatedAt}
             </span>
           </div>
           <div>
             {title}
           </div>
      </div>
      <A.ShowHide isShow={isDescr} style={S_SHOW_HIDE}>
        <A.Link className={CL_LINK_WARPPER} href={url}>
          {body}
        </A.Link>
        <DivComments n={comments} />
      </A.ShowHide>
    </A.ShowHide>
  )
};

export default IssueItem
