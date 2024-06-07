import {
  S_BLOCK,
  S_NONE,
  CL_SHOW_POPUP
} from '../styles/CL';

import {
  S_BROWSER
} from '../styles/ContainerStyles';

const Browser = ({
  isShow,
  style,
  onKeyDown,
  children
}) => {
    const [
      _style,
      _className
    ] = isShow
      ? [S_BLOCK, CL_SHOW_POPUP]
      : [S_NONE];
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
