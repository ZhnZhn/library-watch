import Svg100 from './Svg100';

const SvgIcon = ({
  color='currentColor',
  size='24',
  children,
  ...restProps
}) => (
    <Svg100
      w={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...restProps}
    >
      {children}
    </Svg100>
);

export default SvgIcon
