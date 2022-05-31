
import { findGroup } from './Fn';

import WithLogicGroup from './WithLogicGroup';
import WithLogicList from './WithLogicList';
import WithLogicItem from './WithLogicItem';
import WithLogicDragDrop from './WithLogicDragDrop';

const Logic = {
  ...WithLogicGroup,
  ...WithLogicList,
  ...WithLogicItem,

  ...WithLogicDragDrop,

  findGroup
};

export default Logic
