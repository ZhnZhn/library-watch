
import Fn from './Fn';

import WithLogicGroup from './WithLogicGroup';
import WithLogicList from './WithLogicList';
import WithLogicItem from './WithLogicItem';
import WithLogicDragDrop from './WithLogicDragDrop';

const Logic = {

  ...WithLogicGroup,
  ...WithLogicList,
  ...WithLogicItem,

  ...WithLogicDragDrop,

  findGroup : Fn.findGroup

};

export default Logic
