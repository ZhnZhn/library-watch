import { bindTo } from '../uiApi';
import toLink from './toLink';

const _onError = (
  src,
  event
) => {
  console.log("Failed to load image with src: " + src);
};

const Img = ({
  alt,
  className,
  src
}) => {
  const _src = toLink(src);
  return _src ? (
    <img
       alt={alt}
       className={className}
       src={_src}
       onError={bindTo(_onError, _src)}
    />
  ) : null;
};

export default Img
