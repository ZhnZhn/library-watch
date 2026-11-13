import {
  CL_BG_COLOR,
  crShowStyle
} from '../styleFn';
import { S_BROWSER } from '../styles/ContainerStyles';

const Browser = (props) => {
  const _style = crShowStyle(props.isShow) 
  return (
    <div
      role="presentation"
      className={CL_BG_COLOR}
      style={{...S_BROWSER, ...props.style, ..._style}}
      onKeyDown={props.onKeyDown}
    >
      {props.children}
    </div>
  );
};

export default Browser
