
import { S_BROWSER } from '../styles/ContainerStyles';

const CL_OPEN = "show-popup"
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' };

const Browser = ({
  isShow,
  style,
  children
}) => {
    const _className = isShow ? CL_OPEN : null
    , _style = isShow ? S_BLOCK : S_NONE;
    return (
      <div
        className={_className}
        style={{ ...S_BROWSER, ...style, ..._style}}
      >
        {children}
      </div>
    );
};

export default Browser
