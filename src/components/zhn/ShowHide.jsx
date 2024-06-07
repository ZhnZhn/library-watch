import crCn from '../zhn-utils/crCn';
import {
  S_BLOCK,
  S_NONE,
  CL_SHOW_POPUP
} from '../styles/CL';

const ShowHide = ({
  refEl,
  isShow,
  style,
  className,
  onKeyDown,
  children
}) => {
  const _className = crCn(
     className,
     [isShow, CL_SHOW_POPUP]
  )
  , _style = isShow
     ? S_BLOCK
     : S_NONE;

  return (
    <div
       ref={refEl}
       role="presentation"
       aria-hidden={isShow}
       className={_className}
       style={{...style, ..._style}}
       onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
};

export default ShowHide
