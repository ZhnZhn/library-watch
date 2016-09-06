import React from 'react';

import SourceBrowserDynamic from '../../components/browser-container/SourceBrowserDynamic';

const WithBrowserDynamic = {
  createBrowserDynamic({ browserType, caption='' , sourceMenuUrl}){
      return React.createElement(SourceBrowserDynamic , {
         key : browserType,
         browserType : browserType,
         store : this.getStore(),
         isInitShow : true,
         caption : caption,
         sourceMenuUrl : sourceMenuUrl
      })
  }
};

export default WithBrowserDynamic
