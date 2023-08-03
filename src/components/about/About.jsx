import useBool from '../hooks/useBool';
import useListen from '../hooks/useListen';

import { useMsAbout } from '../../flux/compStore';

import {
  CHAT_INIT_AND_SHOW_CHART,
  CHAT_SHOW_CHART
} from '../../flux/actions/ChartActions';

import ScrollPane from '../zhn-atoms/ScrollPane';
import CaptionRow from '../zhn-atoms/CaptionRow';

import Step from './Step';
import Token from './Token';
import LinkToken from './LinkToken';
import IconLogoBar from './IconLogoBar';

import { S_ABOUT } from '../styles/ContainerStyles';

const CL_SHOW_POPUP = "show-popup"
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' }
, S_SCROLL_DIV = {
  overflowY: 'auto',
  height: '92%',
  //height: 'calc(100vh - 90px)',
  paddingRight: 10
}
, S_ABOUT_DIV = {
  color: 'grey',
  padding: '0 5px 0 16px',
  lineHeight: 1.4,
  fontWeight: 'bold'
}
, S_MARGIN_BOTTOM = { marginBottom: '1em' }
, S_MARGIN_TOP = { marginTop: 3 };

const About = ({
  store
}) => {
  const [
    isShow,
    showAbout,
    hideAbout
  ] = useBool(true);


  useMsAbout(msAbout => {
    if (msAbout && msAbout.is) {
      showAbout()
    }
  })

  useListen(store, (actionType, data) => {
    if (actionType === CHAT_INIT_AND_SHOW_CHART
     || actionType === CHAT_SHOW_CHART
   ){
      hideAbout()
    }
  })

  const [
    _style,
    _className
  ] = isShow
     ? [S_BLOCK, CL_SHOW_POPUP]
     : [S_NONE];

  return (
    <div
       className={_className}
       style={{...S_ABOUT, ..._style}}
    >
       <CaptionRow
          caption="About"
          onClose={hideAbout}
       />

       <ScrollPane style={S_SCROLL_DIV}>

       <div style={S_ABOUT_DIV}>
         <p>
           <Token color="#80c040">
             Library Watch
           </Token>
           <Token color="grey" isFirstBlank={true}>
             is a SPA RESTful client.
           </Token>
         </p>
         <p style={S_MARGIN_BOTTOM}>
            By means of web app Library-Watch, it is possible to view information about GitHub's repositories, NPM's packages, StackOverflows's questions.
         </p>
         <p style={S_MARGIN_BOTTOM}>
          <Token color="grey">
            Information API providers:
          </Token>
          <LinkToken
             href="https://www.github.com/"
             color="#009ae5"
             title="GitHub"
             caption="GitHub"
          />
          <LinkToken
             href="https://www.npmjs.com/"
             color="#273547"
             title="NPM"
             caption="NPM"
          />
          <LinkToken
             href="https://api-docs.npms.io/"
             color="#273547"
             title="NPMS.IO"
             caption="NPMS.IO"
          />
          <LinkToken
             href="https://bundlephobia.com/"
             color="#273547"
             title="Bundlephobia.com"
             caption="Bundlephobia.com"
          />
          <LinkToken
             href="https://stackexchange.com/"
             color="#3186C9"
             title="StackExchange"
             caption="StackExchange"
          />
          <LinkToken
             href="https://gs.statcounter.com/"
             color="#009ae5"
             title="StatCounter"
             caption="StatCounter"
          />
         </p>
          <p>
            <Step step="1" />
            <Token color="black" isFirstBlank={true}>
               Please, choose an information Browser from the header bar.
            </Token>
          </p>
          <p style={S_MARGIN_TOP}>
            <Step step="2" />
            <Token color="black" isFirstBlank={true}>
               Next, choose an information menu item in a Browser.
            </Token>
          </p>
          <p style={S_MARGIN_TOP}>
            <Step step="3" />
            <Token color="black" isFirstBlank={true}>
               Enter repository or package name in a draggable Dialog.
            </Token>
          </p>
          <p style={S_MARGIN_TOP}>
             <Step step="4" />
             <Token color="black" isFirstBlank={true}>
                Click a button Load.
             </Token>
          </p>
          <p style={S_MARGIN_TOP}>
             <Token color="grey">
                The result will be shown in an Item component in a Container.
             </Token>
          </p>
          <p style={{...S_MARGIN_BOTTOM, ...S_MARGIN_TOP}}>
             <Token color="grey">
                Also, it possible to add an item to Watch Browser and save to LocalStorage.
             </Token>
          </p>
          <p style={S_MARGIN_BOTTOM}>
             After clicking a button Show in a Dialog opens Container with Items
             or empty. After closing a Container all Items remains.
             In one-time max three Item Dialogs can be opened.
          </p>
          <p>
            <Token color="grey">
              In that case of using
            </Token>
            <LinkToken
               href="https://developer.github.com/v3/#rate-limiting"
               color="#009ae5"
               isFirstBlank={true}
               title="GitHub API v3 Rate Limiting"
            >
               GitHub
            </LinkToken>
            <Token color="grey" isFirstBlank={true}>
               API provider, exists some restriction on frequency
               and amount queries (<Token color="#2f7ed8">60 calls per hour, 10 requests per minute for Search API</Token><Token color="grey">).</Token>
            </Token>
          </p>
          <IconLogoBar />
        </div>
      </ScrollPane>
    </div>
  );
};

export default About
