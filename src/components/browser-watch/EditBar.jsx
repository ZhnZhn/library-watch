import {
  showDialogEditGroups,
  showDialogEditLists,
  toggleWatchDbBrowser
} from './Handlers';

import Comp from '../Comp';

const { ButtonCircle } = Comp
, CL_BT_BAR = "bt__watch__bar"
, S_EDIT_BAR_DIV = { marginBottom: 10 }
, S_BT_EDIT_BAR_LIST = { marginLeft: 20 }

const EditBar = ({
  is
}) => is ? (
  <div style={S_EDIT_BAR_DIV}>
     <ButtonCircle
       caption="GROUP"
       title="Edit Group"
       className={CL_BT_BAR}
       isWithoutDefault={true}
       onClick={showDialogEditGroups}
    />
    <ButtonCircle
       caption="LIST"
       title="Edit Group List"
       className={CL_BT_BAR}
       isWithoutDefault={true}
       style={S_BT_EDIT_BAR_LIST}
       onClick={showDialogEditLists}
    />
    <ButtonCircle
       caption="DB"
       title="Double Watch Browser"
       className={CL_BT_BAR}
       isWithoutDefault={true}
       style={S_BT_EDIT_BAR_LIST}
       onClick={toggleWatchDbBrowser}
    />
  </div>
) : null;

export default EditBar
