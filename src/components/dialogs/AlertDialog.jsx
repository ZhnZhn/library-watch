import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import ModalDialog from '../zhnMoleculs/ModalDialog'
import DialogStyles from '../styles/DialogStyles'

const styles = DialogStyles;

const STYLE = {
  CAPTION : {
    display : 'inline-block',
    width : '400px',
    paddingLeft : '10px',
    color : '#F44336',
    fontSize: '18px',
    fontWeight : 'bold',
    lineHeight : 2
  },
  ITEM_ID : {
    color: 'rgba(164, 135, 212,1)',
    fontWeight : 'bold'
  },
  DESCR : {
    color: 'gray',
    width : '400px',
    paddingLeft : '10px',
    fontWeight: 'bold',
    lineHeight : 1.4,
    whiteSpace: 'pre-line'
  }
}

const ELLIPSIS = '...';

class AlertDialog extends Component {
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      alertCaption: PropTypes.string,
      alertItemId: PropTypes.string,
      alertDescr: PropTypes.string
    }),
    onClose: PropTypes.func
  }
  */
  static defaultProps = {
    data: {},
    onClose: () => {}
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props &&
        nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  render(){
    const { isShow, data, onClose } = this.props
        , {alertCaption, alertItemId, alertDescr} = data
        , _alertItemId = alertItemId.substring(0,20) + ELLIPSIS;
    return (
      <ModalDialog
        caption="Alert"
        isShow={isShow}
        onClose={onClose}
      >
         <div style={styles.rowDiv}>
            <span style={STYLE.CAPTION}>
              {alertCaption + ': '}
              <span style={STYLE.ITEM_ID} title={alertItemId}>
                {_alertItemId}
              </span>
            </span>
         </div>
         <div style={styles.rowDiv}>
            <p style={STYLE.DESCR}>{alertDescr}</p>
         </div>
      </ModalDialog>
    )
  }
}


export default AlertDialog
