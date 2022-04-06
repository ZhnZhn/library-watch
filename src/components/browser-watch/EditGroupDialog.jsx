import memoIsShow from '../dialogs/memoIsShow';

import wa from '../../flux/actions/WatchActions';
import { WatchActionTypes as WAT } from '../../flux/actions/WatchActions';

import Msg from '../../constants/Msg';

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
            actionCompleted={WAT.EDIT_WATCH_COMPLETED}
            actionFailed={WAT.EDIT_WATCH_FAILED}
            forActionType={WAT.ADD_GROUP}
            msgOnIsEmptyName={Msg.IS_EMPTY_NAME}
            onCreate={wa.addGroup}
            onClose={onClose}
          />
       </Tab>
       <Tab title="Rename">
         <GroupEditPane
            store={store}
            actionCompleted={WAT.EDIT_WATCH_COMPLETED}
            actionFailed={WAT.EDIT_WATCH_FAILED}
            forActionType={WAT.RENAME_GROUP}
            msgOnNotSelect={Msg.NOT_SELECTED}
            msgOnIsEmptyName={Msg.IS_EMPTY_NAME}
            onRename={wa.renameGroup}
            onClose={onClose}
         />
       </Tab>
       <Tab title="Delete">
         <GroupDeletePane
            store={store}
            actionCompleted={WAT.EDIT_WATCH_COMPLETED}
            forActionType={WAT.DELETE_GROUP}
            msgOnNotSelect={Msg.NOT_SELECTED}
            onDelete={wa.deleteGroup}
            onClose={onClose}
         />
       </Tab>
    </TabPane>
  </ModalDialog>
));

export default EditGroupDialog
