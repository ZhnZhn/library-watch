import { showDialogWatchItem } from './Handlers';

import Comp from '../Comp';
import WrapperInputSearch from './WrapperInputSearch';

const { ShowHide } = Comp
, S_WRAPPER_SEARCH = {
  width: '100%',
  padding: '0 0 8px 0'
};

const SearchInput = ({
  isShow,
  isShouldUpdate,
  data
}) => data ? (
  <ShowHide isShow={isShow}>
    <WrapperInputSearch
        style={S_WRAPPER_SEARCH}
        data={data}
        isShouldUpdate={isShouldUpdate}
        onSelect={showDialogWatchItem}
    />
  </ShowHide>
) : null;

export default SearchInput
