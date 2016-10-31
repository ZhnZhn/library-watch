import React from 'react';

import { BrowserType } from '../../constants/Type';

import WatchBrowser from '../browser-watch/WatchBrowser';
import DialogContainer3 from '../zhnContainers/DialogContainer3';

const BrowserContainer = React.createClass({
  getInitialState(){
    return {
      isDoubleWatch : false,
      elBrowsers : []
    }
  },

  componentWillMount(){
    const { store } = this.props;
    this.unsubscribe = store.listen(this._onStore);
  },
  componentWillUnmount(){
    this.unsubscribe();
  },
  _onStore(actionType, data){
     const { initBrowserAction, toggleWatchDbBrowserAction } = this.props
     if (actionType === initBrowserAction){
       this.state.elBrowsers.unshift(data);
       this.setState(this.state);
     } else if (actionType === toggleWatchDbBrowserAction){
       this.setState({ isDoubleWatch : !this.state.isDoubleWatch })
     }
  },

  render(){

    const {
             store
           , showBrowserAction, updateWatchAction
           //, updateBrowserAction,
           , initDialogAction, showDialogAction
          } = this.props

    const  { isDoubleWatch, elBrowsers } = this.state;

    const _doubleWatch = (isDoubleWatch)
             ? (
                 <WatchBrowser
                   isShow={true}
                   isEditMode={true}
                   isDoubleWatch={true}
                   browserType={BrowserType.WATCH_LIST}
                   caption="Watch 2"
                   store={store}
                   showAction={showBrowserAction}
                   updateAction={updateWatchAction}
                 />
               )
             : undefined;

    return (
      <div className="hrz-container">
        <WatchBrowser
           browserType={BrowserType.WATCH_LIST}
           caption="Watch"
           store={store}
           showAction={showBrowserAction}
           updateAction={updateWatchAction}
        />
        {_doubleWatch}
        {elBrowsers}
        <DialogContainer3
           maxDialog={3}
           store={store}
           initAction={initDialogAction}
           showAction={showDialogAction}
        />
      </div>
    );
  }

});

export default BrowserContainer
