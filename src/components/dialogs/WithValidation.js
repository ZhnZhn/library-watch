const WithValidation = {

  _handlerLoadWithValidation(
      validationMessages, fnCreateOption, onLoad = this.props.onLoad
  ){
    if (validationMessages.isValid){
      onLoad(fnCreateOption());
      if (this.state.validationMessages.length !== 0){
        this.setState({ validationMessages : [] });
      }
    } else {
      this.setState({ validationMessages });
    }
  },

  _handlerCloseWithValidation(fnCreateMessages, onClose = this.props.onClose){
      if (this.state.validationMessages.length !== 0){
        this.setState({ validationMessages : fnCreateMessages() });
      }
      onClose();
  }

};

export default WithValidation
