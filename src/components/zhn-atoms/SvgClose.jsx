import crCn from '../zhn-utils/crCn';

const COLOR = "#ed5813"
, CL_SVG_CLOSE = "svg-close"
, S_SVG = { padding: 3 };

const SvgClose = ({
  className,
  style,
  onClose
}) => (
  <button
      type="button"
      tabIndex="-1"
      className={crCn(CL_SVG_CLOSE, className)}
      style={style}
      onClick={onClose}
   >
     <svg
       preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 12 12" width="100%" height="100%"
       style={S_SVG}
       stroke={COLOR}
       strokeWidth="2"
       strokeLinecap="round"
      >
        <path d="M 0,0 L 12,12" />
        <path d="M 12,0 L 0,12" />
     </svg>
   </button>
);

export default SvgClose
