import { Component } from 'react';
//import PropTypes from 'prop-types'

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

class AddToWatchDialog extends Component {
  /*
  propTypes : {
    isShow  : PropTypes.bool.isRequired,
    data    : PropTypes.object.isRequired,
    store   : PropTypes.object,
    onClose : PropTypes.func.isRequired
  },
  */
  constructor(props){
    super(props)
    const { store } = props;

    this.groupCaption = null;
    this.listCaption = null;
    this._commandButtons = [
      <FlatButton
        key="add"
        caption="Add"
        title="Click to add to watch list"
        timeout={0}
        onClick={this._handlerAdd}
      />
   ];

   this.state = {
      groupOptions: store.getWatchGroups(),
      listOptions: [],
      validationMessages: []
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore);
  }
  componetWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType, data) => {
    if (actionType === actionCompleted && data.forActionType === forActionType){
       if (this.state.validationMessages.length>0){
         this.setState({ validationMessages:[] });
       }
       this.props.onClose();
    } else if (actionType === actionFailed && data.forActionType === forActionType){
       this.setState({ validationMessages:data.messages });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps !== this.props && nextProps.isShow !== this.props.isShow) {
      const groupOptions = nextProps.store.getWatchGroups();
      if (groupOptions !== this.state.groupOptions){
        this.groupCaption = null;
        this.listCaption = null;
        this.setState({
          groupOptions,
          listOptions: []
        });
      } else if (this.groupCaption){
        const listOptions = nextProps.store.getWatchListsByGroup(this.groupCaption);
        if (listOptions !== this.state.listOptions){
          this.listCaption = null;
          this.setState({ listOptions })
        }
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  _handlerSelectGroup = (group) => {
    if (group && group.caption){
       this.groupCaption = group.caption;
       this.setState({
         listOptions: group.lists || []
       })
    } else {
      this.groupCaption = null;
    }
  }

  _handlerSelectList = (list) => {
    this.listCaption = list && list.caption
      || null
  }

  _handlerAdd = () => {
    const {
      groupCaption,
      listCaption
    } = this
    , validationMessages = [];
    if (!groupCaption){
      validationMessages.push(Msg.NOT_SELECTED('Group'));
    }
    if (!listCaption) {
      validationMessages.push(Msg.NOT_SELECTED('List'));
    }
    if (validationMessages.length === 0){
      //onClose
      const { data } = this.props
      , { caption, config } = data;

      WatchActions.addItem({
        caption,
        groupCaption,
        listCaption,
        config
      });
    } else {
      this.setState({ validationMessages });
    }
  }

  _handlerClose = () => {
    if (this.state.validationMessages.length>0){
      this.setState({validationMessages: []});
    }
    this.props.onClose();
  }

  render(){
    const { isShow, data } = this.props
    , { caption, config } = data
    , { descr } = config || {}
    , { groupOptions, listOptions, validationMessages } = this.state;

    return (
      <ModalDialog
         caption="Add To Watch List"
         isShow={isShow}
         commandButtons={this._commandButtons}
         onClose={this._handlerClose}
      >
        <div style={styles.rowDiv}>
          <span style={styles.labelSpan}>
            Group:
          </span>
          <InputSelect
             width="250"
             options={groupOptions}
             onSelect={this._handlerSelectGroup}
           />
        </div>
        <div style={styles.rowDiv}>
          <span style={styles.labelSpan}>
            List:
          </span>
          <InputSelect
             width="250"
             options={listOptions}
             onSelect={this._handlerSelectList}
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
  }
}

export default AddToWatchDialog
