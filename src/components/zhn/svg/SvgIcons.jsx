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

export const SvgInfo = (props) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="8" />
  </SvgIcon>
)

export const SvgSave = (
  props
) => (
  <SvgIcon
    {...props}    
    viewBox="0 0 16 16"
    strokeWidth="1"
  >
     <path d="M14.4 3.2L12.8 1.6C12.4 1.2 11.9 1 11.4 1H3C1.9 1 1 1.9 1 3V13C1 14.1 1.9 15 3 15H13C14.1 15 15 14.1 15 13V4.6C15 4.1 14.8 3.6 14.4 3.2ZM9 2V3.5C9 3.8 8.8 4 8.5 4H6.5C6.2 4 6 3.8 6 3.5V2H9ZM5 14V9.5C5 9.2 5.2 9 5.5 9H10.5C10.8 9 11 9.2 11 9.5V14H5ZM14 13C14 13.6 13.6 14 13 14H12V9.5C12 8.7 11.3 8 10.5 8H5.5C4.7 8 4 8.7 4 9.5V14H3C2.5 14 2 13.6 2 13V3C2 2.4 2.4 2 3 2H5V3.5C5 4.3 5.7 5 6.5 5H8.5C9.3 5 10 4.3 10 3.5V2H11.4C11.6 2 11.9 2.1 12.1 2.3L13.7 3.9C13.9 4.1 14 4.4 14 4.6V13Z" />
  </SvgIcon>
)

export const SvgSettings = (props) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </SvgIcon>
)
