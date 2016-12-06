"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WithValidation = {
  _handlerLoadWithValidation: function _handlerLoadWithValidation(validationMessages, fnCreateOption) {
    var onLoad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.onLoad;

    if (validationMessages.isValid) {
      onLoad(fnCreateOption());
      if (this.state.validationMessages.length !== 0) {
        this.setState({ validationMessages: [] });
      }
    } else {
      this.setState({ validationMessages: validationMessages });
    }
  },
  _handlerCloseWithValidation: function _handlerCloseWithValidation(fnCreateMessages) {
    var onClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.onClose;

    if (this.state.validationMessages.length !== 0) {
      this.setState({ validationMessages: fnCreateMessages() });
    }
    onClose();
  }
};

exports.default = WithValidation;
//# sourceMappingURL=WithValidation.js.map