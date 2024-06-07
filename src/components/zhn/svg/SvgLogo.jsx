
const SvgLogo = ({
  w,
  h=w,
  children,
  ...restProps
}) => (
  <svg
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    {...restProps}
    aria-hidden="true"
    viewBox={`0 0 ${w} ${h}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

export default SvgLogo
