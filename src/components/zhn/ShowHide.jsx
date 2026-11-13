import { crShowStyle } from '../styleFn';

const ShowHide = ({
  refEl,
  isShow,
  style,
  className,
  onKeyDown,
  children
}) => {  
  const _style = crShowStyle(isShow);
  return (
    <div
       ref={refEl}
       role="presentation"
       aria-hidden={isShow}
       className={className}
       style={{...style, ..._style}}
       onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
};

export default ShowHide
