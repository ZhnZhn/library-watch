import React from 'react';

import ZhSelect from '../zhnAtoms/ZhSelect';
import DialogStyles from '../styles/DialogStyles'

const PropTypes = React.PropTypes;

const styles = DialogStyles;
const Styles = {
  CAPTION : {
    width: '120px'
  }
}

const RowInputSelect = React.createClass({
  displayName : 'RowInputSelect',
  propTypes : {
    caption : PropTypes.string,
    placeholder: PropTypes.string,
    options : PropTypes.array,
    onSelect : PropTypes.func
  },
  render(){
    const {caption, placeholder, options, onSelect} = this.props;
    return (
      <div style={Object.assign({}, styles.rowDiv)}>
         <span style={Object.assign({}, styles.labelSpan, Styles.CAPTION)}>
           {caption}
         </span>
         <ZhSelect
            width="250"
            placeholder={placeholder}
            options={options}
            onSelect={onSelect}
         />
      </div>
    );
  }
});

export default RowInputSelect
