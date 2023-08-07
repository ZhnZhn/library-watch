import { useState } from '../uiApi';

import memoEqual from '../hoc/memoEqual';
import { useLoading } from '../../flux/itemStore';

import {
  LPAT_LOADING,
  LPAT_LOADING_COMPLETE,
  LPAT_LOADING_FAILED
} from '../../flux/actions/LoadingProgressActions';
import ProgressLine from '../zhn-atoms/ProgressLine';

const COLOR_LOADING = '#2f7ed8'
, COLOR_FAILED = '#ed5813';

const _crState = (
  completed,
  color
) => [
  completed,
  color
];

const LoadingProgress = () => {
  const [
    state,
    setState
  ] = useState(
    () => _crState(0, COLOR_LOADING)
  )
  , [
    completed,
    color
  ] = state;

  useLoading(loading => {
    if (loading === LPAT_LOADING){
      setState(_crState(35, COLOR_LOADING));
    } else if (loading === LPAT_LOADING_COMPLETE){
      setState(_crState(100, COLOR_LOADING));
    } else if (loading === LPAT_LOADING_FAILED){
      setState(_crState(100, COLOR_FAILED))
    }
  })

  return (
    <ProgressLine
       color={color}
       completed={completed}
    />
  );
};

export default memoEqual(LoadingProgress)
