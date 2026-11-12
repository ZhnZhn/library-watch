import { CL_SOURCE_LINK } from '../styleFn';
import toLink from './toLink';

export const Link = (props) => {
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

export const SourceLink = ({
  children,
  ...restProps
}) => (
  <Link
    className={CL_SOURCE_LINK}   
    {...restProps}
  >
    {children}
  </Link>
)
