import { findGroup } from './Fn';

import WithLogicGroup from './WithLogicGroup';
import WithLogicList from './WithLogicList';
import WithLogicItem from './WithLogicItem';

const Logic = {
  ...WithLogicGroup,
  ...WithLogicList,
  ...WithLogicItem,

  findGroup
};

export default Logic
