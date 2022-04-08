import { createElement } from '../../components/uiApi';
import SourceBrowserDynamic from '../../components/browser-container/SourceBrowserDynamic';

const withDynamicBrowser = {
  createBrowserDynamic({
    caption='',
    browserType,
    sourceMenuUrl,
    rowClass
  }){
    return createElement(SourceBrowserDynamic, {
      key: browserType,
      isInitShow: true,
      store: this.getStore(),
      caption,
      browserType,
      sourceMenuUrl,
      rowClass
    })
  }
};

export default withDynamicBrowser
