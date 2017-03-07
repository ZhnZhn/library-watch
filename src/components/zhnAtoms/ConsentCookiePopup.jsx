import React, { Component } from 'react';

const HIDE_PERIOD = 30000
    , ANIMATION_PERIOD = 1100
    , MSG = 'Library Watch uses session cookies from Google Analytics with anonymizeIp for better experience.'
    , BTN_GOT_TITLE = "Got it."

const STYLE = {
  SHOW : {
     opacity: '0.9',
     bottom : '0px'
  },
  HIDE : {
     display: 'none'
  }
}

class ConsentCookiePopup extends Component {
  constructor(props){
    super()
    this.timeID = undefined
    this.hideID = undefined
    this.state = {
      isOpacity : true,
      isDisplay : true
    }
  }

  componentDidMount(){
    this.timeID = setTimeout( () => {
      this._startHidingAnimation();
    }, HIDE_PERIOD);

    setTimeout(()=>{
      this.setState({ isOpacity: false });
    }, 500);
  }

  _startHidingAnimation = () => {
    this.hideID = setTimeout(this._hidePopup, ANIMATION_PERIOD);
    this.setState({ isOpacity: true });
  }
  _hidePopup = () => {
     this.setState({ isDisplay : false });
  }

  _handleClickGot = () => {
    if (!this.hideId) {
      clearTimeout(this.timeID);
      this._startHidingAnimation();
    }
  }


  render(){
    const { isOpacity, isDisplay } = this.state
        , _opacityStyle = (isOpacity)
               ? undefined
               : STYLE.SHOW
        , _displayStyle = (isDisplay)
               ? undefined
               : STYLE.HIDE

    return (
      <div
         className="consent"
         style={{..._opacityStyle, ..._displayStyle}}
      >
         <p>
            <span className="consent__msg">
              {MSG}
            </span>
            <span
               className="consent__btn"
               onClick={this._handleClickGot}
            >
               {BTN_GOT_TITLE}
            </span>
         </p>
      </div>
    );
  }
}

export default ConsentCookiePopup
