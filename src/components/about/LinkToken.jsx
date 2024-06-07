import Link from '../zhn/Link';

const CL_SOURCE_LINK = "source-link"
, S_WRAPPER = {
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
    <Link
      className={CL_SOURCE_LINK}
      style={{ color }}
      href={href}
      title={title}
    >
      {caption || children}
    </Link>
  </span>
);


export default LinkToken
