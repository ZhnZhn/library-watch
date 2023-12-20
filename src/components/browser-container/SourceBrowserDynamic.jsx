import { memoEqual } from '../hoc/memoFn';

import MenuBrowserDynamic from '../zhn-moleculs/MenuBrowserDynamic';

const SourceBrowserDynamic = memoEqual(props => (
  <MenuBrowserDynamic {...props} />
));

export default SourceBrowserDynamic
