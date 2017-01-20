import React from 'react';

import { ComponentActionTypes } from '../../flux/actions/ComponentActions';
import { ChartActionTypes } from '../../flux/actions/ChartActions';

import ScrollPane from '../zhnAtoms/ScrollPane';
import CaptionRow from '../zhnAtoms/CaptionRow';

import Step from './Step';
import Token from './Token';
import LinkToken from './LinkToken';
import IconLogoBar from './IconLogoBar';

import ContainerStyles from '../styles/ContainerStyles.js';
const styles = ContainerStyles;

const STYLE = {
  SCROLL_DIV : {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: '10px'
  },
  ROOT_DIV : {
    color: 'gray',
    fontWeight: 'bold',
    paddingLeft: '5px',
    paddingRight: '5px',
    lineHeight : 1.4
  },
  MARGIN_BOTTOM : {
    marginBottom : '1em'
  },
  MARGIN_TOP : {
    marginTop: '3px'
  }
};

const About = React.createClass({
  getInitialState(){
    return {
      isShow : this.props.isShow
    }
  },

  componentWillMount(){
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentWillUnmount(){
    this.unsubscribe();
  },
  _onStore(actionType, data){
    if (actionType === ComponentActionTypes.SHOW_ABOUT){
      this.setState({isShow : true});
    } else if (actionType === ChartActionTypes.INIT_AND_SHOW_CHART){
      this.setState({isShow : false});
    } else if (actionType === ChartActionTypes.SHOW_CHART){
      this.setState({isShow : false});
    }
  },

  _handlerClose(){
    this.setState({ isShow : false });
  },
  render(){
    const { isShow } = this.state
        , _classOpen = isShow
              ? "show-popup"
              : null
        , _styleOpen = isShow
              ? {display: 'block'}
              : {display: 'none'};

    return (
      <div
         className={_classOpen}
         style={Object.assign({}, styles.aboutRootDiv, _styleOpen)}
      >
         <CaptionRow
            caption="About"
            onClose={this._handlerClose}
         />

         <ScrollPane style={STYLE.SCROLL_DIV}>

         <div style={STYLE.ROOT_DIV}>
           <p>
             <Token color="#80c040">
               Library Watch
             </Token>
             <Token color="gray" isFirstBlank={true}>
               is a SPA RESTful client.
             </Token>
           </p>
           <p style={STYLE.MARGIN_BOTTOM}>
              With it, you can view information about GitHub's repositories, NPM's packages, StackOverflows's questions.
           </p>
           <p style={STYLE.MARGIN_BOTTOM}>
            <Token color="gray">
              Information API providers :
            </Token>
            <LinkToken
               href="https://www.github.com/"
               color="#009ae5"
               isFirstBlank={true}
               title="GitHub"
            >
               GitHub
            </LinkToken>
            <Token color="gray">
              ,&nbsp;
            </Token>
            <LinkToken
               href="https://www.npmjs.com/"
               color="#273547"
               isFirstBlank={true}
               title="NPM"
            >
               NPM
            </LinkToken>
            <Token color="gray">
              ,&nbsp;
            </Token>
            <LinkToken
               href="https://stackexchange.com/"
               color="#3186C9"
               isFirstBlank={true}
               title="Stack Exchange"
            >
               Stack Exchange
            </LinkToken>
            <Token color="gray">
              .
            </Token>
           </p>
            <p>
              <Step step="1" />
              <Token color="black" isFirstBlank={true}>
                 Choose an information Browser from the header bar
              </Token>
            </p>
            <p style={STYLE.MARGIN_TOP}>
              <Step step="2" />
              <Token color="black" isFirstBlank={true}>
                 Choose an information menu item in a Browser
              </Token>
            </p>
            <p style={STYLE.MARGIN_TOP}>
              <Step step="3" />
              <Token color="black" isFirstBlank={true}>
                 Enter repository or package name in a draggable Dialog
              </Token>
            </p>
            <p style={STYLE.MARGIN_TOP}>
               <Step step="4" />
               <Token color="black" isFirstBlank={true}>
                  Click a button Load
               </Token>
            </p>
            <p style={STYLE.MARGIN_TOP}>
               <Token color="gray">
                  The result will be shown in an Item component in a Container.
               </Token>
            </p>
            <p style={Object.assign({}, STYLE.MARGIN_BOTTOM, STYLE.MARGIN_TOP)}>
               <Token color="gray">
                  Also, you can add an item to Watch Browser and save to LocalStorage.
               </Token>
            </p>
            <p style={STYLE.MARGIN_BOTTOM}>
               After clicking a button Show in a Dialog will be opened Container with Items
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
});

export default About
