import React from 'react'

import FlatButton from '../zhn-m/FlatButton'

const crCommandButtons = ({
  inst,
  isDefault
}) => {
  return [
    isDefault && <FlatButton
      key="default"
      caption="Default"
      timeout={0}
      onClick={inst._handleDefault}
     />,     
     <FlatButton
       key="load"
       isPrimary={true}
       caption="Load"
       onClick={inst._handleLoad}
     />
  ].filter(Boolean);
};

export default crCommandButtons
