import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import withValidationLoad from '../dialogs/decorators/withValidationLoad'

import WatchActions from '../../flux/actions/WatchActions'
import { WatchActionTypes as WAT } from '../../flux/actions/WatchActions'
import Msg from '../../constants/Msg'

import ModalDialog from '../zhn-moleculs/ModalDialog';
import FlatButton from '../zhn-m/FlatButton'
import InputSelect from '../zhn-select/InputSelect'
import ValidationMessagesFragment from '../zhn-moleculs/ValidationMessagesFragment';

import DialogStyles from '../styles/DialogStyles'

const styles = DialogStyles;

const actionCompleted = WAT.EDIT_WATCH_COMPLETED
    , actionFailed =  WAT.EDIT_WATCH_FAILED
    , forActionType = WAT.ADD_ITEM

const S = {
  BOLD: {
    fontWeight: 'bold'
  },
  LH: {
    lineHeight: 2
  },
  DESCR: {
    fontWeight: 'bold',
    color: 'gray'
  }
};

@withValidationLoad
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
      const groups = nextProps.store.getWatchGroups();
      if (groups !== this.state.groupOptions){
        this.groupCaption = null;
        this.listCaption = null;
        this.setState({groupOptions:groups, listOptions:[]});
      } else if (this.groupCaption){
        const lists = nextProps.store.getWatchListsByGroup(this.groupCaption);
        if (lists !== this.state.listOptions){
          this.listCaption = null;
          this.setState({listOptions:lists})
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
       if (group.lists){
         this.setState({listOptions : group.lists})
       }  else {
         this.setState({listOptions : []})
       }
    } else {
      this.groupCaption = null;
    }
  }
  _handlerSelectList = (list) => {
      if (list && list.caption){
        this.listCaption = list.caption;
      } else {
        this.listCaption = null;
      }
  }
  _handlerAdd = () => {
    const validationMessages = this._crValidationMessages();
    if (validationMessages.isValid){
      //onClose
      const { data } = this.props
          , { caption, config } = data
          , { groupCaption, listCaption } = this;

      WatchActions.addItem({ caption, groupCaption, listCaption, config });
    } else {
      this._updateValidationMessages(validationMessages);
    }
  }
  _crValidationMessages = () => {
    const msg = [];
    if (!this.groupCaption){ msg.push(Msg.NOT_SELECTED('Group'));}
    if (!this.listCaption) { msg.push(Msg.NOT_SELECTED('List'));}
    msg.isValid = (msg.length === 0) ? true : false;
    return msg;
  }

  _handlerClose = () => {
    if (this.state.validationMessages.length>0){
      this.setState({validationMessages: []});
    }
    this.props.onClose();
  }

  render(){
    const { isShow, data } = this.props
        , { caption, config={} } = data
        , { descr } = config
        , { groupOptions, listOptions, validationMessages } = this.state;

    return (
      <ModalDialog
         caption="Add To Watch List"
         isShow={isShow}
         commandButtons={this._commandButtons}
         onClose={this._handlerClose}
      >
        <div style={styles.rowDiv} key="1">
          <span style={styles.labelSpan}>
            Group:
          </span>
          <InputSelect
             width="250"
             options={groupOptions}
             onSelect={this._handlerSelectGroup}
           />
        </div>
        <div style={styles.rowDiv} key="2">
          <span style={styles.labelSpan}>
            List:
          </span>
          <InputSelect
             width="250"
             options={listOptions}
             onSelect={this._handlerSelectList}
           />
        </div>
        <div style={{...styles.rowDiv, ...S.LH}} key="3">
          <span style={styles.labelSpan}>
            Item:
          </span>
          <span style={S.BOLD}>
             {caption}
          </span>
        </div>
        <div style={{...styles.rowDiv, ...S.LH}} key="4">
          <span style={styles.labelSpan}>
             Descr:
          </span>
          <span style={S.DESCR}>
             {descr}
          </span>
        </div>
        <ValidationMessagesFragment
           key="5"
           validationMessages={validationMessages}
         />
      </ModalDialog>
    );
  }
}

export default AddToWatchDialog
