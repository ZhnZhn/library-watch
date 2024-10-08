import {
  useRef,
  useCallback,
  getRefValue,
  setRefValue
} from '../uiApi';

import { crCn } from '../styleFn';
import useHotKey from '../hotkeys/useHotKey';
import BtCaption from './BtCaption';

const CL_ARROW = "arrow-down"
, CL_BT_FLAT = 'bt-flat'
, CL_BT_FLAT_CAPTION = 'bt-flat__caption'
, S_PRIMARY_COLOR = { color: '#607d8b' };

const FlatButton = ({
  refBt,
  isArrow,
  timeout=3000,
  className,
  style,
  isPrimary,
  title='',
  caption,
  hotKey,
  children,
  onClick
}) => {
  const _refTimeStamp = useRef(null)
  , _hClick = useCallback(evt => {
    if (timeout === 0) {
      onClick(evt)
      return;
    }
    const _timeStampPrev = getRefValue(_refTimeStamp)
    , { timeStamp } = evt;
    if (_timeStampPrev == null
        || timeStamp - _timeStampPrev > timeout) {
      onClick(evt)
      setRefValue(_refTimeStamp, timeStamp)
    }
  }, [timeout, onClick])
  , _className = crCn(CL_BT_FLAT, className)
  , _style = isPrimary
       ? {...style, ...S_PRIMARY_COLOR}
       : style
  , _title = hotKey
       ? `${title} [${hotKey.toLowerCase()}]`
       : title;

  useHotKey(hotKey, onClick)

  return (
    <button
      ref={refBt}
      type="button"
      className={_className}
      style={_style}
      title={_title}
      onClick={_hClick}
    >
      <BtCaption
        className={CL_BT_FLAT_CAPTION}
        caption={caption}
        hotKey={hotKey}
      >
        {isArrow && <span className={CL_ARROW} />}
      </BtCaption>
      {children}
    </button>
  );
};

export default FlatButton
