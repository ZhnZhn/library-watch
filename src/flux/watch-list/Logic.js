import { findGroup } from './Fn';

import WithLogicList from './WithLogicList';
import WithLogicItem from './WithLogicItem';

const Logic = {
  ...WithLogicList,
  ...WithLogicItem,

  findGroup
};

export default Logic
