import { useState } from 'react';
import useListen from '../hooks/useListen'

import { LoadingProgressActionTypes as Action } from '../../flux/actions/LoadingProgressActions';
import ProgressLine from '../zhn-atoms/ProgressLine';

const COLOR = {
  LOADING: '#2f7ed8',
  FAILED: '#ed5813'
};

const LoadingProgress = ({ store }) => {
  const [state, setState] = useState({
    completed: 0,
    color: COLOR.LOADING
  })
  , { completed, color } = state;

  useListen(store, (actionType, option) => {
    if (actionType === Action.LOADING){
      setState({ completed: 35, color: COLOR.LOADING });
    } else if (actionType === Action.LOADING_COMPLETE){
      setState({ completed: 100, color: COLOR.LOADING });
    } else if (actionType === Action.LOADING_FAILED){
      setState({ completed: 100, color: COLOR.FAILED })
    }
  }, 'listenLoadingProgress')

  return (
    <ProgressLine
       height={3}
       color={color}
       completed={completed}
    />
  );
}

export default LoadingProgress
