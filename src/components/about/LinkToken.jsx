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
    <a
      className={CL_SOURCE_LINK}
      style={{ color }}
      target="_blank"
      href={href}
      title={title}
    >
      {caption || children}
    </a>
  </span>
);


export default LinkToken
