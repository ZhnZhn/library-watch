"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ModalDialogContainer = _interopRequireDefault(require("./ModalDialogContainer"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var DialogContainer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DialogContainer, _Component);

  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    showAction: PropTypes.string,
    routerDialog: PropTypes.object
  }
  */
  function DialogContainer(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._onStore = function (actionType, option) {
      var _this$props = _this.props,
          showAction = _this$props.showAction,
          routerDialog = _this$props.routerDialog;

      if (actionType === showAction) {
        var type = option.modalDialogType,
            _this$state = _this.state,
            inits = _this$state.inits,
            shows = _this$state.shows,
            data = _this$state.data,
            dialogs = _this$state.dialogs;
        data[type] = option;
        shows[type] = true;

        if (inits[type]) {
          _this.setState({
            isShow: true,
            currentDialog: type,
            shows: shows,
            data: data
          });
        } else {
          dialogs.push({
            type: type,
            comp: routerDialog[type]
          });
          inits[type] = true;

          _this.setState({
            isShow: true,
            currentDialog: type,
            shows: shows,
            data: data,
            dialogs: dialogs
          });
        }
      }
    };

    _this._handlerClose = function (type) {
      _this.state.shows[type] = false;

      _this.setState({
        isShow: false,
        currentDialog: null,
        shows: _this.state.shows
      });
    };

    _this._renderDialogs = function () {
      var store = _this.props.store,
          _this$state2 = _this.state,
          shows = _this$state2.shows,
          data = _this$state2.data;
      return _this.state.dialogs.map(function (dialog, index) {
        var type = dialog.type,
            comp = dialog.comp;
        return /*#__PURE__*/_react["default"].createElement(comp, {
          key: type,
          isShow: shows[type],
          data: data[type],
          store: store,
          onClose: _this._handlerClose.bind(null, type)
        });
      });
    };

    _this.state = {
      isShow: false,
      inits: {},
      shows: {},
      data: {},
      dialogs: [],
      currentDialog: null
    };
    return _this;
  }

  var _proto = DialogContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var _this$state3 = this.state,
        isShow = _this$state3.isShow,
        currentDialog = _this$state3.currentDialog;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialogContainer["default"], {
      isShow: isShow,
      onClose: this._handlerClose.bind(null, currentDialog),
      children: this._renderDialogs()
    });
  };

  return DialogContainer;
}(_react.Component);

var _default = DialogContainer;
exports["default"] = _default;
//# sourceMappingURL=DialogContainer.js.map