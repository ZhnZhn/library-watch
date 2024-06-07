import {
  showBrowserDynamic,
  showWatch
} from '../../flux/browserStore';
import { showAbout } from '../../flux/compStore';

import { BrowserType as BT } from '../../constants/Type';

import SvgInfo from '../zhn-atoms/svg/SvgInfo';
import FlatButton from '../zhn-m/FlatButton';
import ButtonSave from '../zhn-moleculs/ButtonSave';
import LoadingProgress from './LoadingProgress';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import LimitRemainingLabel from './LimitRemainingLabel';

import {
  HK_LIBRARY,
  HK_WATCH,
  HK_ABOUT
} from '../hotkeys/hotkeys';

const TITLE = "Library Watch v0.12.0"

, CL_HEADER = "header"
, CL_ICON = `${CL_HEADER}__icon-app`
, CL_ABOUT = `${CL_HEADER}__bt-about`
, CL_APP_LABEL = `${CL_HEADER}__app-label`
, CL_LIBRARY = `${CL_HEADER}__bt-library`

, S_SVG_INFO = {
  position: 'relative',
  top: -2,
  verticalAlign: 'middle',
  margin: '0 8px'
}
, S_BUTTON_SAVE = {
  marginTop: 4,
  marginLeft: 10
}
, S_BTS_RIGHT = {
  marginLeft: 'auto'
}

, BROWSER_CONFIG_LIBRARY = {
  browserType: BT.LIBRARY,
  caption: 'Library',
  sourceMenuUrl : './data/github/source-menu.json',
  rowClass: 'menu-item'
};

const _hClickLibrary = () => showBrowserDynamic(BROWSER_CONFIG_LIBRARY);

const HeaderBar = () => (
  <header className={CL_HEADER}>
     <LoadingProgress />
     <IconAppLogo
       className={CL_ICON}
       title={TITLE}
     />
     <AppLabel
       className={CL_APP_LABEL}
       caption={TITLE}
     />
     <FlatButton
        className={CL_LIBRARY}
        caption="Library"
        title="Library Browser"
        hotKey={HK_LIBRARY}
        timeout={0}
        onClick={_hClickLibrary}
     />
     <FlatButton
        caption="Watch"
        title="Watch Browser"
        hotKey={HK_WATCH}
        timeout={0}
        onClick={showWatch}
     />
     <ButtonSave
        style={S_BUTTON_SAVE}
     />
     <div style={S_BTS_RIGHT}>
       <LimitRemainingLabel />
       <FlatButton
          className={CL_ABOUT}
          title="About webapp Library Watch"
          hotKey={HK_ABOUT}
          timeout={0}
          onClick={showAbout}
       >
          <SvgInfo style={S_SVG_INFO} />
       </FlatButton>
     </div>
  </header>
);

export default HeaderBar
