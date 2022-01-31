import { memo } from 'react';

const _isNotShouldUpdate = (prevProps, nextProps) =>
  prevProps.isShow === nextProps.isShow
, memoIsShow = Comp => memo(Comp, _isNotShouldUpdate)

export default memoIsShow
