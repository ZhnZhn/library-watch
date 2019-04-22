import React, { Component } from 'react';
//import PropTypes from "prop-types";

import WatchActions, { WatchActionTypes } from '../../flux/actions/WatchActions';
import ButtonCircle from '../zhn-atoms/ButtonCircle';

const CAPTION = "S"
    , TITLE = "Save Watch Items to Locale Storage"
    , STYLE = {
        NOT_WATCH_EDITED : {
          borderColor : 'gray',
          color : 'gray'
      }
}

class ButtonSave extends Component {
  /*
  static propTypes = {
    store : PropTypes.object.isRequired,
    style : PropTypes.object
  }
  */

  constructor(props){
    super()
    this.state = {
      isWatchEdited : props.store.getWatchEdited()
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextState.isWatchEdited === this.state.isWatchEdited){
      return false;
    }
    return true;
  }

  componentDidMount(){
    const { store } = this.props
    this.unsubcribe = store.listen(this._onStore)
    this.setState({ isWatchEdited : store.getWatchEdited() })
  }
  _onStore = (actionType, value) => {
    if (actionType === WatchActionTypes.SET_WATCH_EDITED){
      this.setState({ isWatchEdited : value })
    }
  }
  componentWillUnmount(){
    this.unsubcribe()
  }

  render(){
    const { className, style } = this.props
        , { isWatchEdited } = this.state
        , _style = (isWatchEdited)
             ? style
             : Object.assign({}, style, STYLE.NOT_WATCH_EDITED)

    return (
      <ButtonCircle
         className={className}
         caption={CAPTION}
         title={TITLE}
         style={_style}
         onClick={WatchActions.saveWatch}
      />
    );
  }
}

export default ButtonSave
