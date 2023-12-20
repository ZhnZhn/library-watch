import SourceBrowserDynamic from '../../components/browser-container/SourceBrowserDynamic';

import { bindTo } from '../storeApi';
import {
  useMsBrowserDynamic,
  loadBrowserDynamic
} from '../browserStore';

const createBrowserDynamic = ({
  browserType,
  caption,
  sourceMenuUrl,
  rowClass
}) => (
  <SourceBrowserDynamic
     isShowInitial={true}
     key={browserType}
     browserType={browserType}
     caption={caption}
     rowClass={rowClass}
     useMsBrowserDynamic={useMsBrowserDynamic}
     onLoadMenu={bindTo(loadBrowserDynamic, {
        browserType,
        caption,
        sourceMenuUrl
     })}
 />
);

export default createBrowserDynamic
