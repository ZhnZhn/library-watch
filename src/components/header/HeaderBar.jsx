import React from 'react';

import BrowserActions from '../../flux/actions/BrowserActions';
import ComponentActions from '../../flux/actions/ComponentActions';
import { BrowserType } from '../../constants/Type';

import LoadingProgress from './LoadingProgress';
import AppLabel from './AppLabel';
import ToolBarButton from './ToolBarButton';
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
  }
}

const BrowserConfig = {
  GITHUB : {
    browserType: BrowserType.GITHUB,
    caption: 'GitHub',
    sourceMenuUrl : './data/github/source-menu.json'
  }
}

const HeaderBar = React.createClass({

  _handlerClickDynamic(browserConfig){
    BrowserActions.showBrowserDynamic(browserConfig);
  },
  _handlerClickWatch(){
    BrowserActions.showBrowser(BrowserType.WATCH_LIST);
  },

  render(){
    const { store } = this.props;
    return (
      <div className="header" style={STYLE.ROOT_DIV}>
         <LoadingProgress store={store} />
         <AppLabel
           style={STYLE.APP_LABEL}
           caption="Library Watch v. 0.10.0"
         />
         <ToolBarButton
            type="TypeA"
            caption="GitHub"
            title="GitHub Browser"
            onClick={this._handlerClickDynamic.bind(null, BrowserConfig.GITHUB)}
         />
         <ToolBarButton
            type="TypeA"
            caption="Watch"
            title="Watch Browser"
            onClick={this._handlerClickWatch}
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
