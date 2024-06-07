import ShowHide from '../zhn/ShowHide';
import WrapperInputSearch from './WrapperInputSearch';

import { showDialogWatchItem } from './Handlers';

const S_WRAPPER_SEARCH = {
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
