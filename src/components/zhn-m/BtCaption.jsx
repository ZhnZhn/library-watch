import { HAS_TOUCH_EVENTS } from '../has';

const S_ACCESS_KEY = { textDecoration: 'underline' };

const _crHotKeyIndex = (
  hotKey,
  caption
) => hotKey
  ? caption.toUpperCase().indexOf(hotKey)
  : -1;

const _crCaption = (
  hotKey,
  caption
) => {
  if (HAS_TOUCH_EVENTS || !hotKey) {
    return caption;
  }

  const index = _crHotKeyIndex(hotKey, caption);
  if (index === -1) {
    return caption;
  }

  const _before = caption.substring(0, index)
  , _key = caption.substring(index, index+1)
  , _after = caption.substring(index+1);
  return (
    <>
     <span>{_before}</span>
     <span style={S_ACCESS_KEY}>{_key}</span>
     <span>{_after}</span>
    </>
  );
};

const BtCaption = ({
  className,
  caption,
  hotKey,
  children
}) => {
  if (!caption) { return null; }

  return (
    <span className={className}>
      {_crCaption(hotKey, caption)}
      {children}
    </span>
  );
};

export default BtCaption
