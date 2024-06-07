import {
  useRef,
  useImperativeHandle,
  getRefValue
} from '../uiApi';
import crCn from '../zhn-utils/crCn';

const CL_SCROLL = 'with-scroll';

const ScrollPane = ({
  refEl,
  style,
  className,
  onFocusIn,
  children
}) => {
  const _refDivElement = useRef()
  , _className = crCn(CL_SCROLL, className);

  useImperativeHandle(refEl, () => ({
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
      onFocus={onFocusIn}
    >
       {children}
    </div>
  );
};

export default ScrollPane
