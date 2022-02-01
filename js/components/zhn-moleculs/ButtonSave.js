"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _ButtonCircle = _interopRequireDefault(require("../zhn-atoms/ButtonCircle"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import PropTypes from "prop-types";
var CAPTION = "S",
    TITLE = "Save Watch Items to Locale Storage",
    S_NOT_WATCH_EDITED = {
  borderColor: 'gray',
  color: 'gray'
};

var ButtonSave = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ButtonSave, _Component);

  /*
  static propTypes = {
    store : PropTypes.object.isRequired,
    style : PropTypes.object
  }
  */
  function ButtonSave(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._onStore = function (actionType, value) {
      if (actionType === _WatchActions.WatchActionTypes.SET_WATCH_EDITED) {
        _this.setState({
          isWatchEdited: value
        });
      }
    };

    _this.state = {
      isWatchEdited: props.store.getWatchEdited()
    };
    return _this;
  }

  var _proto = ButtonSave.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isWatchEdited === this.state.isWatchEdited) {
      return false;
    }

    return true;
  };

  _proto.componentDidMount = function componentDidMount() {
    var store = this.props.store;
    this.unsubcribe = store.listen(this._onStore);
    this.setState({
      isWatchEdited: store.getWatchEdited()
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubcribe();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        isWatchEdited = this.state.isWatchEdited,
        _style = isWatchEdited ? style : (0, _extends2["default"])({}, style, S_NOT_WATCH_EDITED);

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
      className: className,
      caption: CAPTION,
      title: TITLE,
      style: _style,
      onClick: _WatchActions["default"].saveWatch
    });
  };

  return ButtonSave;
}(_react.Component);

var _default = ButtonSave;
exports["default"] = _default;
//# sourceMappingURL=ButtonSave.js.map