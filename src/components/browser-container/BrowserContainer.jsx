import React from 'react';

import { BrowserType } from '../../constants/Type';

import WatchBrowser from '../browser-watch/WatchBrowser';
import DialogContainer3 from '../zhnContainers/DialogContainer3';

const BrowserContainer = React.createClass({
  getInitialState(){
    return {
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
     if (actionType === this.props.initBrowserAction){
       this.state.elBrowsers.unshift(data);
       this.setState(this.state);
     }
  },

  render(){

    const {
             store
           , showBrowserAction, updateWatchAction
           //, updateBrowserAction,
           , initDialogAction, showDialogAction
          } = this.props

    const  { elBrowsers } = this.state;

    return (
      <div className="hrz-container">
        <WatchBrowser
           browserType={BrowserType.WATCH_LIST}
           caption="Watch"
           store={store}
           showAction={showBrowserAction}
           updateAction={updateWatchAction}
        />
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
