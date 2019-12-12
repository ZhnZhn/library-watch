"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _handleLoadWithValidation = function _handleLoadWithValidation(validationMessages, fnCreateOption, onLoad) {
  if (onLoad === void 0) {
    onLoad = this.props.onLoad;
  }

  if (validationMessages.isValid) {
    onLoad(fnCreateOption());

    if (this.state.validationMessages.length !== 0) {
      this.setState({
        validationMessages: []
      });
    }
  } else {
    this.setState({
      validationMessages: validationMessages
    });
  }
};

var _handleCloseWithValidation = function _handleCloseWithValidation(fnCreateMessages, onClose) {
  if (onClose === void 0) {
    onClose = this.props.onClose;
  }

  if (this.state.validationMessages.length !== 0) {
    this.setState({
      validationMessages: fnCreateMessages()
    });
  }

  onClose();
};

var withValidationLoad = function withValidationLoad(target) {
  target.prototype._handleLoadWithValidation = _handleLoadWithValidation;
  target.prototype._handleCloseWithValidation = _handleCloseWithValidation;
};

var _default = withValidationLoad;
exports["default"] = _default;
//# sourceMappingURL=withValidationLoad.js.map