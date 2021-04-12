"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var CL = "hrz-container";

var ComponentHrzContainer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ComponentHrzContainer, _Component);

  function ComponentHrzContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      containers: []
    };

    _this._onStore = function (actionType, data) {
      var initShowAction = _this.props.initShowAction;

      if (actionType === initShowAction) {
        _this.setState(function (prevState) {
          prevState.containers.unshift(data);
          return {
            containers: [].concat(prevState.containers)
          };
        }); //this.state.containers.unshift(data);
        //this.setState(this.state);

      }
    };

    return _this;
  }

  var _proto = ComponentHrzContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var store = this.props.store;
    this.unsubscribe = store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var containers = this.state.containers;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL,
      children: containers
    });
  };

  return ComponentHrzContainer;
}(_react.Component);

var _default = ComponentHrzContainer;
exports["default"] = _default;
//# sourceMappingURL=ComponentHrzContainer.js.map