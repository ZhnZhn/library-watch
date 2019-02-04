import React, { Component } from 'react';

import BrowserActions from '../../flux/actions/BrowserActions';
import ComponentActions from '../../flux/actions/ComponentActions';
import { BrowserType } from '../../constants/Type';

import FlatButton from '../zhn-m/FlatButton'
import LoadingProgress from './LoadingProgress';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import ButtonSave from '../zhnMoleculs/ButtonSave';
import LimitRemainingLabel from './LimitRemainingLabel';

const S = {
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
  BT_ABOUT: {
    float: 'right',
    marginRight: '20px'
  },
  BUTTON_SAVE : {
    marginLeft : '10px'
  },
  LABEL_LIMIT: {
    float: 'right',
    paddingTop: '5px'
  }
};

const BrowserConfig = {
  LIBRARY : {
    browserType: BrowserType.LIBRARY,
    caption: 'Library',
    sourceMenuUrl : './data/github/source-menu.json',
    rowClass: 'row__library'
  }
};

class HeaderBar extends Component {

  _handleClickDynamic = (browserConfig) => {
    BrowserActions.showBrowserDynamic(browserConfig);
  }
  _handleClickWatch = () => {
    BrowserActions.showBrowser(BrowserType.WATCH_LIST);
  }

  render(){
    const { store } = this.props;
    return (
      <div className="header" style={S.ROOT_DIV}>
         <LoadingProgress store={store} />
         <IconAppLogo
           className="header__icon-app"
           title="Library Watch v0.11.0"
         />
         <AppLabel
           style={S.APP_LABEL}
           caption="Library Watch v0.11.0"
         />
         <FlatButton
            caption="Library"
            title="Click to show library browser"
            accessKey="l"
            timeout={0}
            onClick={this._handleClickDynamic.bind(null, BrowserConfig.LIBRARY)}
         />
         <FlatButton
            caption="Watch"
            title="Click to show watch browser"
            accessKey="w"
            timeout={0}
            onClick={this._handleClickWatch}
         />
         <ButtonSave
            store={store}
            style={S.BUTTON_SAVE}
         />
         <FlatButton
            rootStyle={S.BT_ABOUT}
            caption="About"
            title="Click to show about description"
            accessKey="a"
            timeout={0}
            onClick={ComponentActions.showAbout}
         />
         <LimitRemainingLabel
             store={store}
             style={S.LABEL_LIMIT}
         />
      </div>
    );
  }
}

export default HeaderBar
