import crCn from '../zhn-utils/crCn';
import {
  S_BLOCK,
  S_NONE,
  CL_SHOW_POPUP
} from '../styles/CL';


const ShowHide = ({
  isShow,
  style,
  className,
  children
}) => {
  const _className = crCn(
     className, [isShow, CL_SHOW_POPUP]
  )
  , _style = isShow ? S_BLOCK : S_NONE;

  return (
    <div
       className={_className}
       style={{...style, ..._style}}
      >
      {children}
    </div>
  );
};

export default ShowHide
