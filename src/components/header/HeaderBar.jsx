import React from 'react';

import BrowserActions from '../../flux/actions/BrowserActions';
import ComponentActions from '../../flux/actions/ComponentActions';
import { BrowserType } from '../../constants/Type';

import LoadingProgress from './LoadingProgress';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import ToolBarButton from './ToolBarButton';
import ButtonSave from '../zhnMoleculs/ButtonSave';
import LimitRemainingLabel from './LimitRemainingLabel';

const STYLE = {
  ROOT_DIV : {
    position : 'relative',
    zIndex : 50
  },
  APP_LABEL : {
    display: 'inline-block',
    color:'#80c040',
    marginLeft: '35px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  BUTTON_SAVE : {
    marginLeft : '10px'
  }
}

const BrowserConfig = {
  LIBRARY : {
    browserType: BrowserType.LIBRARY,
    caption: 'Library',
    sourceMenuUrl : './data/github/source-menu.json',
    rowClass: 'row__library'
  }
}

const HeaderBar = React.createClass({

  _handleClickDynamic(browserConfig){
    BrowserActions.showBrowserDynamic(browserConfig);
  },
  _handleClickWatch(){
    BrowserActions.showBrowser(BrowserType.WATCH_LIST);
  },

  render(){
    const { store } = this.props;
    return (
      <div className="header" style={STYLE.ROOT_DIV}>
         <LoadingProgress store={store} />
         <IconAppLogo
           className="header__icon-app"
           title="Library Watch v0.11.0"
         />
         <AppLabel
           style={STYLE.APP_LABEL}
           caption="Library Watch v0.11.0"
         />
         <ToolBarButton
            type="TypeA"
            caption="Library"
            title="Library Browser"
            onClick={this._handleClickDynamic.bind(null, BrowserConfig.LIBRARY)}
         />
         <ToolBarButton
            type="TypeA"
            caption="Watch"
            title="Watch Browser"
            onClick={this._handleClickWatch}
         />
         <ButtonSave
            store={store}
            style={STYLE.BUTTON_SAVE}
         />

         <ToolBarButton
            type="TypeA"
            style={{ float: 'right', marginRight : '20px' }}
            caption="About"
            title="Description about Library Watch"
            onClick={ComponentActions.showAbout}
         />
         <LimitRemainingLabel
              store={store}
              style={{ float: 'right', paddingTop: '5px' }}
           />
      </div>
    );
  }
});

export default HeaderBar
