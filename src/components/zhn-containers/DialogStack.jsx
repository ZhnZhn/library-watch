import {
  cloneUiElement,
  useState
} from "../uiApi";

const S_DIV = {
  zIndex: 30,
  position: "absolute",
  top: 70,
  left: 10,
  width: "99%"
};

const _crArrWithTopObjByKey = (arr, key) => {
  let index, i;
  for (i=0; i<arr.length; i++){
    if (arr[i].key === key){
      index = i
      break;
    }
  }
  return [
    ...arr.slice(0, index),
    ...arr.slice(index+1),
    arr[index]
  ];
};

const _checkOpenDialogs = (
  maxDialog,
  openDialogs,
  dialog,
  dialogType
) => {
  openDialogs.push(dialogType)
  return openDialogs.length > maxDialog
    ? (dialog[openDialogs[0]] = false, openDialogs.slice(1))
    : openDialogs;
};

const INITIAL_STATE = {
  dialog: {},
  elementDialogs: [],
  openDialogs: []
};

const DialogStack = ({
  useDgOption,
  maxDialog
}) => {
  const [
    state,
    setState
  ] = useState(INITIAL_STATE)
  , {
    dialog,
    elementDialogs
  } = state
  , _hToggleDialog = (dialogType) => {
    setState(prevState => {
      const {
        dialog,
        openDialogs
      } = prevState;
      dialog[dialogType] = !dialog[dialogType]
      return {
        ...prevState,
        dialog,
        openDialogs: !dialog[dialogType]
          ? openDialogs.filter(v => v !== dialogType)
          : openDialogs
      };
    })
  }

  useDgOption(dgOption => {
    if (dgOption) {
      const {
        dialogType,
        dialogComp
      } = dgOption;
      if (dialogComp) {
        setState(prevState => {
          const {
            dialog,
            elementDialogs,
            openDialogs
          } = prevState;
          dialog[dialogType] = true;
          elementDialogs.push(dialogComp)
          return {
            dialog,
            elementDialogs,
            openDialogs: _checkOpenDialogs(maxDialog, openDialogs, dialog, dialogType)
          };
        })
      } else {
        setState(prevState => {
          const {
            dialog,
            elementDialogs,
            openDialogs
          } = prevState;
          let _openDialogs;
          if (!dialog[dialogType]){
             dialog[dialogType] = true;
             _openDialogs = _checkOpenDialogs(maxDialog, openDialogs, dialog, dialogType);
          }
          return {
            dialog,
            elementDialogs: _crArrWithTopObjByKey(elementDialogs, dialogType),
            openDialogs: _openDialogs || openDialogs
          };
        })
      }
    }
  })

  return (
    <div style={S_DIV}>
      {elementDialogs.map(ElementDialog => {
         const { key } = ElementDialog;
         return cloneUiElement(ElementDialog, {
           isShow: dialog[key],
           onClose: () => _hToggleDialog(key)
         });
      })}
    </div>
  );
};

export default DialogStack
