import React, { Component } from 'react';
//import PropTypes from 'prop-types'

import RowInputSelect from './RowInputSelect';
import RowInputText from './RowInputText';
import ValidationMessagesFragment from '../zhnMoleculs/ValidationMessagesFragment';
import FlatButton from '../zhn-m/FlatButton'

const S = {
  COMMAND_DIV : {
     cursor: 'default',
     float: 'right',
     marginTop: '8px',
     marginBottom: '10px',
     marginRight: '4px'
  }
}

class ListCreatePane extends Component {
  /*
  statis propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    actionFailed : PropTypes.string,
    forActionType : PropTypes.string,
    msgOnNotSelect : PropTypes.func,
    msgOnIsEmptyName : PropTypes.func,
    onCreate : PropTypes.func,
    onClose : PropTypes.func
  },
  */
  constructor(props){
    super(props)
    const { store } = props;
    this.captionGroup = null;
    this.state = {
      groupOptions: store.getWatchGroups(),
      isUpdateGroup: false,
      validationMessages: []
    }
  }


  componentDidMount(){
    this.unsubscribe = this.props
      .store.listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType, data) => {
    const {actionCompleted, actionFailed, forActionType, store} = this.props;
    if (actionType === actionCompleted){
        let isUpdateGroup = true;
        if (data.forActionType === forActionType){
          this._handlerClear();
          isUpdateGroup = false;
        }
        this.setState({groupOptions : store.getWatchGroups(), isUpdateGroup});
    } else if (actionType === actionFailed && data.forActionType === forActionType){
      this.setState({validationMessages: data.messages, isUpdateGroup:false})
    }
  }

  _handlerSelectGroup = (item) => {
    if (item && item.caption){
      this.captionGroup = item.caption;
    } else {
      this.captionGroup = null;
    }
  }

  _handlerClear = () => {
     this.inputText.setValue('');
     if (this.state.validationMessages.length>0){
       this.setState({
         validationMessages: [],
         isUpdateGroup: false
       });
     }
  }

  _handlerCreate = () => {
     const captionList = this.inputText.getValue();
     if (this.captionGroup && captionList){
       this.props.onCreate({
          captionGroup: this.captionGroup,
          captionList: captionList
       });
     } else {
       const {msgOnNotSelect, msgOnIsEmptyName} = this.props
           , msg = [];
       if (!this.captionGroup) { msg.push(msgOnNotSelect('In Group')); }
       if (!captionList)       { msg.push(msgOnIsEmptyName('List')); }
       this.setState({
         validationMessages: msg,
         isUpdateGroup: false
       });
     }
  }

  _refInputText = c => this.inputText = c

  render(){
    const {onClose} = this.props
        , {groupOptions, validationMessages} = this.state;
    return (
      <div>
        <RowInputSelect
           caption="In Group"
           options={groupOptions}
           //isUpdateOptions={isUpdateGroup}
           onSelect={this._handlerSelectGroup}
        />
        <RowInputText
           ref={this._refInputText}
           caption="List"
        />
        <ValidationMessagesFragment
          validationMessages={validationMessages}
        />
        <div style={S.COMMAND_DIV}>
         <FlatButton
            isPrimary={true}
            caption="Create"
            timeout={0}
            onClick={this._handlerCreate}
         />
         <FlatButton
            caption="Clear"
            timeout={0}
            onClick={this._handlerClear}
         />
         <FlatButton
            caption="Close"
            timeout={0}
            onClick={onClose}
         />
       </div>
      </div>
    )
  }

}

export default ListCreatePane
