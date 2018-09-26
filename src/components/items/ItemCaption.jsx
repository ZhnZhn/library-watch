import React from 'react'

import SvgClose from '../zhnAtoms/SvgClose'

const CL = {
  ROOT: 'item-caption',
  BT_CLOSE: 'item-caption__bt-close'
};

const ItemCaption = ({
  children,
  onClose
}) => (
  <div className={CL.ROOT}>
    {children}
    <SvgClose
      className={CL.BT_CLOSE}
      onClose={onClose}
    />
  </div>
);

export default ItemCaption
