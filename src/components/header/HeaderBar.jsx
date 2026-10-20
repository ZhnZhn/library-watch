import { BT_LIBRARY } from '../../constants/Type';

import {
  showBrowserDynamic,
  showWatch
} from '../../flux/browserStore';
import {
  showSettingsDialog,
  showAbout
} from '../../flux/compStore';
import {
  saveWatchList
} from '../../flux/watch-list/watchListStore';

import useWatchEditedColor from '../styles/useWatchEditedColor';

import SvgSave from '../zhn/svg/SvgSave';
import SvgInfo from '../zhn/svg/SvgInfo';
import SvgSettings from '../zhn/svg/SvgSettings';
import FlatButton from '../zhn-m/FlatButton';

import LoadingProgress from './LoadingProgress';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import LimitRemainingLabel from './LimitRemainingLabel';

import {
  CL_BT_HOT_KEY,
  HK_LIBRARY,
  HK_WATCH,
  HK_SETTINGS,
  HK_ABOUT
} from '../hotkeys/hotkeys';

import {
  crCnBgColor
} from '../styleFn';

import {
  TITLE_APP,

  CAPTION_LIBRARY,
  TITLE_LIBRARY_BROWSER,
  CAPTION_WATCH,
  TITLE_WATCH_BROWSER,
  TITLE_BUTTON_SAVE,

  TITLE_SETTINGS_DIALOG,
  TITLE_ABOUT
} from '../../constants/Tokens';

const TOKEN_HEADER = "header"
, CL_HEADER = crCnBgColor(TOKEN_HEADER)
, CL_ICON = `${TOKEN_HEADER}__icon-app`
, CL_ABOUT = `${TOKEN_HEADER}__bt-about`
, CL_APP_LABEL = `${TOKEN_HEADER}__app-label`
, CL_LIBRARY = `${TOKEN_HEADER}__bt-library`

, S_SVG_ICON = {
  verticalAlign: 'middle',
  margin: '0 8px'
}
, S_BUTTON_SAVE = {
  padding: '0 4px'
}
, S_BTS_RIGHT = {
  position: 'relative',
  top: -2,
  marginLeft: 'auto'
}

, BROWSER_CONFIG_LIBRARY = {
  browserType: BT_LIBRARY,
  caption: 'Library',
  sourceMenuUrl : './data/github/source-menu.json',
  rowClass: 'menu-item'
};

const _hClickLibrary = () => showBrowserDynamic(BROWSER_CONFIG_LIBRARY);
const _crBtSaveStyle = color => color
  ? {...S_BUTTON_SAVE, color }
  : S_BUTTON_SAVE;

const HeaderBar = () => {
  const _btSaveColor = useWatchEditedColor();
  return (
  <header className={CL_HEADER}>
     <LoadingProgress />
     <IconAppLogo
       className={CL_ICON}
       title={TITLE_APP}
     />
     <AppLabel
       className={CL_APP_LABEL}
       caption={TITLE_APP}
     />
     <FlatButton
        className={CL_LIBRARY}
        classHotKey={CL_BT_HOT_KEY}
        caption={CAPTION_LIBRARY}
        title={TITLE_LIBRARY_BROWSER}
        hotKey={HK_LIBRARY}
        timeout={0}
        onClick={_hClickLibrary}
     />
     <FlatButton
        caption={CAPTION_WATCH}
        title={TITLE_WATCH_BROWSER}
        hotKey={HK_WATCH}
        classHotKey={CL_BT_HOT_KEY}
        timeout={0}
        onClick={showWatch}
     />
     <FlatButton
        style={_crBtSaveStyle(_btSaveColor)}
        title={TITLE_BUTTON_SAVE}
        onClick={saveWatchList}
     >
       <SvgSave style={S_SVG_ICON} />
     </FlatButton>
     <div style={S_BTS_RIGHT}>
       <LimitRemainingLabel />
       <FlatButton
          title={TITLE_SETTINGS_DIALOG}
          hotKey={HK_SETTINGS}
          timeout={0}
          onClick={showSettingsDialog}
        >
          <SvgSettings style={S_SVG_ICON} />
       </FlatButton>
       <FlatButton
          className={CL_ABOUT}
          title={TITLE_ABOUT}
          hotKey={HK_ABOUT}
          timeout={0}
          onClick={showAbout}
       >
          <SvgInfo style={S_SVG_ICON} />
       </FlatButton>
     </div>
  </header>
);
}

export default HeaderBar
