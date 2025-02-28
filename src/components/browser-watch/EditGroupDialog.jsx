import { memoIsShow } from '../hoc/memoFn';

import {
  WAT_CREATE_GROUP,
  WAT_RENAME_GROUP,
  WAT_DELETE_GROUP
} from '../../flux/actions/WatchActions';

import {
  crGroup,
  renGroup,
  delGroup
} from '../../flux/watch-list/watchListStore';

import {
  MSG_EMPTY_NAME,
  MSG_NOT_SELECTED
} from '../../constants/Msg';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import TabPane from '../zhn-tab/TabPane';
import Tab from '../zhn-tab/Tab';
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
            forActionType={WAT_CREATE_GROUP}
            msgOnIsEmptyName={MSG_EMPTY_NAME}
            onCreate={crGroup}
            onClose={onClose}
          />
       </Tab>
       <Tab title="Rename">
         <GroupEditPane
            forActionType={WAT_RENAME_GROUP}
            msgOnNotSelect={MSG_NOT_SELECTED}
            msgOnIsEmptyName={MSG_EMPTY_NAME}
            onRename={renGroup}
            onClose={onClose}
         />
       </Tab>
       <Tab title="Delete">
         <GroupDeletePane
            forActionType={WAT_DELETE_GROUP}
            msgOnNotSelect={MSG_NOT_SELECTED}
            onDelete={delGroup}
            onClose={onClose}
         />
       </Tab>
    </TabPane>
  </ModalDialog>
));

export default EditGroupDialog
