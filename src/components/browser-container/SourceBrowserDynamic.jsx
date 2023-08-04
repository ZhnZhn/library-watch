import memoEqual from '../hoc/memoEqual';

import MenuBrowserDynamic from '../zhn-moleculs/MenuBrowserDynamic';
import {
  useMsBrowserDynamic,
  loadBrowserDynamic
} from '../../flux/browserStore';

const SourceBrowserDynamic = memoEqual(props => (
  <MenuBrowserDynamic
     useMsBrowserDynamic={useMsBrowserDynamic}
     onLoadMenu={loadBrowserDynamic}
     {...props}
  />
));

export default SourceBrowserDynamic
