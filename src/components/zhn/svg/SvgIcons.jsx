import Svg100 from './Svg100';

const SvgIcon = ({
  color='currentColor',
  size='24',
  children,
  ...restProps
}) => (
  <Svg100
    w={size}
    width={size}
    height={size}
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

export const SvgInfo = ({
  color,
  size,
  children,
  ...restProps
}) => (
  <SvgIcon
    color={color}
    size={size}
    {...restProps}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="8" />
  </SvgIcon>
)

export const SvgSave = ({
  style,
  ...restProps
}) => (
  <SvgIcon
    {...restProps}
    style={{transform: "scale(1.5)", ...style}}
    size="16"
    strokeWidth="1"
  >
     <path d="M14.41 3.2L12.79 1.58C12.42 1.21 11.9 1 11.37 1H3C1.89 1 1 1.89 1 3V13C1 14.1 1.89 15 3 15H13C14.1 15 15 14.1 15 13V4.62C15 4.09 14.78 3.57 14.41 3.2ZM9 2V3.5C9 3.77 8.77 4 8.5 4H6.5C6.22 4 6 3.77 6 3.5V2H9ZM5 14V9.5C5 9.22 5.22 9 5.5 9H10.5C10.77 9 11 9.22 11 9.5V14H5ZM14 13C14 13.55 13.55 14 13 14H12V9.5C12 8.67 11.32 8 10.5 8H5.5C4.67 8 4 8.67 4 9.5V14H3C2.449 14 2 13.55 2 13V3C2 2.44 2.44 2 3 2H5V3.5C5 4.32 5.67 5 6.5 5H8.5C9.32 5 10 4.32 10 3.5V2H11.37C11.64 2 11.9 2.1 12.08 2.29L13.7 3.91C13.89 4.1 14 4.35 14 4.62V13Z" />
  </SvgIcon>
)

export const SvgSettings = (props) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </SvgIcon>
)
