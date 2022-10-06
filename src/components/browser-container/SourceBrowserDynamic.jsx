import memoEqual from '../hoc/memoEqual';

import MenuBrowserDynamic from '../zhn-moleculs/MenuBrowserDynamic';
import {
  BAT_SHOW_BROWSER_DYNAMIC,
  BAT_LOAD_BROWSER_DYNAMIC_COMPLETED,
  BAT_UPDATE_BROWSER_MENU,
  BrowserActions
} from '../../flux/actions/BrowserActions';

const SourceBrowserDynamic = memoEqual(props => (
  <MenuBrowserDynamic
     showAction={BAT_SHOW_BROWSER_DYNAMIC}
     loadCompletedAction={BAT_LOAD_BROWSER_DYNAMIC_COMPLETED}
     updateAction={BAT_UPDATE_BROWSER_MENU}
     onLoadMenu={BrowserActions.loadBrowserDynamic}
     {...props}
  />
));

export default SourceBrowserDynamic
