"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _InputFileReader = _interopRequireDefault(require("../zhn-atoms/InputFileReader"));

var _ValidationMessagesFragment = _interopRequireDefault(require("../zhn-moleculs/ValidationMessagesFragment"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var styles = _DialogStyles["default"];
var C = {
  FILE_NOT_CHOOSED: 'Choose file with Watch Items for Load'
};
var STYLE = {
  MODAL_DIALOG: {
    minWidth: '320px'
  },
  ROW_INPUT_FILE: {
    marginTop: '16px',
    marginBottom: '16px'
  },
  ROW_VALIDATION: {
    marginRight: '16px'
  }
};

var LoadFileDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(LoadFileDialog, _Component);

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      onLoad: PropTypes.func
    }),
    onClose: PropTypes.func
  }
  */
  function LoadFileDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleChange = function (results) {
      if (results && results[0]) {
        var _results$ = results[0],
            progressEvent = _results$[0],
            file = _results$[1];
        _this.progressEvent = progressEvent;
        _this.file = file;
      } else {
        _this.progressEvent = null;
        _this.file = null;
      }
    };

    _this._handleLoad = function () {
      if (_this.progressEvent && _this.file) {
        var data = _this.props.data,
            onLoad = data.onLoad;
        onLoad({
          progressEvent: _this.progressEvent
        });

        _this.setState({
          validationMessages: []
        });
      } else {
        _this.setState({
          validationMessages: [C.FILE_NOT_CHOOSED]
        });
      }
    };

    _this._handleClose = function () {
      var onClose = _this.props.onClose;

      if (_this.state.validationMessages.length !== 0) {
        _this.setState({
          validationMessages: []
        });
      }

      onClose();
    };

    _this.progressEvent = null;
    _this.file = null;
    _this._commandButtons = [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
      isPrimary: true,
      caption: "Load",
      timeout: 2000,
      onClick: _this._handleLoad
    }, "load")];
    _this.state = {
      validationMessages: []
    };
    return _this;
  }

  var _proto = LoadFileDialog.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var isShow = this.props.isShow,
        validationMessages = this.state.validationMessages;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog["default"], {
      style: STYLE.MODAL_DIALOG,
      caption: "Load Watch Items from File",
      isShow: isShow,
      commandButtons: this._commandButtons,
      onClose: this._handleClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: (0, _extends2["default"])({}, styles.rowDiv, STYLE.ROW_INPUT_FILE),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputFileReader["default"], {
          as: "text",
          onChange: this._handleChange
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: (0, _extends2["default"])({}, styles.rowDiv, STYLE.ROW_VALIDATION),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessagesFragment["default"], {
          validationMessages: validationMessages
        })
      })]
    });
  };

  return LoadFileDialog;
}(_react.Component);

var _default = LoadFileDialog;
exports["default"] = _default;
//# sourceMappingURL=LoadFileDialog.js.map