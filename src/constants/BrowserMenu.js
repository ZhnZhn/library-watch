import ComponentActions from '../flux/actions/ComponentActions';
import ChartActions from '../flux/actions/ChartActions';

const _fnClick = function(dialogType, browserType){
  return ComponentActions.showDialog.bind(null, dialogType, browserType);
}

const _fnBadgeOpen = function(dialogType, browserType){
  return ChartActions.showChart.bind(null, dialogType, browserType);
}

const _fnBadgeClose = function(chartType){
  return ComponentActions.closeChartContainer2.bind(null, chartType);
}


const fnCreateMenu = function(menu, data, browserType){
  return menu.map((menuPart) => {
     const items = menuPart.items.map((item, index) =>{
        return {
                 id: item.id,
                 title: data[item.id].menuTitle,
                 counter: 0,
                 isOpen: false,
                 onClick: _fnClick(item.id, browserType),
                 onBadgeOpen: _fnBadgeOpen(item.id, browserType),
                 onBadgeClose : _fnBadgeClose(item.id)
               }
     });
     return {
        caption: menuPart.caption,
        isInitClose: menuPart.isInitClose,
        items: items
     }
  })
}

const BrowserMenu = {
  createMenu : fnCreateMenu
}

export default BrowserMenu
