import React from 'react';
import createReactClass from 'create-react-class'

//import PropTypes from 'prop-types'

import WatchActions from '../../flux/actions/WatchActions';
import { WatchActionTypes } from '../../flux/actions/WatchActions';

import Msg from '../../constants/Msg';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import TabPane from '../zhn-moleculs/TabPane';
import Tab from '../zhn-atoms/Tab';
import ListCreatePane from './ListCreatePane';
import ListEditPane from './ListEditPane';
import ListDeletePane from './ListDeletePane';


const EditListDialog = createReactClass({
  displayName : 'EditListDialog',
  /*
  propTypes : {
    isShow : PropTypes.bool,
    store : PropTypes.object,
    onClose : PropTypes.func
  },
  */

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  },

  render(){
    const {isShow, store, onClose} = this.props;
    return (
      <ModalDialog
         caption="Watch Lists Edit"
         isShow={isShow}
         isWithButton={false}
         onClose={onClose}
      >
        <TabPane key="1" width="380px" >
           <Tab title="Create">
             <ListCreatePane
                store={store}
                actionCompleted={WatchActionTypes.EDIT_WATCH_COMPLETED}
                actionFailed={WatchActionTypes.EDIT_WATCH_FAILED}
                forActionType={WatchActionTypes.CREATE_LIST}
                msgOnNotSelect={Msg.NOT_SELECTED}
                msgOnIsEmptyName={Msg.IS_EMPTY_NAME}
                onCreate={WatchActions.createList}
                onClose={onClose} />
           </Tab>
           <Tab title="Rename">
             <ListEditPane
                store={store}
                actionCompleted={WatchActionTypes.EDIT_WATCH_COMPLETED}
                actionFailed={WatchActionTypes.EDIT_WATCH_FAILED}
                forActionType={WatchActionTypes.RENAME_LIST}
                msgOnNotSelect={Msg.NOT_SELECTED}
                msgOnIsEmptyName={Msg.IS_EMPTY_NAME}
                onRename={WatchActions.renameList}
                onClose={onClose}
             />
           </Tab>
           <Tab title="Delete">
             <ListDeletePane
                store={store}
                actionCompleted={WatchActionTypes.EDIT_WATCH_COMPLETED}
                actionFailed={WatchActionTypes.EDIT_WATCH_FAILED}
                forActionType={WatchActionTypes.DELETE_LIST}
                msgOnNotSelect={Msg.NOT_SELECTED}
                onDelete={WatchActions.deleteList}
                onClose={onClose}
             />
           </Tab>
        </TabPane>
      </ModalDialog>
    )
  }
});

export default EditListDialog
