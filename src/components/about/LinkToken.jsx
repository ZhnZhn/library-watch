import { SourceLink } from '../zhn/Link';

const S_WRAPPER = {
   display: 'inline-block',
   padding: '0 8px'
};

const LinkToken = ({
  color,
  href,
  title,
  caption,
  children
}) => (
  <span style={S_WRAPPER}>
    <SourceLink     
      style={{ color }}
      href={href}
      title={title}
    >
      {caption || children}
    </SourceLink>
  </span>
);


export default LinkToken
