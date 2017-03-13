import React from 'react';

import SourceBrowserDynamic from '../../components/browser-container/SourceBrowserDynamic';

const withDynamicBrowser = {
  createBrowserDynamic({ browserType, caption='' , sourceMenuUrl, rowClass }){
      return React.createElement(SourceBrowserDynamic , {
         key : browserType,
         browserType : browserType,
         store : this.getStore(),
         isInitShow : true,
         caption : caption,
         sourceMenuUrl : sourceMenuUrl,
         rowClass: rowClass
      })
  }
}

export default withDynamicBrowser
