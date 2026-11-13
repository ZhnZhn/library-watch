import Svg100 from './svg/Svg100';

const CL_BT_MORE = 'bt-more';

const SvgMore = ({
  style,
  svgStyle,
  btRef,
  onClick
}) => (
  <button
    type="button"
    ref={btRef}
    className={CL_BT_MORE}
    style={style}
    onClick={onClick}
  >
    <Svg100
      w="6"
      height="22"          
      width="6px"
      height="22px"
      style={svgStyle}            
    >
      <circle cx="3" cy="4" r="2" />
      <circle cx="3" cy="11" r="2" />
      <circle cx="3" cy="18" r="2" />
    </Svg100>
  </button>
);


export default SvgMore
