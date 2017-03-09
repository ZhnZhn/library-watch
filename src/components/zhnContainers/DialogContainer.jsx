import React, { Component, PropTypes } from 'react';

import ModalDialogContainer from './ModalDialogContainer';

class DialogContainer extends Component {
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    showAction: PropTypes.string,
    routerDialog: PropTypes.object
  }

  constructor(props){
    super();
    this.state = {
      isShow : false,
      inits : {},
      shows : {},
      data : {},
      dialogs : [],
      currentDialog : null
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType, option) => {
     const { showAction, routerDialog } = this.props;
     if (actionType === showAction){
       const { modalDialogType:type } = option
           , { inits, shows, data, dialogs } = this.state;

       data[type] = option;
       shows[type] = true;
       if (inits[type]){
         this.setState({ isShow: true, currentDialog: type, shows, data })
       } else {
         dialogs.push({ type : type, comp : routerDialog[type] });
         inits[type] = true
         this.setState({ isShow: true, currentDialog: type, shows, data, dialogs });
       }
     }
  }

  _handlerClose = (type) => {
    this.state.shows[type] = false;
    this.setState({
      isShow : false,
      currentDialog: null,
      shows : this.state.shows
    })
  }

  _renderDialogs = () => {
    const { store } = this.props
        , { shows, data } = this.state;

    return this.state.dialogs.map((dialog, index) => {
      const { type, comp } = dialog
      return React.createElement(comp, {
           key: type,
           isShow: shows[type],
           data: data[type],
           store : store,
           onClose: this._handlerClose.bind(null, type)
      });
    });
  }

  render(){
    const { isShow, currentDialog } = this.state;

    return (
      <ModalDialogContainer
          isShow={isShow}
          onClose={this._handlerClose.bind(null, currentDialog)}
      >
         {this._renderDialogs()}
     </ModalDialogContainer>
   );
  }
}

export default DialogContainer
