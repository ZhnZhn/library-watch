import React, { Component } from 'react';
//import PropTypes from 'prop-types'

import FragmentSelectGroupList from './FragmentSelectGroupList';
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
};

class ListEditPane extends Component {
  /*
  static propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    forActionType : PropTypes.string,
    onRename : PropTypes.func,
    onClose : PropTypes.func
  },
  */
  constructor(props){
    super(props)
    const {store} = props;
    this.state = {
      groupOptions: store.getWatchGroups(),
      listOptions: [],
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
        if (data.forActionType === forActionType){
          this._handlerClear();
        }
        this.setState({ groupOptions: store.getWatchGroups() });
    } else if (actionType === actionFailed && data.forActionType === forActionType){
      this.setState({ validationMessages: data.messages });
    }
  }

  _handlerClear = (isFullClear) => {
     this.inputText.setValue('');
     if (this.state.validationMessages.length>0){
       this.setState({ validationMessages: [] })
     }
  }

  _handlerRename = () => {
    const {captionGroup, captionList} = this.selectGroupList.getValue()
        , captionListTo = this.inputText.getValue();
    if (captionGroup && captionList && captionListTo){
      this.props.onRename({
        captionGroup: captionGroup,
        captionListFrom: captionList,
        captionListTo: captionListTo
      })
    } else {
      const {msgOnIsEmptyName, msgOnNotSelect} = this.props
          , msg = [];
      if (!captionGroup) { msg.push(msgOnNotSelect('Group')); }
      if (!captionList)  { msg.push(msgOnNotSelect('List From')); }
      if (!captionListTo){ msg.push(msgOnIsEmptyName('List To')); }
      this.setState({ validationMessages: msg })
    }
  }

  _refGroupList = c => this.selectGroupList = c
  _refInputText = c => this.inputText = c

  render(){
    const {store, onClose} = this.props
        , {groupOptions, validationMessages} = this.state;
    return (
      <div>
         <FragmentSelectGroupList
           ref={this._refGroupList}
           store={store}
           groupCaption="In Group"
           groupOptions={groupOptions}
           listCaption="List From"
         />
         <RowInputText
            ref={this._refInputText}
            caption="List To"
         />
         <ValidationMessagesFragment
           validationMessages={validationMessages}
         />
         <div style={S.COMMAND_DIV}>
            <FlatButton
               isPrimary={true}
               caption="Rename"
               timeout={0}
               onClick={this._handlerRename}
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
    );
  }
}

export default ListEditPane
