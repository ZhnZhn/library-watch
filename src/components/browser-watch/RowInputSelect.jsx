import React from 'react';
import createReactClass from 'create-react-class'

//import PropTypes from 'prop-types'

import InputSelect from '../zhn-select/InputSelect';
import DialogStyles from '../styles/DialogStyles'

const styles = DialogStyles;
const Styles = {
  CAPTION : {
    width: '120px'
  }
}

const RowInputSelect = createReactClass({
  displayName : 'RowInputSelect',
  /*
  propTypes : {
    caption : PropTypes.string,
    options : PropTypes.array,
    isUpdateOptions : PropTypes.bool,
    onSelect : PropTypes.func
  },
  */
  render(){
    const {caption, options, isUpdateOptions, onSelect} = this.props;
    return (
      <div style={Object.assign({}, styles.rowDiv)}>
         <span style={Object.assign({}, styles.labelSpan, Styles.CAPTION)}>
           {caption}
         </span>
         <InputSelect
            width="250"
            options={options}
            isUpdateOptions={isUpdateOptions}
            onSelect={onSelect}
         />
      </div>
    );
  }
});

export default RowInputSelect
