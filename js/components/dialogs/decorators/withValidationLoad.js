"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleLoadWithValidation = function _handleLoadWithValidation(validationMessages, fnCreateOption) {
  var onLoad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.onLoad;

  if (validationMessages.isValid) {
    onLoad(fnCreateOption());
    if (this.state.validationMessages.length !== 0) {
      this.setState({ validationMessages: [] });
    }
  } else {
    this.setState({ validationMessages: validationMessages });
  }
};

var _handleCloseWithValidation = function _handleCloseWithValidation(fnCreateMessages) {
  var onClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.onClose;

  if (this.state.validationMessages.length !== 0) {
    this.setState({ validationMessages: fnCreateMessages() });
  }
  onClose();
};

var withValidationLoad = function withValidationLoad(target) {
  target.prototype._handleLoadWithValidation = _handleLoadWithValidation;
  target.prototype._handleCloseWithValidation = _handleCloseWithValidation;
};

exports.default = withValidationLoad;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\decorators\withValidationLoad.js.map