import { HAS_TOUCH_EVENTS } from '../has'; 

const _crHotKeyIndex = (
  hotKey,
  caption
) => hotKey
  ? caption.toUpperCase().indexOf(hotKey)
  : -1;

const _crCaption = (
  hotKey,
  caption,
  classHotKey
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
     <span className={classHotKey}>{_key}</span>
     <span>{_after}</span>
    </>
  );
};

const BtCaption = ({
  className,
  classHotKey,
  caption,
  hotKey,
  children
}) => {
  if (!caption) { return null; }

  return (
    <span className={className}>
      {_crCaption(hotKey, caption, classHotKey)}
      {children}
    </span>
  );
};

export default BtCaption
