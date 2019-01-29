import React, { Component } from 'react';

//import PropTypes from "prop-types";

import Browser from '../zhnAtoms/Browser';
import CaptionRow from '../zhnAtoms/CaptionRow';
import ScrollPane from '../zhnAtoms/ScrollPane';
import MenuPart from './MenuPart';

const STYLE = {
  BROWSER : {
    paddingRight: '0'
  },
  SCROLL_DIV : {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: '10px'
  }
};

class MenuBrowserDynamic extends Component {
  /*
  static propTypes = {
    isInitShow: PropTypes.bool,
    browserType: PropTypes.string,
    caption: PropTypes.string,
    sourceMenuUrl: PropTypes.string,
    onLoadMenu: PropTypes.func,

    store: PropTypes.object,
    showAction: PropTypes.string,
    updateAction: PropTypes.string,
    loadCompletedAction: PropTypes.string
  }
  */

  constructor(props){
    super()
    this.state = {
      isShow : !!props.isInitShow,
      isLoaded : false,
      menuItems: []
    }
  }

  componentWillMount(){
    this.unsubscribe = this.props.store.listen(this._onStore);
  }
  componentDidMount(){
    this._loadMenu();
  }
  componentWillUpdate(nextProps, nextState){
     if (!nextState.isLoaded && nextState.isShow){
       this._loadMenu();
     }
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  _loadMenu = () => {
    const { browserType, caption, sourceMenuUrl, onLoadMenu } = this.props;
    onLoadMenu({ browserType, caption, sourceMenuUrl });
  }

  _onStore = (actionType, data) => {
    const { browserType, store, showAction, updateAction, loadCompletedAction } = this.props;
    if (actionType === showAction && data === browserType){
      this._handleShow();
    } else if (actionType === loadCompletedAction && data.browserType === browserType){
      this.setState({ menuItems: data.menuItems, isLoaded : true });
    } else if (actionType === updateAction && data === browserType){
      this.setState({ menuItems: store.getBrowserMenu(browserType) });
    }
  }

  _handleHide = () => {
    this.setState({ isShow : false })
  }
  _handleShow = () => {
    this.setState({ isShow : true })
  }

  _renderMenuParts(rowClass, menuItems=[]){
    return menuItems.map((menuPart, index) => {
      return (
         <MenuPart
            {...menuPart}
            key={index}
            rowClass={rowClass}
        />);
    });
  }

  render(){
    const { caption, children, rowClass } = this.props
        , { menuItems, isShow } = this.state;
    
    return (
       <Browser isShow={isShow} style={STYLE.BROWSER}>
          <CaptionRow
             caption={caption}
             onClose={this._handleHide}
          />
          <ScrollPane style={STYLE.SCROLL_DIV}>
            {this._renderMenuParts(rowClass, menuItems)}
            {children}
          </ScrollPane>
       </Browser>
    )
  }
}

export default MenuBrowserDynamic
