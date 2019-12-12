"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var WithValidation = {
  _handlerLoadWithValidation: function _handlerLoadWithValidation(validationMessages, fnCreateOption, onLoad) {
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
  },
  _handlerCloseWithValidation: function _handlerCloseWithValidation(fnCreateMessages, onClose) {
    if (onClose === void 0) {
      onClose = this.props.onClose;
    }

    if (this.state.validationMessages.length !== 0) {
      this.setState({
        validationMessages: fnCreateMessages()
      });
    }

    onClose();
  }
};
var _default = WithValidation;
exports["default"] = _default;
//# sourceMappingURL=WithValidation.js.map