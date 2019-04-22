import React, { Component } from 'react';

import { LoadingProgressActionTypes as Action } from '../../flux/actions/LoadingProgressActions';
import ProgressLine from '../zhn-atoms/ProgressLine';

const COLOR = {
  LOADING : '#2F7ED8',
  FAILED : 'rgb(237, 88, 19)'
};

class LoadingProgress extends Component {
  state = {
    completed: 0,
    color: COLOR.LOADING
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listenLoadingProgress(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  _onStore = (actionType, option) => {
      if (actionType === Action.LOADING){
        this.setState({ completed: 35, color: COLOR.LOADING });
      } else if (actionType === Action.LOADING_COMPLETE){
        this.setState({ completed: 100, color: COLOR.LOADING });
      } else if (actionType === Action.LOADING_FAILED){
        this.setState({ completed: 100, color: COLOR.FAILED })
      }
  }

  render(){
    const { completed, color } = this.state;
    return (
      <ProgressLine
         height={3}
         color={color}
         completed={completed}
      />
    )
  }
}

export default LoadingProgress
