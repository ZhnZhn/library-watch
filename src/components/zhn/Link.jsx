import toLink from './toLink';

const Link = ({
  className,
  style,
  href,
  title,
  children
}) => {
  const _href = toLink(href);
  return _href ? (
    <a target="_blank"
        className={className}
        style={style}
        href={href}
        title={title}
       >{children}</a>
    ) : null;
};

export default Link
