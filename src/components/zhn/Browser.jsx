import { crShowPopupStyle } from '../styleFn';
import { S_BROWSER } from '../styles/ContainerStyles';

const Browser = (props) => {
  const [
    _style,
    _className
  ] = crShowPopupStyle(props.isShow);
  return (
    <div
      role="presentation"
      className={_className}
      style={{...S_BROWSER, ...props.style, ..._style}}
      onKeyDown={props.onKeyDown}
    >
      {props.children}
    </div>
  );
};

export default Browser
