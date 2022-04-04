
import D from './DialogCell';

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
  <D.DraggableDialog
     isShow={isShow}
     caption={caption}
     menuModel={menuModel}
     commandButtons={commandButtons}
     onShowChart={onShow}
     onClose={onClose}
  >
   <D.Toolbar
      isShow={isToolbar}
      buttons={toolbarButtons}
   />
   {children}
   <D.ValidationMessages
      validationMessages={validationMessages}
   />
 </D.DraggableDialog>
);

export default Dialog
