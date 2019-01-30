import React, { Component } from 'react';
//import PropTypes from 'prop-types'

import Caption from './DialogCaption'
import FlatButton from '../zhn-m/FlatButton'

import Interact from '../../utils/Interact';

const styles = {
  rootDiv: {
    position: 'absolute',
    top: '30px',
    left: '50px',
    backgroundColor: '#4D4D4D',
    border: 'solid 2px #232F3B',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  childrenDiv : {
    cursor : 'default'
  },
  commandDiv : {
     cursor: 'default',
     float: 'right',
     marginTop: '8px',
     marginBottom: '10px',
     marginRight: '4px'
  },
};

class Dialog extends Component {
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    caption: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    commandButtons: PropTypes.arrayOf(PropTypes.node),
    onShowChart: PropTypes.func,
    onClose: PropTypes.func
  }
 */

  componentDidMount(){
     Interact.makeDragable(this.rootComp)
  }

  _renderCommandButton(commandButtons, onShowChart, onClose){
    return (
      <div style={styles.commandDiv}>
        {commandButtons}
        <FlatButton
          key="show"
          caption="Show"
          timeout={0}
          onClick={onShowChart}
        />
        <FlatButton
          key="close"
          caption="Close"
          timeout={0}
          onClick={onClose}
        />
      </div>
    );
  }

  _refRootComp = (node) => this.rootComp = node

  render(){
    const {
            isShow, caption, children, commandButtons,
            onShowChart, onClose
          } = this.props
        , _styleShow = isShow
             ? { display: 'block' }
             : { display: 'none' }
        , _classShow = isShow
             ? 'show-popup'
             : undefined;

    return (
      <div
           ref={this._refRootComp}
           className={_classShow}
           style={{ ...styles.rootDiv, ..._styleShow }}
      >
        <Caption
          caption={caption}
          onClose={onClose}
        />
        <div style={styles.childrenDiv}>
           {children}
        </div>
        {this._renderCommandButton(commandButtons, onShowChart, onClose)}
      </div>
    );
  }
}

export default Dialog
