import React, { Component } from 'react';

import BrowserActions from '../../flux/actions/BrowserActions';
import ComponentActions from '../../flux/actions/ComponentActions';
import { BrowserType } from '../../constants/Type';

import FlatButton from '../zhn-m/FlatButton'
import LoadingProgress from './LoadingProgress';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import ButtonSave from '../zhn-moleculs/ButtonSave';
import LimitRemainingLabel from './LimitRemainingLabel';

const TITLE = "Library Watch v0.12.0";
const CL = {
  HEADER: "header",
  ICON: "header__icon-app",
  ABOUT: "header__bt-about",
  APP_LABEL: "header__app-label",
  LIBRARY: "header__bt-library"
};
const S = {
  ROOT_DIV : {
    position : 'relative',
    zIndex : 50
  },
  BT_ABOUT: {
    float: 'right',
    marginRight: 20
  },
  BUTTON_SAVE : {
    marginLeft : 10
  },
  LABEL_LIMIT: {
    float: 'right',
    paddingTop: 5
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
      <div className={CL.HEADER} style={S.ROOT_DIV}>
         <LoadingProgress store={store} />
         <IconAppLogo
           className={CL.ICON}
           title={TITLE}
         />
         <AppLabel
           className={CL.APP_LABEL}
           caption={TITLE}
         />
         <FlatButton
            className={CL.LIBRARY}
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
            className={CL.ABOUT}
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
