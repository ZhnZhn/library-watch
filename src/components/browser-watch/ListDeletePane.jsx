import { Component } from 'react';
//import PropTypes from 'prop-types'

import SelectGroupList from './SelectGroupList';
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

class ListDeletePane extends Component {
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
    const {actionCompleted, forActionType, store} = this.props;
    if (actionType === actionCompleted){
        if (data.forActionType === forActionType) {
          this._handlerClear();
        }
        this.setState({
          groupOptions: store.getWatchGroups()
        });
    }
  }

  _handlerClear = () => {
    if (this.state.validationMessages.length>0){
      this.setState({validationMessages: []})
    }
  }

  _handlerDelete = () => {
      const {captionGroup, captionList} = this.selectGroupList.getValue();
      if (captionGroup && captionList){
        this.props.onDelete({captionGroup, captionList});
      } else {
        const {msgOnNotSelect} = this.props
            , msg = [];
        if (!captionGroup) {msg.push(msgOnNotSelect('Group'));}
        if (!captionList)  {msg.push(msgOnNotSelect('List')); }
        this.setState({validationMessages: msg});
      }
  }

  _refGroupList = c => this.selectGroupList = c

  render(){
    const {store, onClose} = this.props
        , {groupOptions, validationMessages} = this.state;
    return (
      <div>
         <SelectGroupList
           ref={this._refGroupList}
           store={store}
           groupCaption="In Group"
           groupOptions={groupOptions}
           listCaption="List"
         />
         <ValidationMessages
            validationMessages={validationMessages}
         />
         <div style={S.COMMAND_DIV}>
            <FlatButton
               isPrimary={true}
               caption="Delete"
               timeout={0}
               onClick={this._handlerDelete}
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

export default ListDeletePane
