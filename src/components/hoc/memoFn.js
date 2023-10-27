import { memo } from '../uiApi';

const IS_NOT_SHOULD_RERENDER_DF = () => true;
export const memoEqual = (
  Element,
  isNotShouldRerender=IS_NOT_SHOULD_RERENDER_DF
) => memo(Element, isNotShouldRerender)

const _isNotShouldRerenderIsShow = (
  prevProps,
  nextProps
) => prevProps.isShow === nextProps.isShow
export const memoIsShow = (
  Comp
) => memo(Comp, _isNotShouldRerenderIsShow)
