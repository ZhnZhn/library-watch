import React from 'react';

//import PropTypes from "prop-types";

import InputSelect from '../zhn-select/InputSelect'
import DialogStyles from '../styles/DialogStyles'

const styles = DialogStyles;
const STYLE = {
  CAPTION : {
    width: '120px'
  }
}

const RowInputSelect = ({ caption, placeholder, options, onSelect }) => (
  <div style={Object.assign({}, styles.rowDiv)}>
     <span style={Object.assign({}, styles.labelSpan, STYLE.CAPTION)}>
       {caption}
     </span>
     <InputSelect
        width="250"
        placeholder={placeholder}
        options={options}
        onSelect={onSelect}
     />
  </div>
)

/*
RowInputSelect.propTypes = {
  caption : PropTypes.string,
  placeholder: PropTypes.string,
  options : PropTypes.array,
  onSelect : PropTypes.func
}
*/

export default RowInputSelect
