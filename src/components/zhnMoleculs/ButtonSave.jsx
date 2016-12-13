import React, { PropTypes } from 'react';

import ButtonCircle from '../zhnAtoms/ButtonCircle';

const CAPTION = "S"
    , TITLE = "Save Watch Items to Locale Storage"
    , STYLE = {
  NOT_WATCH_EDITED : {
    borderColor : 'gray',
    color : 'gray'
  }
}

const ButtonSave = React.createClass({
  propTypes : {
    store : PropTypes.object.isRequired
  },

  getInitialState(){
    return {
      isWatchEdited : this.props.store.getWatchEdited()
    }
  },

  shouldComponentUpdate(nextProps, nextState){
    if (nextState.isWatchEdited === this.state.isWatchEdited){
      return false;
    }
    return true;
  },

  componentDidMount(){
    const { store } = this.props
    this.unsubcribe = store.listen(this._onStore)
    this.setState({ isWatchEdited : store.getWatchEdited() })
  },
  _onStore(actionType, value){
    if (actionType === this.props.actionWatchEdited){
      this.setState({ isWatchEdited : value })
    }
  },
  componentWillUnmount(){
    this.unsubcribe()
  },

  render(){
    const { style, onClick } = this.props
        , { isWatchEdited } = this.state
        , _style = (isWatchEdited)
             ? style
             : Object.assign({}, style, STYLE.NOT_WATCH_EDITED)

    return (
      <ButtonCircle
         caption={CAPTION}
         title={TITLE}
         style={_style}
         onClick={onClick}
      />
    );
  }
})



export default ButtonSave
