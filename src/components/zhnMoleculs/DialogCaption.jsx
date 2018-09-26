import React from 'react';
//import PropTypes from 'prop-types'

import SvgClose from '../zhnAtoms/SvgClose';

const CL = "not-selected";

const S = {
  ROOT: {
    color: 'rgba(164, 135, 212, 1)',
    backgroundColor: '#232f3b',
    padding: 5,
    textAlign: 'center',
    fontSize: 18
  },
  SVG: {
    position: 'absolute',
    top: 6,
    right: 0
  }
};

const DialogCaption = ({
  caption,
  onClose
}) => (
  <div style={S.ROOT}>
     <span className={CL}>
       {caption}
     </span>
     <SvgClose
        style={S.SVG}
        onClose={onClose}
      />
  </div>
);
/*
DialogCaption.propTypes = {
  caption: PropTypes.string,
  onClose: PropTypes.func
}
*/

export default DialogCaption
