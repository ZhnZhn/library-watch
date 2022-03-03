import { memo } from '../uiApi';

import MenuBrowserDynamic from '../zhn-moleculs/MenuBrowserDynamic';
import BA, {BrowserActionTypes as BAT} from '../../flux/actions/BrowserActions';

const _isNotRequireRerender = () => true;

const SourceBrowserDynamic = memo(props => (
  <MenuBrowserDynamic
     caption="Source Browser"
     showAction={BAT.SHOW_BROWSER_DYNAMIC}
     loadCompletedAction={BAT.LOAD_BROWSER_DYNAMIC_COMPLETED}
     updateAction={BAT.UPDATE_BROWSER_MENU}
     onLoadMenu={BA.loadBrowserDynamic}
     {...props}
  />
 ),
 _isNotRequireRerender
);

export default SourceBrowserDynamic
