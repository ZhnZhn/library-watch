import CL from '../styles/CL';

const _toLink = (href) => {
  const protocol = (href || '')
   .split('://')[0];
  return protocol === 'https'
    ? href
    : void 0;
};

const Link = ({ style, href, caption }) => {
  const _href = _toLink(href);
  return _href ? (
    <a target="_blank"
        className={CL.SOURCE_LINK}
        style={style}
        href={href}
       >{caption}</a>
    ) : null;
};

export default Link
