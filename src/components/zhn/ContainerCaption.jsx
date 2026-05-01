import { isFn } from '../../utils/isTypeFn';
import { crStyle2 } from '../styleFn';

import SvgMore from './SvgMore';
import SvgClose from './SvgClose';

import {
  CL_NOT_SELECTED
} from '../styleFn';
import {
  CL_CAPTION,
  S_CAPTION,
  S_SVG_CLOSE
} from './CaptionRow.Style';

const SL_CAPTION = { paddingLeft: 0 }

const ContainerCaption = ({
  style,
  moreStyle,
  caption='',
  onMore,
  onClose,
  children
}) => (
  <div className={CL_CAPTION} style={style}>
     {
       isFn(onMore) && <SvgMore
         style={moreStyle}
         onClick={onMore}
       />
     }
     <span
        className={CL_NOT_SELECTED}
        style={crStyle2(
          S_CAPTION,
          isFn(onMore) && SL_CAPTION
        )}
     >
       {caption}
    </span>
    {children}
    <SvgClose
       style={S_SVG_CLOSE}
       onClose={onClose}
    />
  </div>
);


export default ContainerCaption;
