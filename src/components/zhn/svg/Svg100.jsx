
const Svg100 = ({
  w=12,
  h=w,
  children,
  ...restProps
}) => (
  <svg
    viewBox={`0 0 ${w} ${h}`}
    aria-hidden="true"
    width="100%"
    height="100%"
    {...restProps}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"    
  >
   {children}
  </svg>
);

export default Svg100
