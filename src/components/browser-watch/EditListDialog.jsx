import memoIsShow from '../dialogs/memoIsShow';

import {
  WAT_EDIT_WATCH_COMPLETED,
  WAT_EDIT_WATCH_FAILED,
  WAT_CREATE_LIST,
  WAT_RENAME_LIST,
  WAT_DELETE_LIST,
  WatchActions
} from '../../flux/actions/WatchActions';

import {
  MSG_EMPTY_NAME,
  MSG_NOT_SELECTED
} from '../../constants/Msg';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import TabPane from '../zhn-moleculs/TabPane';
import Tab from '../zhn-atoms/Tab';
import ListCreatePane from './ListCreatePane';
import ListEditPane from './ListEditPane';
import ListDeletePane from './ListDeletePane';

const EditListDialog = memoIsShow(({
  isShow,
  store,
  onClose
}) => (
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
            actionCompleted={WAT_EDIT_WATCH_COMPLETED}
            actionFailed={WAT_EDIT_WATCH_FAILED}
            forActionType={WAT_CREATE_LIST}
            msgOnNotSelect={MSG_NOT_SELECTED}
            msgOnIsEmptyName={MSG_EMPTY_NAME}
            onCreate={WatchActions.createList}
            onClose={onClose} />
       </Tab>
       <Tab title="Rename">
         <ListEditPane
            store={store}
            actionCompleted={WAT_EDIT_WATCH_COMPLETED}
            actionFailed={WAT_EDIT_WATCH_FAILED}
            forActionType={WAT_RENAME_LIST}
            msgOnNotSelect={MSG_NOT_SELECTED}
            msgOnIsEmptyName={MSG_EMPTY_NAME}
            onRename={WatchActions.renameList}
            onClose={onClose}
         />
       </Tab>
       <Tab title="Delete">
         <ListDeletePane
            store={store}
            actionCompleted={WAT_EDIT_WATCH_COMPLETED}
            actionFailed={WAT_EDIT_WATCH_FAILED}
            forActionType={WAT_DELETE_LIST}
            msgOnNotSelect={MSG_NOT_SELECTED}
            onDelete={WatchActions.deleteList}
            onClose={onClose}
         />
       </Tab>
    </TabPane>
  </ModalDialog>
));

export default EditListDialog
