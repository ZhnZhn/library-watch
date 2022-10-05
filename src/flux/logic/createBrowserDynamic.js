import { createElement } from '../../components/uiApi';
import SourceBrowserDynamic from '../../components/browser-container/SourceBrowserDynamic';

const createBrowserDynamic = ({
  store,
  caption='',
  browserType,
  sourceMenuUrl,
  rowClass
}) => createElement(SourceBrowserDynamic, {
   key: browserType,
   isInitShow: true,
   store,
   caption,
   browserType,
   sourceMenuUrl,
   rowClass
})

export default createBrowserDynamic
