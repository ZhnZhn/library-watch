import { useCallback } from '../uiApi';

import { BrowserActions } from '../../flux/actions/BrowserActions';
import { ComponentActions } from '../../flux/actions/ComponentActions';
import { BrowserType as BT } from '../../constants/Type';

import A from '../Comp'
import LoadingProgress from './LoadingProgress';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import LimitRemainingLabel from './LimitRemainingLabel';

const TITLE = "Library Watch v0.12.0"

, CL_HEADER = "header"
, CL_ICON = "header__icon-app"
, CL_ABOUT = "header__bt-about"
, CL_APP_LABEL = "header__app-label"
, CL_LIBRARY = "header__bt-library"

, S_ROOT_DIV = {
  position : 'relative',
  zIndex : 50
}
, S_BT_ABOUT = {
  float: 'right',
  marginRight: 20
}
, S_SVG_INFO = {
  position: 'relative',
  top: -2,
  verticalAlign: 'middle',
  margin: '0 8px'
}
, S_BUTTON_SAVE = { marginLeft : 10 }
, S_LABEL_LIMIT = {
  float: 'right',
  paddingTop: 5
}
, BROWSER_CONFIG_LIBRARY = {
  browserType: BT.LIBRARY,
  caption: 'Library',
  sourceMenuUrl : './data/github/source-menu.json',
  rowClass: 'menu-item'
};



const HeaderBar = ({ store })  => {
  const _hClickLibrary = useCallback(() => {
    BrowserActions.showBrowserDynamic(BROWSER_CONFIG_LIBRARY);
  }, [])
  , _hClickWatch = useCallback(() => {
    BrowserActions.showBrowser(BT.WATCH_LIST);
  }, []);

  return (
  <div className={CL_HEADER} style={S_ROOT_DIV}>
     <LoadingProgress store={store} />
     <IconAppLogo
       className={CL_ICON}
       title={TITLE}
     />
     <AppLabel
       className={CL_APP_LABEL}
       caption={TITLE}
     />
     <A.FlatButton
        className={CL_LIBRARY}
        caption="Library"
        title="Click to show library browser"
        accessKey="l"
        timeout={0}
        onClick={_hClickLibrary}
     />
     <A.FlatButton
        caption="Watch"
        title="Click to show watch browser"
        accessKey="w"
        timeout={0}
        onClick={_hClickWatch}
     />
     <A.ButtonSave
        store={store}
        style={S_BUTTON_SAVE}
     />
     <A.FlatButton
        className={CL_ABOUT}
        style={S_BT_ABOUT}
        title="About web app Library Watch"
        accessKey="a"
        timeout={0}
        onClick={ComponentActions.showAbout}
     >
        <A.SvgInfo style={S_SVG_INFO} />
     </A.FlatButton>
     <LimitRemainingLabel
        store={store}
        style={S_LABEL_LIMIT}
     />
  </div>
 );
};

export default HeaderBar
