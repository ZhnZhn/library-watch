import React, { Component } from 'react'
import ModalDialog from '../zhn-moleculs/ModalDialog';
import styles from '../styles/DialogStyles'

const S = {
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
};

const ELLIPSIS = '...';
const _crItemId = str => str
  ? str.substring(0,20) + ELLIPSIS
  : '';


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
    , {
      alertCaption, alertItemId, alertDescr,
      caption, itemId, descr
    } = data || {}
    , _caption = alertCaption || caption || ''
    , _itemId = _crItemId(alertItemId || itemId)
    , _descr = alertDescr || descr || '';
    return (
      <ModalDialog
        caption="Alert"
        isShow={isShow}
        onClose={onClose}
      >
         <div style={styles.rowDiv}>
            <span style={S.CAPTION}>
              <span>{_caption}</span>
              <span>:</span>
              <span style={S.ITEM_ID} title={_itemId}>
                {_itemId}
              </span>
            </span>
         </div>
         <div style={styles.rowDiv}>
            <p style={S.DESCR}>{_descr}</p>
         </div>
      </ModalDialog>
    );
  }
}


export default AlertDialog
