import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import Caption from './DialogCaption'
import FlatButton from '../zhn-m/FlatButton'

const CL = {
  SHOWING: 'show-popup',
  HIDING: 'hide-popup'
};

const STYLE = {
  SHOW : {
    display : 'block'
  },
  HIDE : {
    display : 'none'
  },
  HIDE_POPUP : {
    opacity: 0,
    transform : 'scaleY(0)'
  },
  ROOT_DIV: {
    position: 'absolute',
    top: '20%',
    left: '40%',
    display: 'block',
    backgroundColor: '#4D4D4D',
    border: 'solid 2px #232F3B',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  COMMAND_DIV : {
     cursor: 'default',
     float: 'right',
     marginTop: '8px',
     marginBottom: '10px',
     marginRight: '4px'
  }
};

class ModalDialog extends Component {
  /*
   static propTypes = {
     isShow: PropTypes.bool,
     isWithButton: PropTypes.bool,
     timeout: PropTypes.number,
     caption: PropTypes.string,
     style: PropTypes.object,

     isNotUpdate: PropTypes.bool,

     children: PropTypes.oneOfType([
       PropTypes.arrayOf(PropTypes.node),
       PropTypes.node
     ]),
     commandButtons: PropTypes.arrayOf(PropTypes.node),
     onClose: PropTypes.func
   }
   */
   static defaultProps = {
     isWithButton: true,
     isNotUpdate: false,
     timeout: 450
   }

   wasClosing = false
   state = {}

   shouldComponentUpdate(nextProps, nextState){
     if (nextProps !== this.props){
       if (nextProps.isNotUpdate){
         return false;
       }
     }
     return true;
   }

   componentDidUpdate(prevProps, prevState){
     if (this.wasClosing){
       setTimeout(()=>{
         this.setState({});
       }, this.props.timeout)
     }
   }

  _handleClickDialog = (event) => {
    event.stopPropagation();
  }

  _renderCommandButton = (commandButtons, onClose) => (
      <div style={STYLE.COMMAND_DIV}>
        {commandButtons}
        <FlatButton
          key="close"
          caption="Close"
          title="Click to close modal dialog"
          timeout={0}
          onClick={onClose}
        />
      </div>
  )

  render(){
    const {
            isShow, isWithButton, caption, style,
            children, commandButtons, onClose
          } = this.props;

    let _className, _style;

    if (this.wasClosing){
      _style = STYLE.HIDE;
      this.wasClosing = false;
    } else {
      _className = isShow ? CL.SHOWING : CL.HIDING;
      _style = isShow ? STYLE.SHOW : STYLE.HIDE_POPUP;
      if (!isShow){
        this.wasClosing = true;
      }
    }

    return (
         <div
             className={_className}
             style={{ ...STYLE.ROOT_DIV, ...style, ..._style }}
             onClick={this._handleClickDialog}
         >
             <Caption
               caption={caption}
               onClose={onClose}
             />
             <div>
               {children}
             </div>
            {isWithButton && this._renderCommandButton(commandButtons, onClose)}
        </div>
    );
  }
}

export default ModalDialog
