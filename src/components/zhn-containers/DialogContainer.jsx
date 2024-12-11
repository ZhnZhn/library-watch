import { useState } from '../uiApi';

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
  useMdOption,
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

  useMdOption(mdOption => {
    if (mdOption) {
      const { modalDialogType:type } = mdOption;
      setState(prevState => {
        const {
          inits,
          shows,
          data,
          dialogs
        } = prevState;
        data[type] = mdOption;
        shows[type] = true;
        if (!inits[type]) {
          dialogs.push({
            type: type,
            Comp: routerDialog[type]
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
  })

  return (
    <ModalDialogContainer
       isShow={isShow}
       onClose={() => _hClose(currentDialog)}
    >
       {dialogs.map(({
          type,
          Comp
       }) => (<Comp
          key={type}
          isShow={shows[type]}
          data={data[type]}
          onClose={() => _hClose(type)}
       />))}
   </ModalDialogContainer>
  );
};

export default DialogContainer
