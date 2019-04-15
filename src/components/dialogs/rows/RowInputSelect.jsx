import React from 'react';
//import PropTypes from "prop-types";

import InputSelect from '../../zhn-select/InputSelect'
import STYLE from '../../styles/DialogStyles'
import Caption from './Caption'

const S = {
  CAPTION : {
    width: '120px'
  }
};

const RowInputSelect = ({
  isShowLabel, caption,
  placeholder, options,
  onSelect
}) => (
  <div style={STYLE.rowDiv}>
    <Caption
      is={isShowLabel}
      style={{ ...STYLE.labelSpan, ...S.CAPTION }}
      caption={caption}
    />
     <InputSelect
        width="250"
        placeholder={placeholder}
        options={options}
        onSelect={onSelect}
     />
  </div>
);

RowInputSelect.defaultProps = {
  isShowLabel: true
};

/*
RowInputSelect.propTypes = {
  caption : PropTypes.string,
  placeholder: PropTypes.string,
  options : PropTypes.array,
  onSelect : PropTypes.func
}
*/

export default RowInputSelect
