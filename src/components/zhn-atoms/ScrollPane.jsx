import {
  forwardRef,
  useRef,
  useImperativeHandle,
  getRefValue
} from '../uiApi';
import crCn from '../zhn-utils/crCn';

const CL_SCROLL = 'with-scroll';

const ScrollPane = forwardRef(({
  style,
  className,
  children
}, ref) => {
  const _refDivElement = useRef()
  , _className = crCn(CL_SCROLL, className);

  useImperativeHandle(ref, () => ({
    scrollTop: () => {
      const _divElement = getRefValue(_refDivElement);
      if (_divElement) {
        _divElement.scrollTop = 0
      }
    }
  }), [])

  return (
    <div
      ref={_refDivElement}
      className={_className}
      style={style}
    >
       {children}
    </div>
  );
});

export default ScrollPane
