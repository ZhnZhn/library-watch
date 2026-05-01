import { isFn } from '../../utils/isTypeFn';

import SvgMore from './SvgMore';
import CaptionToken from './CaptionToken';
import SvgClose from './SvgClose';

import {
  CL_CAPTION,
  S_SVG_CLOSE
} from './CaptionRow.Style';

const S_CAPTION_TOKEN = { paddingLeft: 0 }

const ContainerCaption = (props) => {
  const _isOnMore = isFn(props.onMore);
  return (
    <div className={CL_CAPTION} style={props.style}>
       {
         _isOnMore && <SvgMore
           style={props.moreStyle}
           onClick={props.onMore}
         />
       }
       <CaptionToken
         style={_isOnMore ? S_CAPTION_TOKEN : void 0}
         caption={props.caption}
       />
      {props.children}
      <SvgClose
         style={S_SVG_CLOSE}
         onClose={props.onClose}
      />
    </div>
  );
};

export default ContainerCaption
