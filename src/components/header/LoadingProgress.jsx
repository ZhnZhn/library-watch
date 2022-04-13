import { useState } from '../uiApi';
import useListen from '../hooks/useListen';

import {
  LPAT_LOADING,
  LPAT_LOADING_COMPLETE,
  LPAT_LOADING_FAILED
} from '../../flux/actions/LoadingProgressActions';
import ProgressLine from '../zhn-atoms/ProgressLine';

const COLOR_LOADING = '#2f7ed8'
, COLOR_FAILED = '#ed5813';

const LoadingProgress = ({
  store
}) => {
  const [state, setState] = useState({
    completed: 0,
    color: COLOR_LOADING
  })
  , { completed, color } = state;

  useListen(store, (actionType, option) => {
    if (actionType === LPAT_LOADING){
      setState({ completed: 35, color: COLOR_LOADING });
    } else if (actionType === LPAT_LOADING_COMPLETE){
      setState({ completed: 100, color: COLOR_LOADING });
    } else if (actionType === LPAT_LOADING_FAILED){
      setState({ completed: 100, color: COLOR_FAILED })
    }
  }, 'listenLoadingProgress')

  return (
    <ProgressLine
       height={3}
       color={color}
       completed={completed}
    />
  );
};

export default LoadingProgress
