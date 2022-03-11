import {
  cloneElement,
  useState
} from '../uiApi';
import useListen from '../hooks/useListen';

const S_DIV = {
  zIndex: 30,
  position: 'absolute',
  top: 70,
  left: 10,
  width: '99%'
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
  compDialogs: [],
  openDialogs: []
};

const DialogStack = ({
  store,
  initAction,
  showAction,
  maxDialog
}) => {
  const [
    state,
    setState
  ] = useState(INITIAL_STATE)
  , {
    dialog,
    compDialogs
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

  useListen(store, (actionType, data) => {
    if (actionType === showAction){
       setState(prevState => {
         const {
           dialog,
           compDialogs,
           openDialogs
         } = prevState;
         let _openDialogs
         if (!dialog[data]){
            dialog[data] = true;
            _openDialogs = _checkOpenDialogs(maxDialog, openDialogs, dialog, data);
         }
         return {
           dialog,
           compDialogs: _crArrWithTopObjByKey(compDialogs, data),
           openDialogs: _openDialogs || openDialogs
         };
       })
    } else if (actionType === initAction) {
       setState(prevState => {
         const {
           dialogType,
           dialogComp
         } = data
         , {
           dialog,
           compDialogs,
           openDialogs
         } = prevState;
         dialog[dialogType] = true;
         compDialogs.push(dialogComp)
         return {
           dialog,
           compDialogs,
           openDialogs: _checkOpenDialogs(maxDialog, openDialogs, dialog, dialogType)
         };
       })
     }
  })

  return (
    <div style={S_DIV}>
      {compDialogs.map(compDialog => {
         const { key } = compDialog;
         return cloneElement(compDialog, {
            key,
            isShow: dialog[key],
            onClose: () => _hToggleDialog(key)
         });
      })}
    </div>
  );
};

export default DialogStack
