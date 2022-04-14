import { memo } from '../uiApi';

import MenuBrowserDynamic from '../zhn-moleculs/MenuBrowserDynamic';
import {  
  BAT_SHOW_BROWSER_DYNAMIC,
  BAT_LOAD_BROWSER_DYNAMIC_COMPLETED,
  BAT_UPDATE_BROWSER_MENU,
  BrowserActions
} from '../../flux/actions/BrowserActions';

const _isNotRequireRerender = () => true;

const SourceBrowserDynamic = memo(props => (
  <MenuBrowserDynamic
     caption="Source Browser"
     showAction={BAT_SHOW_BROWSER_DYNAMIC}
     loadCompletedAction={BAT_LOAD_BROWSER_DYNAMIC_COMPLETED}
     updateAction={BAT_UPDATE_BROWSER_MENU}
     onLoadMenu={BrowserActions.loadBrowserDynamic}
     {...props}
  />
 ),
 _isNotRequireRerender
);

export default SourceBrowserDynamic
