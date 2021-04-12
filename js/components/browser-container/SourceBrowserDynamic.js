"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _MenuBrowserDynamic = _interopRequireDefault(require("../zhn-moleculs/MenuBrowserDynamic"));

var _BrowserActions = _interopRequireWildcard(require("../../flux/actions/BrowserActions"));

var _jsxRuntime = require("react/jsx-runtime");

var SourceBrowserDynamic = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(SourceBrowserDynamic, _Component);

  function SourceBrowserDynamic() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SourceBrowserDynamic.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate() {
    return false;
  };

  _proto.render = function render() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuBrowserDynamic["default"], (0, _extends2["default"])({
      caption: "Source Browser",
      showAction: _BrowserActions.BrowserActionTypes.SHOW_BROWSER_DYNAMIC,
      loadCompletedAction: _BrowserActions.BrowserActionTypes.LOAD_BROWSER_DYNAMIC_COMPLETED,
      updateAction: _BrowserActions.BrowserActionTypes.UPDATE_BROWSER_MENU,
      onLoadMenu: _BrowserActions["default"].loadBrowserDynamic
    }, this.props));
  };

  return SourceBrowserDynamic;
}(_react.Component);

var _default = SourceBrowserDynamic;
exports["default"] = _default;
//# sourceMappingURL=SourceBrowserDynamic.js.map