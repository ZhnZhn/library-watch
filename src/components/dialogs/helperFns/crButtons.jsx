import React from 'react'

import FlatButton from '../../zhn-m/FlatButton'

const crButtons = ({ inst }) => {
  return [
     <FlatButton
       key="load"
       isPrimary={true}
       caption="Load"
       onClick={inst._handleLoad}
     />
  ];
};

export default crButtons
