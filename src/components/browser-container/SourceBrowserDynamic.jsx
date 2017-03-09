import React, { Component } from 'react';

import MenuBrowserDynamic from '../zhnMoleculs/MenuBrowserDynamic';
import BrowserActions, {BrowserActionTypes} from '../../flux/actions/BrowserActions';

class SourceBrowserDynamic extends Component {
  shouldComponentUpdate(){
    return false;
  }

  render(){
    return (
       <MenuBrowserDynamic
          caption="Source Browser"
          showAction={BrowserActionTypes.SHOW_BROWSER_DYNAMIC}
          loadCompletedAction={BrowserActionTypes.LOAD_BROWSER_DYNAMIC_COMPLETED}
          updateAction={BrowserActionTypes.UPDATE_BROWSER_MENU}
          onLoadMenu={BrowserActions.loadBrowserDynamic}
          {...this.props}
       />
    );
  }
}

export default SourceBrowserDynamic
