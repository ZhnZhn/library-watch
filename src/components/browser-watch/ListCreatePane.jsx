import React from 'react';
import createReactClass from 'create-react-class'

//import PropTypes from 'prop-types'

import RowInputSelect from './RowInputSelect';
import RowInputText from './RowInputText';
import ValidationMessagesFragment from '../zhnMoleculs/ValidationMessagesFragment';
import ToolBarButton from '../header/ToolBarButton';

const Styles = {
  COMMAND_DIV : {
     cursor: 'default',
     float: 'right',
     marginTop: '8px',
     marginBottom: '10px',
     marginRight: '4px'
  }
}

const ListCreatePane = createReactClass({
  displayName : 'ListCreatePane',
  /*
  propTypes : {
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

  getInitialState(){
    const {store} = this.props;
    this.captionGroup = null;
    return {
      groupOptions : store.getWatchGroups(),
      isUpdateGroup : false,
      validationMessages : []
    }
  },

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore)
  },
  componentWillUnmount(){
    this.unsubscribe()
  },
  _onStore(actionType, data){
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
  },

  _handlerSelectGroup(item){
    if (item && item.caption){
      this.captionGroup = item.caption;
    } else {
      this.captionGroup = null;
    }
  },

  _handlerClear(){
     this.inputText.setValue('');
     if (this.state.validationMessages.length>0){
       this.setState({validationMessages: [], isUpdateGroup:false});
     }
  },

  _handlerCreate(){
     const captionList = this.inputText.getValue();
     if (this.captionGroup && captionList){
       this.props.onCreate({
          captionGroup : this.captionGroup,
          captionList : captionList
       });
     } else {
       const {msgOnNotSelect, msgOnIsEmptyName} = this.props
           , msg = [];
       if (!this.captionGroup) { msg.push(msgOnNotSelect('In Group')); }
       if (!captionList)       { msg.push(msgOnIsEmptyName('List')); }
       this.setState({validationMessages:msg, isUpdateGroup:false});
     }
  },

  render(){
    const {onClose} = this.props
          //isUpdateGroup
        , {groupOptions, validationMessages} = this.state;
    return (
      <div>
        <RowInputSelect
           caption={'In Group:'}
           options={groupOptions}
           //isUpdateOptions={isUpdateGroup}
           onSelect={this._handlerSelectGroup}
        />
        <RowInputText
           ref={c => this.inputText = c}
           caption={'List:'}
        />
        <ValidationMessagesFragment
          validationMessages={validationMessages}
        />
        <div style={Styles.COMMAND_DIV}>
         <ToolBarButton
            type="TypeC"
            caption="Create"
            onClick={this._handlerCreate}
         />
         <ToolBarButton
            type="TypeC"
            caption="Clear"
            onClick={this._handlerClear}
         />
         <ToolBarButton
            type="TypeC"
            caption="Close"
            onClick={onClose}
         />
       </div>
      </div>
    )
  }

});

export default ListCreatePane
