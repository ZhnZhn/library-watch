import React from 'react'

const _crCaption = caption => caption
 && caption.indexOf(':') === -1
 ? caption + ':'
 : '';

const Caption = ({ is, style, caption }) => {
  if (!is) {
    return null;
  }
  return (
    <span style={style}>
        {_crCaption(caption)}
    </span>
  );
}


export default Caption
