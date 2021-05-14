const CL = "source-link";

const S = {
  WRAPPER: {
    display: 'inline-block',
    paddingLeft: 8,
    paddingRight: 8
  }
};

const LinkToken = ({
  color, href,
  caption, title,
  children
}) => (
  <span style={S.WRAPPER}>
    <a
      className={CL}
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
