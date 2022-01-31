import { forwardRef, useRef, useImperativeHandle } from 'react';
import crCn from '../zhn-utils/crCn';

const CL_SCROLL = 'with-scroll';

const ScrollPane = forwardRef(({
  style,
  className,
  children
}, ref) => {
  const _refNode = useRef()
  , _className = crCn(CL_SCROLL, className);

  useImperativeHandle(ref, () => ({
    scrollTop: () => {
      const { current } = _refNode;
      if (current) {
        current.scrollTop = 0
      }
    }
  }), [])

  return (
    <div
      ref={_refNode}
      className={_className}
      style={style}
    >
       {children}
    </div>
  );
});

export default ScrollPane
