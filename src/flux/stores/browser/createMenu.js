import { atom } from '../../storeApi';
import { showDialog } from '../../compStore';
import {
  showChart,
  closeCompItemList
} from '../../itemStore';

const createMenu = (
  menu,
  data,
  browserType
) => menu.map(({ caption, isInitClose, items }) => ({
    caption,
    isInitClose,
    items: items.map(({ id }) => ({
      id,
      title: data[id].menuTitle,
      atomCounter: atom({ v: 0, is: false }),
      onClick: showDialog
       .bind(null, id, browserType),
      onOpen: showChart
       .bind(null, id, browserType),
      onClose: closeCompItemList
       .bind(null, id)
   }))
}))

export default createMenu
