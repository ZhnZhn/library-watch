import React, { Component } from 'react';
//import PropTypes from 'prop-types'

import RowInputText from './RowInputText';
import FlatButton from '../zhn-m/FlatButton'
import ValidationMessagesFragment from '../zhnMoleculs/ValidationMessagesFragment';

const S = {
  COMMAND_DIV : {
     cursor: 'default',
     float: 'right',
     marginTop: '8px',
     marginBottom: '10px',
     marginRight: '4px'
  }
};

class GroupAddPane extends Component {
  /*
  static propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    actionFailed : PropTypes.string,
    forActionType : PropTypes.string,
    msgOnIsEmptyName : PropTypes.func,
    onCreate : PropTypes.func,
    onClose : PropTypes.func
  },
  */
  state = {
    validationMessages: []
  }


  componentDidMount(){
    this.unsubscribe = this.props
      .store.listen(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  _onStore = (actionType, data) => {
    const {actionCompleted, actionFailed, forActionType} = this.props;
    if (actionType === actionCompleted && data.forActionType === forActionType){
       this._handlerClear();
    } else if (actionType === actionFailed && data.forActionType === forActionType){
       this.setState({validationMessages: data.messages});
    }
  }

  _handlerClear = () => {
    this.inputText.setValue('');
    if (this.state.validationMessages.length>0){
       this.setState({validationMessages: []});
    }
  }

  _handlerCreate = () => {
     const caption = this.inputText.getValue();
     if (caption){
       this.props.onCreate({caption});
     } else {
       this.inputText.setValue('');
       this.setState({validationMessages:[this.props.msgOnIsEmptyName('Group')]});
     }
  }

  _refInputText = c => this.inputText = c

  render(){
    const {onClose} = this.props
        , {validationMessages} = this.state;
    return (
      <div>
        <RowInputText
           ref={this._refInputText}
           caption="Group"
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

export default GroupAddPane
