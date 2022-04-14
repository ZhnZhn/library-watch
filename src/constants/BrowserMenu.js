import { ComponentActions } from '../flux/actions/ComponentActions';
import { ChartActions } from '../flux/actions/ChartActions';

const _crOnClick = (
  dialogType,
  browserType
) => ComponentActions.showDialog
  .bind(null, dialogType, browserType);

const _crOnBadgeOpen = (
  dialogType,
  browserType
) => ChartActions.showChart
  .bind(null, dialogType, browserType);

const _crOnBadgeClose = (
  chartType
) => ComponentActions.closeCompItemList
  .bind(null, chartType);

const createMenu = (
  menu,
  data,
  browserType
) => {
  return menu.map(menuPart => {
     const items = menuPart
       .items.map(item => ({
          id: item.id,
          title: data[item.id].menuTitle,
          counter: 0,
          isOpen: false,
          onClick: _crOnClick(item.id, browserType),
          onBadgeOpen: _crOnBadgeOpen(item.id, browserType),
          onBadgeClose: _crOnBadgeClose(item.id)
       }));
     return {
        caption: menuPart.caption,
        isInitClose: menuPart.isInitClose,
        items
     }
  })
};

const BrowserMenu = {
  createMenu
};

export default BrowserMenu
