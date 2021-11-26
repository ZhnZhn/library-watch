import { Component } from 'react';

import { ComponentActionTypes as CAT } from '../../flux/actions/ComponentActions';
import { ChartActionTypes as CHAT } from '../../flux/actions/ChartActions';

import ScrollPane from '../zhn-atoms/ScrollPane';
import CaptionRow from '../zhn-atoms/CaptionRow';

import Step from './Step';
import Token from './Token';
import LinkToken from './LinkToken';
import IconLogoBar from './IconLogoBar';

import { S_ABOUT } from '../styles/ContainerStyles';

const S = {
  BLOCK: {
    display: 'block'
  },
  NONE : {
    display: 'none'
  },
  SCROLL_DIV : {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: 10
  },
  ROOT_DIV : {
    color: 'gray',
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingRight: 5,
    lineHeight : 1.4
  },
  MARGIN_BOTTOM : {
    marginBottom : '1em'
  },
  MARGIN_TOP: {
    marginTop: 3
  }
};

class About extends Component {
   static defaultProps = {
     isShowInit: true
   }


  constructor(props){
    super(props)
    this.state = {
      isShow: props.isShowInit
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  _onStore = (actionType, data) => {
    if (actionType === CAT.SHOW_ABOUT){
      this.setState({isShow : true});
    } else if (actionType === CHAT.INIT_AND_SHOW_CHART){
      this.setState({isShow : false});
    } else if (actionType === CHAT.SHOW_CHART){
      this.setState({isShow : false});
    }
  }

  _handlerClose = () => {
    this.setState({ isShow : false });
  }

  render(){
    const { isShow } = this.state
    , _classOpen = isShow
          ? "show-popup"
          : null
    , _styleOpen = isShow
          ? S.BLOCK
          : S.NONE;

    return (
      <div
         className={_classOpen}
         style={{ ...S_ABOUT, ..._styleOpen }}
      >
         <CaptionRow
            caption="About"
            onClose={this._handlerClose}
         />

         <ScrollPane style={S.SCROLL_DIV}>

         <div style={S.ROOT_DIV}>
           <p>
             <Token color="#80c040">
               Library Watch
             </Token>
             <Token color="gray" isFirstBlank={true}>
               is a SPA RESTful client.
             </Token>
           </p>
           <p style={S.MARGIN_BOTTOM}>
              By means of web app Library-Watch, it is possible to view information about GitHub's repositories, NPM's packages, StackOverflows's questions.
           </p>
           <p style={S.MARGIN_BOTTOM}>
            <Token color="gray">
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
            <p style={S.MARGIN_TOP}>
              <Step step="2" />
              <Token color="black" isFirstBlank={true}>
                 Next, choose an information menu item in a Browser.
              </Token>
            </p>
            <p style={S.MARGIN_TOP}>
              <Step step="3" />
              <Token color="black" isFirstBlank={true}>
                 Enter repository or package name in a draggable Dialog.
              </Token>
            </p>
            <p style={S.MARGIN_TOP}>
               <Step step="4" />
               <Token color="black" isFirstBlank={true}>
                  Click a button Load.
               </Token>
            </p>
            <p style={S.MARGIN_TOP}>
               <Token color="gray">
                  The result will be shown in an Item component in a Container.
               </Token>
            </p>
            <p style={{ ...S.MARGIN_BOTTOM, ...S.MARGIN_TOP }}>
               <Token color="gray">
                  Also, it possible to add an item to Watch Browser and save to LocalStorage.
               </Token>
            </p>
            <p style={S.MARGIN_BOTTOM}>
               After clicking a button Show in a Dialog opens Container with Items
               or empty. After closing a Container all Items remains.
               In one-time max three Item Dialogs can be opened.
            </p>
            <p>
              <Token color="gray">
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
              <Token color="gray" isFirstBlank={true}>
                 API provider, exists some restriction on frequency
                 and amount queries (<Token color="#2f7ed8">60 calls per hour, 10 requests per minute for Search API</Token><Token color="gray">).</Token>
              </Token>
            </p>
            <IconLogoBar />
          </div>
        </ScrollPane>
      </div>
    );
  }
}

export default About
