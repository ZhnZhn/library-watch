import { bindTo } from '../uiApi';
import toLink from './toLink';

const _onError = (
  src,
  _evt
) => {
  /*eslint-disable no-undef */
  console.log("Failed to load image with src: " + src);
  /* eslint-enable no-undef */
};

const Img = (props) => {
  const _src = toLink(props.src);
  return _src ? (
    <img
       alt={props.alt}
       className={props.className}
       src={_src}
       onError={bindTo(_onError, _src)}
    />
  ) : null;
};

export default Img
