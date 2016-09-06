"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WithValidation = {
  _handlerWithValidationLoad: function _handlerWithValidationLoad(validationMessages, fnCreateOption) {
    var onLoad = arguments.length <= 2 || arguments[2] === undefined ? this.props.onLoad : arguments[2];

    if (validationMessages.isValid) {
      onLoad(fnCreateOption());
    }
    this._updateValidationMessages(validationMessages);
  },
  _handlerWithValidationClose: function _handlerWithValidationClose(fnCreateMessages) {
    if (this.state.validationMessages.length > 0) {
      this.setState({ validationMessages: fnCreateMessages() });
    }
  },
  _updateValidationMessages: function _updateValidationMessages(validationMessages) {
    if (validationMessages.isValid) {
      if (this.state.validationMessages.length > 0) {
        this.setState({ validationMessages: validationMessages });
      }
    } else {
      this.setState({ validationMessages: validationMessages });
    }
  },
  _handlerClose: function _handlerClose() {
    if (this.state.validationMessages.length > 0) {
      this.setState({ validationMessages: this._getValidationMessages() });
    }
    this.props.onClose();
  }
};

exports.default = WithValidation;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\dialogs\WithValidation.js.map