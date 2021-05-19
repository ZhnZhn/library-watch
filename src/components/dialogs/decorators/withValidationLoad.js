
const _handleLoadWithValidation = function(
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
}

const _handleCloseWithValidation = function(fnCreateMessages, onClose = this.props.onClose){
    if (this.state.validationMessages.length !== 0){
      this.setState({ validationMessages : fnCreateMessages() });
    }
    onClose();
}

const _updateValidationMessages = function(validationMessages){
  if (validationMessages.isValid){
    if (this.state.validationMessages.length > 0){
      this.setState({ validationMessages })
    }
  } else {
    this.setState({ validationMessages })
  }
};

const withValidationLoad = (target) => {
  Object.assign(target.prototype, {
    _handleLoadWithValidation,
    _handleCloseWithValidation,
    _updateValidationMessages
  })
}

export default withValidationLoad
