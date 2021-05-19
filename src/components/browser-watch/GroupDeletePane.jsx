import { Component } from 'react';

//import PropTypes from 'prop-types'

import RowInputSelect from './RowInputSelect';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import FlatButton from '../zhn-m/FlatButton'

const S = {
  COMMAND_DIV : {
     cursor: 'default',
     float: 'right',
     marginTop: 8,
     marginBottom: 10,
     marginRight: 4
  }
};

class GroupDeletePane extends Component {

  /*
  statis propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    forActionType : PropTypes.string,
    msgOnNotSelect : PropTypes.func,
    onDelete : PropTypes.func,
    onClose : PropTypes.func
  }
  */
  constructor(props){
    super(props)
    const { store } = props;
    this.caption = null;
    this.state = {
      groupOptions: store.getWatchGroups(),
      validationMessages: []
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props
      .store.listen(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  _onStore = (actionType, data) => {
    const {actionCompleted, forActionType, store} = this.props;
    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType){
        this._handlerClear();
      }
      this.setState({ groupOptions: store.getWatchGroups() })
    }
  }

  _handlerSelectGroup = (item) => {
     if (item && item.caption){
       this.caption = item.caption;
     } else {
       this.caption = null;
     }
  }

  _handlerClear = () => {
    if (this.state.validationMessages.length>0){
      this.setState({ validationMessages: [] })
    }
  }

  _handlerDeleteGroup = () => {
     if (this.caption){
       this.props.onDelete({caption: this.caption})
     } else {
       this.setState({ validationMessages: [this.props.msgOnNotSelect('Group')] });
     }
  }

  render(){
      const {onClose} = this.props
          , {groupOptions, validationMessages} = this.state;

      return (
         <div>
           <RowInputSelect
             caption="Group"
             options={groupOptions}
             //isUpdateOptions={true}
             onSelect={this._handlerSelectGroup}
           />
           <ValidationMessages
             validationMessages={validationMessages}
           />
           <div style={S.COMMAND_DIV}>
             <FlatButton
               isPrimary={true}
               caption="Delete"
               timeout={0}
               onClick={this._handlerDeleteGroup}
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

export default GroupDeletePane
