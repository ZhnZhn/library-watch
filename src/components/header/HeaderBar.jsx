import React, { Component } from 'react';

import BA from '../../flux/actions/BrowserActions';
import CA from '../../flux/actions/ComponentActions';
import { BrowserType as BT } from '../../constants/Type';

import A from '../Comp'
import LoadingProgress from './LoadingProgress';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
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
  SVG_INFO: {
    position: 'relative',
    top: -2,
    verticalAlign: 'middle',
    marginLeft: 8,
    marginRight: 8
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
    browserType: BT.LIBRARY,
    caption: 'Library',
    sourceMenuUrl : './data/github/source-menu.json',
    rowClass: 'menu-item'
  }
};

class HeaderBar extends Component {

  _handleClickDynamic = (browserConfig) => {
    BA.showBrowserDynamic(browserConfig);
  }
  _handleClickWatch = () => {
    BA.showBrowser(BT.WATCH_LIST);
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
         <A.FlatButton
            className={CL.LIBRARY}
            caption="Library"
            title="Click to show library browser"
            accessKey="l"
            timeout={0}
            onClick={this._handleClickDynamic.bind(null, BrowserConfig.LIBRARY)}
         />
         <A.FlatButton
            caption="Watch"
            title="Click to show watch browser"
            accessKey="w"
            timeout={0}
            onClick={this._handleClickWatch}
         />
         <A.ButtonSave
            store={store}
            style={S.BUTTON_SAVE}
         />
         <A.FlatButton
            className={CL.ABOUT}
            rootStyle={S.BT_ABOUT}
            title="About web app Library Watch"
            accessKey="a"
            timeout={0}
            onClick={CA.showAbout}
         >
            <A.SvgInfo style={S.SVG_INFO} />
         </A.FlatButton>
         <LimitRemainingLabel
             store={store}
             style={S.LABEL_LIMIT}
         />
      </div>
    );
  }
}

export default HeaderBar
