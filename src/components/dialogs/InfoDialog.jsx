import React, { Component } from 'react';

//import PropTypes from "prop-types";

import ModalDialog from '../zhnMoleculs/ModalDialog'
import DialogStyles from '../styles/DialogStyles'

const styles = DialogStyles;

const STYLE = {
  CAPTION : {
    width : '400px',
    paddingLeft : '10px',
    color : 'rgba(164, 135, 212,1)',
    fontSize: '18px',
    fontWeight : 'bold',
    lineHeight : 2
  },
  DESCR : {
    color: 'gray',
    width : '400px',
    paddingLeft : '10px',
    fontWeight: 'bold',
    lineHeight : 1.4,
    whiteSpace : 'pre'
  }
}

class InfoDialog extends Component {
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      caption: PropTypes.string,
      descr: PropTypes.string
    }),
    onClose: PropTypes.func
  }
  */

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  render(){
    const { isShow, data, onClose } = this.props
        , { caption, descr } = data;
    return (
      <ModalDialog
        caption="Information"
        isShow={isShow}
        onClose={onClose}
      >
         <div style={styles.rowDiv}>
            <p style={STYLE.CAPTION}>
              {caption}
            </p>
         </div>
         <div style={styles.rowDiv}>
            <p style={STYLE.DESCR}>{descr}</p>
         </div>
      </ModalDialog>
    );
  }
}

export default InfoDialog
