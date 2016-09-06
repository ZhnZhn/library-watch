import React from 'react';

//import { ChartActionTypes } from '../../flux/actions/ChartActions';
import { LoadingProgressActionTypes as Action } from '../../flux/actions/LoadingProgressActions';
import ProgressLine from '../zhnAtoms/ProgressLine';

const COLOR = {
  LOADING : '#2F7ED8',
  FAILED : 'rgb(237, 88, 19)'
};

const LoadingProgress = React.createClass({
  getInitialState(){
    return {
      completed : 0,
      color : COLOR.LOADING
    }
  },
  componentDidMount(){
    //this.unsubscribe = this.props.store.listen(this._onStore);
    this.unsubscribe = this.props.store.listenLoadingProgress(this._onStore);
  },
  componentWillUnmount(){
    this.unsubscribe();
  },
  _onStore(actionType, option){
     /*
      if (actionType === ChartActionTypes.LOAD_STOCK){
        this.setState({ completed: 35, color: COLOR.LOADING });
      } else if (actionType === ChartActionTypes.LOAD_STOCK_COMPLETED
                 || actionType === ChartActionTypes.LOAD_STOCK_ADDED){
        this.setState({ completed: 100, color: COLOR.LOADING });
      } else if (actionType === ChartActionTypes.LOAD_STOCK_FAILED){
        this.setState({ completed: 100, color: COLOR.FAILED })
      }
      */
      if (actionType === Action.LOADING){
        this.setState({ completed: 35, color: COLOR.LOADING });
      } else if (actionType === Action.LOADING_COMPLETE){
        this.setState({ completed: 100, color: COLOR.LOADING });
      } else if (actionType === Action.LOADING_FAILED){
        this.setState({ completed: 100, color: COLOR.FAILED })
      }
  },

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
});

export default LoadingProgress
