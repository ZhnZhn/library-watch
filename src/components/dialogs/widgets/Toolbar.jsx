import React from 'react'

import ShowHide from '../../zhnAtoms/ShowHide'
import ToolbarButtonCircle from './ToolbarButtonCircle'

const Toolbar = ({ isShow,  buttons }) => (
  <ShowHide isShow={isShow}>
    <ToolbarButtonCircle
      buttons={buttons}
    />
  </ShowHide>
);

export default Toolbar
