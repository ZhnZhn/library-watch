
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

const withValidationLoad = (target) => {
  target.prototype._handleLoadWithValidation = _handleLoadWithValidation
  target.prototype._handleCloseWithValidation = _handleCloseWithValidation
}

export default withValidationLoad
