import {
  createElement,
  useState
} from '../uiApi';
import useListen from '../hooks/useListen';

import ModalDialogContainer from './ModalDialogContainer';

const INITIAL_STATE = {
  isShow: false,
  inits: {},
  shows: {},
  data: {},
  dialogs: [],
  currentDialog: null
};

const DialogContainer = ({
  store,
  showAction,
  routerDialog
}) => {
  const [
    state,
    setState
  ] = useState(INITIAL_STATE)
  , {
    isShow,
    shows,
    data,
    dialogs,
    currentDialog
  } = state
  , _hClose = type => {
    setState(prevState => {
      prevState.shows[type] = false
      return {
        ...prevState,
        isShow: false,
        currentDialog: null
      };
    })
  };

  useListen(store, (actionType, option) => {
    if (actionType === showAction){
      const { modalDialogType:type } = option;
      setState(prevState => {
        const {
          inits,
          shows,
          data,
          dialogs
        } = prevState;
        data[type] = option;
        shows[type] = true;
        if (!inits[type]) {
          dialogs.push({
            type: type,
            comp: routerDialog[type]
          });
          inits[type] = true
        }
        return {
          ...prevState,
          isShow: true,
          currentDialog: type
        };
      })
    }
  });

  return (
    <ModalDialogContainer
       isShow={isShow}
       onClose={() => _hClose(currentDialog)}
    >
       {dialogs.map(({ type, comp }) =>
          createElement(comp, {
             key: type,
             isShow: shows[type],
             data: data[type],
             store: store,
             onClose: () => _hClose(type)
          }
       ))}
   </ModalDialogContainer>
  );
};

export default DialogContainer
