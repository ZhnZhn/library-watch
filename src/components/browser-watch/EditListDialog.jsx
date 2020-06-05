import React from 'react';
//import PropTypes from 'prop-types'

import wa from '../../flux/actions/WatchActions';
import { WatchActionTypes as WAT } from '../../flux/actions/WatchActions';

import Msg from '../../constants/Msg';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import TabPane from '../zhn-moleculs/TabPane';
import Tab from '../zhn-atoms/Tab';
import ListCreatePane from './ListCreatePane';
import ListEditPane from './ListEditPane';
import ListDeletePane from './ListDeletePane';


const _areEqual = (prevProps, nextProps) => prevProps.isShow === nextProps.isShow

const EditListDialog = React.memo(({isShow, store, onClose}) => (
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
            actionCompleted={WAT.EDIT_WATCH_COMPLETED}
            actionFailed={WAT.EDIT_WATCH_FAILED}
            forActionType={WAT.CREATE_LIST}
            msgOnNotSelect={Msg.NOT_SELECTED}
            msgOnIsEmptyName={Msg.IS_EMPTY_NAME}
            onCreate={wa.createList}
            onClose={onClose} />
       </Tab>
       <Tab title="Rename">
         <ListEditPane
            store={store}
            actionCompleted={WAT.EDIT_WATCH_COMPLETED}
            actionFailed={WAT.EDIT_WATCH_FAILED}
            forActionType={WAT.RENAME_LIST}
            msgOnNotSelect={Msg.NOT_SELECTED}
            msgOnIsEmptyName={Msg.IS_EMPTY_NAME}
            onRename={wa.renameList}
            onClose={onClose}
         />
       </Tab>
       <Tab title="Delete">
         <ListDeletePane
            store={store}
            actionCompleted={WAT.EDIT_WATCH_COMPLETED}
            actionFailed={WAT.EDIT_WATCH_FAILED}
            forActionType={WAT.DELETE_LIST}
            msgOnNotSelect={Msg.NOT_SELECTED}
            onDelete={wa.deleteList}
            onClose={onClose}
         />
       </Tab>
    </TabPane>
  </ModalDialog>
), _areEqual)

  /*
EditListDialog.propTypes : {
  isShow : PropTypes.bool,
  store : PropTypes.object,
  onClose : PropTypes.func
},
*/

export default EditListDialog
