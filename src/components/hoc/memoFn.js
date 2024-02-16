import { memo } from '../uiApi';

const IS_NOT_SHOULD_RERENDER_DF = () => true;
export const memoEqual = (
  Comp,
  isNotShouldRerender=IS_NOT_SHOULD_RERENDER_DF
) => memo(Comp, isNotShouldRerender)

const _fMemo = (
  isNotShouldRerender
) => Comp => memo(Comp, isNotShouldRerender);

const _isNotShouldRerenderIsShow = (
  prevProps,
  nextProps
) => prevProps.isShow === nextProps.isShow;
export const memoIsShow = _fMemo(_isNotShouldRerenderIsShow)

const _isNotShouldRerenderItems = (
  prevProps,
  nextProps
) => prevProps.items === nextProps.items;
export const memoItems = _fMemo(_isNotShouldRerenderItems)
