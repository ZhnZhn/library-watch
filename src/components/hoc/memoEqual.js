import { memo } from '../uiApi';

const DF_IS_NOT_REQUIRE_RERENDER = () => true;

const memoEqual = (
  Element,
  isNotRequireRerender=DF_IS_NOT_REQUIRE_RERENDER
) => memo(Element, isNotRequireRerender);

export default memoEqual
