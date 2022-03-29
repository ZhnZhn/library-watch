import {
  memo,
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
  getRefValue,
  setRefValue
} from '../uiApi';
import useRefItemCaption from './useRefItemCaption';
import useValidationMessages from './useValidationMessages';
import usePrevValue from '../hooks/usePrevValue';
import useListen from '../hooks/useListen';

import WatchActions from '../../flux/actions/WatchActions';
import { WatchActionTypes as WAT } from '../../flux/actions/WatchActions';
import Msg from '../../constants/Msg';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import FlatButton from '../zhn-m/FlatButton';
import InputSelect from '../zhn-select/InputSelect';
import ValidationMessages from '../dialogs/rows/ValidationMessages';

import styles from '../styles/DialogStyles';

const actionCompleted = WAT.EDIT_WATCH_COMPLETED
, actionFailed =  WAT.EDIT_WATCH_FAILED
, forActionType = WAT.ADD_ITEM

, S_BOLD = { fontWeight: 'bold' }
, S_LH = { lineHeight: 2 }
, S_DESCR = {
  fontWeight: 'bold',
  color: 'gray'
};

const _isNotShouldRerender = (prevProps, nextProps) =>
  prevProps.isShow === nextProps.isShow

const AddToWatchDialog = memo((props) => {
  const _prevProps = usePrevValue(props)
  , {
    isShow,
    store,
    data,
    onClose
  } = props
  , _refGroupCaption = useRef()
  , [
    _refListCaption,
    _handlerSelectList
  ] = useRefItemCaption()
  , [state, setState] = useState(() => ({
    groupOptions: store.getWatchGroups(),
    listOptions: []
  }))
  , {
    groupOptions,
    listOptions
  } = state
  , [
    validationMessages,
    setValidationMessages,
    _clearValidationMessages
  ] = useValidationMessages()
  , _hSelectGroup = useCallback(group => {
    const {
      caption,
      lists
    } = group || {}
    , _caption = caption
       ? (setState(prevState => ({
           ...prevState,
           listOptions: lists || []
         })), caption)
       : null;
    setRefValue(_refGroupCaption, _caption)
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClose = useCallback(() => {
     _clearValidationMessages()
     onClose()
  }, [])
  // _clearValidationMessages, onClose
  , _hAdd = useCallback(() => {
     const groupCaption = getRefValue(_refGroupCaption)
     , listCaption = getRefValue(_refListCaption)
     , _validationMessages = [];
     if (!groupCaption){
       _validationMessages.push(Msg.NOT_SELECTED('Group'));
     }
     if (!listCaption) {
       _validationMessages.push(Msg.NOT_SELECTED('List'));
     }
     if (_validationMessages.length === 0){
       const { caption, config } = data;
       WatchActions.addItem({
         caption,
         groupCaption,
         listCaption,
         config
       });
     } else {
       setValidationMessages(_validationMessages)
     }
  }, [data])
  // _refListCaption, setValidationMessages
  /*eslint-enable react-hooks/exhaustive-deps */
  , _commandButtons = useMemo(() => [
    <FlatButton
      key="add"
      caption="Add"
      title="Click to add to watch list"
      timeout={0}
      onClick={_hAdd}
    />
  ], [_hAdd]);

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted && data.forActionType === forActionType){
       _hClose()
    } else if (actionType === actionFailed && data.forActionType === forActionType){
       setValidationMessages(data.messages)
    }
  })

  //UNSAFE_componentWillReceiveProps(nextProps)
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (_prevProps && _prevProps !== props && _prevProps.isShow !== isShow) {
      const _groupCaption = getRefValue(_refGroupCaption)
      , _groupOptions = store.getWatchGroups();
      if (_groupOptions !== groupOptions){
        setRefValue(_refGroupCaption, null)
        setRefValue(_refListCaption, null)
        setState({
          groupOptions: _groupOptions,
          listOptions: []
        })
      } else if (_groupCaption){
        const _listOptions = store.getWatchListsByGroup(this.groupCaption);
        if (_listOptions !== listOptions){
          setRefValue(_refListCaption, null)
          setState(prevState => ({
            ...prevState,
            listOptions: _listOptions
          }))
        }
      }
    }
  })
  /*eslint-enable react-hooks/exhaustive-deps */

  const {
    caption,
    config
  } = data
  , { descr } = config || {};

  return (
    <ModalDialog
       caption="Add To Watch List"
       isShow={isShow}
       commandButtons={_commandButtons}
       onClose={_hClose}
    >
      <div style={styles.rowDiv}>
        <span style={styles.labelSpan}>
          Group:
        </span>
        <InputSelect
           width="250"
           options={groupOptions}
           onSelect={_hSelectGroup}
         />
      </div>
      <div style={styles.rowDiv}>
        <span style={styles.labelSpan}>
          List:
        </span>
        <InputSelect
           width="250"
           options={listOptions}
           onSelect={_handlerSelectList}
         />
      </div>
      <div style={{...styles.rowDiv, ...S_LH}}>
        <span style={styles.labelSpan}>
          Item:
        </span>
        <span style={S_BOLD}>
           {caption}
        </span>
      </div>
      <div style={{...styles.rowDiv, ...S_LH}}>
        <span style={styles.labelSpan}>
           Descr:
        </span>
        <span style={S_DESCR}>
           {descr}
        </span>
      </div>
      <ValidationMessages
         validationMessages={validationMessages}
       />
    </ModalDialog>
  );
}, _isNotShouldRerender);

export default AddToWatchDialog
