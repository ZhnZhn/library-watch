import memoIsShow from '../dialogs/memoIsShow';

import {
  WAT_EDIT_WATCH_COMPLETED,
  WAT_EDIT_WATCH_FAILED,
  WAT_ADD_GROUP,
  WAT_RENAME_GROUP,
  WAT_DELETE_GROUP,
  WatchActions
} from '../../flux/actions/WatchActions';

import {
  MSG_EMPTY_NAME,
  MSG_NOT_SELECTED
} from '../../constants/Msg';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import TabPane from '../zhn-moleculs/TabPane';
import Tab from '../zhn-atoms/Tab';
import GroupAddPane from './GroupAddPane';
import GroupEditPane from './GroupEditPane';
import GroupDeletePane from './GroupDeletePane';

const EditGroupDialog = memoIsShow(({
  isShow,
  store,
  onClose
}) => (
  <ModalDialog
     caption="Watch Groups Edit"
     isShow={isShow}
     isWithButton={false}
     onClose={onClose}
  >
    <TabPane key="1" width="380px" >
       <Tab title="Create">
         <GroupAddPane
            store={store}
            actionCompleted={WAT_EDIT_WATCH_COMPLETED}
            actionFailed={WAT_EDIT_WATCH_FAILED}
            forActionType={WAT_ADD_GROUP}
            msgOnIsEmptyName={MSG_EMPTY_NAME}
            onCreate={WatchActions.addGroup}
            onClose={onClose}
          />
       </Tab>
       <Tab title="Rename">
         <GroupEditPane
            store={store}
            actionCompleted={WAT_EDIT_WATCH_COMPLETED}
            actionFailed={WAT_EDIT_WATCH_FAILED}
            forActionType={WAT_RENAME_GROUP}
            msgOnNotSelect={MSG_NOT_SELECTED}
            msgOnIsEmptyName={MSG_EMPTY_NAME}
            onRename={WatchActions.renameGroup}
            onClose={onClose}
         />
       </Tab>
       <Tab title="Delete">
         <GroupDeletePane
            store={store}
            actionCompleted={WAT_EDIT_WATCH_COMPLETED}
            forActionType={WAT_DELETE_GROUP}
            msgOnNotSelect={MSG_NOT_SELECTED}
            onDelete={WatchActions.deleteGroup}
            onClose={onClose}
         />
       </Tab>
    </TabPane>
  </ModalDialog>
));

export default EditGroupDialog
