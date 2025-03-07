import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import Toolbar from './widgets/Toolbar';
import ValidationMessages from './rows/ValidationMessages';

const Dialog = ({
  isShow,
  isToolbar,
  caption,
  menuModel,
  commandButtons,
  toolbarButtons,
  validationMessages,
  children,
  onShow,
  onClose
}) => (
  <DraggableDialog
     isShow={isShow}
     caption={caption}
     menuModel={menuModel}
     commandButtons={commandButtons}
     onShowChart={onShow}
     onClose={onClose}
  >
   <Toolbar
      isShow={isToolbar}
      buttons={toolbarButtons}
   />
   {children}
   <ValidationMessages
      validationMessages={validationMessages}
   />
 </DraggableDialog>
);

export default Dialog
