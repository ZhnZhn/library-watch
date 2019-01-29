import React, { Component } from 'react';

import MenuBrowserDynamic from '../zhnMoleculs/MenuBrowserDynamic';
import BA, {BrowserActionTypes as BAT} from '../../flux/actions/BrowserActions';

class SourceBrowserDynamic extends Component {
  shouldComponentUpdate(){
    return false;
  }

  render(){
    return (
       <MenuBrowserDynamic
          caption="Source Browser"
          showAction={BAT.SHOW_BROWSER_DYNAMIC}
          loadCompletedAction={BAT.LOAD_BROWSER_DYNAMIC_COMPLETED}
          updateAction={BAT.UPDATE_BROWSER_MENU}
          onLoadMenu={BA.loadBrowserDynamic}
          {...this.props}
       />
    );
  }
}

export default SourceBrowserDynamic
