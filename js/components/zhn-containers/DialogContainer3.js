"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var STYLE = {
  ROOT: {
    zIndex: 30,
    position: 'absolute',
    top: 70,
    left: 10,
    width: '99%'
  }
};

var getObjToFirst = function getObjToFirst(arr, keyValue) {
  var index,
      i,
      len = arr.length;

  for (i = 0; i < len; i++) {
    if (arr[i].key === keyValue) {
      index = i;
      break;
    }
  }

  return [].concat(arr.slice(0, index), arr.slice(index + 1), [arr[index]]);
};

var DialogContainer3 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DialogContainer3, _Component);

  /*
  static propTypes = {
    maxDialog: PropTypes.number,
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    initAction: PropTypes.string,
    showAction: PropTypes.string
  }
  */
  function DialogContainer3(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._checkActiveDialogs = function (dialogType) {
      _this._activeDialogs.push(dialogType);

      if (_this._activeDialogs.length > _this.props.maxDialog) {
        _this.state.dialog[_this._activeDialogs[0]] = false;
        _this._activeDialogs = _this._activeDialogs.slice(1);
      }
    };

    _this.filterActiveDialogs = function (dialogType) {
      _this._activeDialogs = _this._activeDialogs.filter(function (value) {
        return value !== dialogType;
      });
    };

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          initAction = _this$props.initAction,
          showAction = _this$props.showAction;

      if (actionType === showAction) {
        if (!_this.state.dialog[data]) {
          _this.state.dialog[data] = true;

          _this._checkActiveDialogs(data);
        }

        _this.state.compDialogs = getObjToFirst(_this.state.compDialogs, data);

        _this.setState(_this.state);
      } else if (actionType === initAction) {
        _this.state.dialog[data.dialogType] = true;

        _this.state.compDialogs.push(data.dialogComp);

        _this._checkActiveDialogs(data.dialogType);

        _this.setState(_this.state);
      }
    };

    _this._handleToggleDialog = function (dialogType) {
      var dialog = _this.state.dialog;
      dialog[dialogType] = !dialog[dialogType];

      _this.setState(_this.state);

      if (!dialog[dialogType]) {
        _this.filterActiveDialogs(dialogType);

        document.getElementsByTagName('html')[0].style.cursor = '';
      }
    };

    _this._renderDialogs = function () {
      var _this$state = _this.state,
          dialog = _this$state.dialog,
          compDialogs = _this$state.compDialogs;
      return compDialogs.map(function (compDialog, index) {
        return /*#__PURE__*/_react["default"].cloneElement(compDialog, {
          key: compDialog.key,
          isShow: dialog[compDialog.key],
          onClose: _this._handleToggleDialog.bind((0, _assertThisInitialized2["default"])(_this), compDialog.key)
        });
      });
    };

    _this._activeDialogs = [];
    _this.state = {
      dialog: {},
      compDialogs: []
    };
    return _this;
  }

  var _proto = DialogContainer3.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: STYLE.ROOT,
      children: this._renderDialogs()
    });
  };

  return DialogContainer3;
}(_react.Component);

var _default = DialogContainer3;
exports["default"] = _default;
//# sourceMappingURL=DialogContainer3.js.map