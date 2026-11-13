import { ButtonCircleCn } from '../zhn/ButtonCircle';

import {
  showDbWatch
} from '../../flux/browserStore';
import {
  showDialogEditGroups,
  showDialogEditLists
} from './Handlers';

const CL_BT_BAR = "bt__watch__bar"
, S_EDIT_BAR_DIV = { marginBottom: 10 }
, S_BT_EDIT_BAR_LIST = { marginLeft: 20 };

const EditBar = ({
  is
}) => is ? (
  <div style={S_EDIT_BAR_DIV}>
     <ButtonCircleCn
       caption="GROUP"
       title="Edit Group"
       className={CL_BT_BAR}       
       onClick={showDialogEditGroups}
    />
    <ButtonCircleCn
       caption="LIST"
       title="Edit Group List"
       className={CL_BT_BAR}      
       style={S_BT_EDIT_BAR_LIST}
       onClick={showDialogEditLists}
    />
    <ButtonCircleCn
       caption="DB"
       title="Double Watch Browser"
       className={CL_BT_BAR}      
       style={S_BT_EDIT_BAR_LIST}
       onClick={showDbWatch}
    />
  </div>
) : null;

export default EditBar
