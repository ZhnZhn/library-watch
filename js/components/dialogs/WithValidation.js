"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WithValidation = {
  _handlerLoadWithValidation: function _handlerLoadWithValidation(validationMessages, fnCreateOption) {
    var onLoad = arguments.length <= 2 || arguments[2] === undefined ? this.props.onLoad : arguments[2];

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
    var onClose = arguments.length <= 1 || arguments[1] === undefined ? this.props.onClose : arguments[1];

    if (this.state.validationMessages.length !== 0) {
      this.setState({ validationMessages: fnCreateMessages() });
    }
    onClose();
  }
};

exports.default = WithValidation;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\WithValidation.js.map