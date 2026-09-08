import toLink from './toLink';

const Link = (props) => {
  const _href = toLink(props.href);
  return _href ? (
    <a target="_blank"
       rel="noopener"
       className={props.className}
       style={props.style}
       href={props.href}
       title={props.title}
    >{props.children}</a>
  ) : null;
};

export default Link
