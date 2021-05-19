import { Component } from 'react';
//import PropTypes from 'prop-types'

import RowInputSelect from './RowInputSelect';
import RowInputText from './RowInputText';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import FlatButton from '../zhn-m/FlatButton';

const S = {
  COMMAND_DIV : {
     cursor: 'default',
     float: 'right',
     marginTop: 8,
     marginBottom: 10,
     marginRight: 4
  }
};

class GroupEditPane extends Component {
  /*
  statis propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    actionFailed : PropTypes.string,
    forActionType : PropTypes.string,
    msgOnIsEmptyName : PropTypes.func,
    msgOnNotSelect : PropTypes.func,
    onRename : PropTypes.func,
    onClose : PropTypes.func
  },
  */
  constructor(props){
    super(props)
    const { store } = props;
    this.captionFrom = null;
    this.state = {
      groupOptions: store.getWatchGroups(),
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
      this.setState({groupOptions : store.getWatchGroups()});
    } else if (actionType === actionFailed && data.forActionType === forActionType){
      this.setState({validationMessages: data.messages});
    }
  }

  _handlerSelectGroup = (item) => {
     if (item && item.caption){
       this.captionFrom = item.caption;
     } else {
       this.captionFrom = null;
     }
  }

  _handlerClear = () => {
    this.inputText.setValue('');
    if (this.state.validationMessages.length>0){
      this.setState({validationMessages:[]});
    }
  }
  _handlerRename = () => {
     const captionTo = this.inputText.getValue();
     if (captionTo && this.captionFrom) {
       this.props.onRename({captionFrom: this.captionFrom, captionTo});
     } else {
       const msg = [];
       if (!this.captionFrom){
         msg.push(this.props.msgOnNotSelect('Group From'));
       }
       if (!captionTo){
         msg.push(this.props.msgOnIsEmptyName('Group To'));
       }
       this.setState({validationMessages: msg});
     }
  }

  _refInputText = c => this.inputText = c

  render(){
    const { onClose } = this.props
        , { groupOptions, validationMessages} = this.state;

    return (
       <div>
          <RowInputSelect
             caption="Group From"
             options={groupOptions}
             onSelect={this._handlerSelectGroup}
          />
         <RowInputText
           ref={this._refInputText}
           caption="Group To"
         />
         <ValidationMessages
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

export default GroupEditPane
