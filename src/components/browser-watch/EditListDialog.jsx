import { memoIsShow } from '../hoc/memoFn';

import {
  WAT_CREATE_LIST,
  WAT_RENAME_LIST,
  WAT_DELETE_LIST
} from '../../flux/actions/WatchActions';

import {
  crList,
  renList,
  delList,
  getWatchListsByGroup
} from '../../flux/watch-list/watchListStore'

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
            forActionType={WAT_CREATE_LIST}
            msgOnNotSelect={MSG_NOT_SELECTED}
            msgOnIsEmptyName={MSG_EMPTY_NAME}
            onCreate={crList}
            onClose={onClose} />
       </Tab>
       <Tab title="Rename">
         <ListEditPane
            getWatchListsByGroup={getWatchListsByGroup}
            forActionType={WAT_RENAME_LIST}
            msgOnNotSelect={MSG_NOT_SELECTED}
            msgOnIsEmptyName={MSG_EMPTY_NAME}
            onRename={renList}
            onClose={onClose}
         />
       </Tab>
       <Tab title="Delete">
         <ListDeletePane
            getWatchListsByGroup={getWatchListsByGroup}
            forActionType={WAT_DELETE_LIST}
            msgOnNotSelect={MSG_NOT_SELECTED}
            onDelete={delList}
            onClose={onClose}
         />
       </Tab>
    </TabPane>
  </ModalDialog>
));

export default EditListDialog
