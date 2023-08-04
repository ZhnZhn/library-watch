import {
  useState,
  useMemo,
  useCallback,
  useEffect,
  getRefValue,
  setRefValue
} from '../uiApi';

import memoIsShow from '../dialogs/memoIsShow';
import useValidationMessages from '../hooks/useValidationMessages';
import usePrevValue from '../hooks/usePrevValue';
import useProperty from '../hooks/useProperty';

import useRefItemCaption from './useRefItemCaption';

import {
  WAT_ADD_ITEM
} from '../../flux/actions/WatchActions';
import {
  addWatchItem,
  useMsEdit,
  getWatchGroups,
  getWatchListsByGroup
} from '../../flux/watch-list/watchListStore';

import {
  MSG_NOT_SELECTED
} from '../../constants/Msg';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import RowText from './RowText';
import FlatButton from '../zhn-m/FlatButton';
import RowInputSelect from '../dialogs/rows/RowInputSelect';
import ValidationMessages from '../dialogs/rows/ValidationMessages';

const S_BOLD = { fontWeight: 'bold' }
, S_LH = { lineHeight: 2 }
, S_DESCR = {
  fontWeight: 'bold',
  color: 'gray'
};

const AddToWatchDialog = memoIsShow((props) => {
  const _prevProps = usePrevValue(props)
  , {
    isShow,
    data,
    onClose
  } = props
  , [
    setGroupCaption,
    getGroupCaption
  ] = useProperty(null)
  , [
    _refListCaption,
    _handlerSelectList
  ] = useRefItemCaption()
  , [
    state,
    setState
  ] = useState(() => ({
    groupOptions: getWatchGroups(),
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
    setGroupCaption(_caption)
  }, [setGroupCaption])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClose = useCallback(() => {
     _clearValidationMessages()
     onClose()
  }, [])
  // _clearValidationMessages, onClose
  , _hAdd = useCallback(() => {
     const groupCaption = getGroupCaption()
     , listCaption = getRefValue(_refListCaption)
     , _validationMessages = [];
     if (!groupCaption){
       _validationMessages.push(MSG_NOT_SELECTED('Group'));
     }
     if (!listCaption) {
       _validationMessages.push(MSG_NOT_SELECTED('List'));
     }
     if (_validationMessages.length === 0){
       const { caption, config } = data;
       addWatchItem({
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

  useMsEdit(msEdit => {
    if (msEdit && msEdit.forActionType === WAT_ADD_ITEM) {
      if (msEdit.message) {
        setValidationMessages(msEdit.messages)
      } else {
        _hClose()
      }
    }
  })  

  //UNSAFE_componentWillReceiveProps(nextProps)
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (_prevProps && _prevProps !== props && _prevProps.isShow !== isShow) {
      const _groupCaption = getGroupCaption()
      , _groupOptions = getWatchGroups();
      if (_groupOptions !== groupOptions){
        setGroupCaption(null)
        setRefValue(_refListCaption, null)
        setState({
          groupOptions: _groupOptions,
          listOptions: []
        })
      } else if (_groupCaption){
        const _listOptions = getWatchListsByGroup(_groupCaption);
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
      <RowInputSelect
        caption="Group"
        options={groupOptions}
        onSelect={_hSelectGroup}
      />
      <RowInputSelect
        caption="List"
        options={listOptions}
        onSelect={_handlerSelectList}
      />
      <RowText
        style={S_LH}
        caption="Item"
        textStyle={S_BOLD}
        text={caption}
      />
      <RowText
        style={S_LH}
        caption="Descr"
        textStyle={S_DESCR}
        text={descr}
      />
      <ValidationMessages
         validationMessages={validationMessages}
       />
    </ModalDialog>
  );
});

export default AddToWatchDialog
