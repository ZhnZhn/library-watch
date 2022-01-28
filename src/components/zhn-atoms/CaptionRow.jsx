import SvgClose from './SvgClose';
import STYLE from './CaptionRow.Style'

const CaptionRow = ({
  style,
  caption='',
  onClose,
  children,
}) => (
  <div
    className={STYLE.CL_CAPTION}
    style={style}
  >
     <span
        className={STYLE.CL_NOT_SELECTED}
        style={STYLE.CAPTION}
     >
       {caption}
    </span>
    {children}
    <SvgClose
       style={STYLE.SVG_CLOSE}
       onClose={onClose}
    />
  </div>
);

export default CaptionRow;
