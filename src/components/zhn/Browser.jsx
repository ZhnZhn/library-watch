import { crShowPopupStyle } from '../styleFn';
import { S_BROWSER } from '../styles/ContainerStyles';

const Browser = ({
  isShow,
  style,
  onKeyDown,
  children
}) => {
    const [
      _style,
      _className
    ] = crShowPopupStyle(isShow);      
    return (
      <div
        className={_className}
        style={{...S_BROWSER, ...style, ..._style}}
        role="presentation"
        onKeyDown={onKeyDown}
      >
        {children}
      </div>
    );
};

export default Browser
