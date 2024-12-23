"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _jsxRuntime = require("react/jsx-runtime");
const S_TABS = {
    margin: "10px 5px 0 10px",
    borderBottom: "2px solid #a487d4"
  },
  S_TABPANES = {
    width: "100%",
    height: "100%"
  },
  S_TABPANE_SELECTED = {
    display: "block",
    width: "100%",
    height: "100%"
  },
  S_TABPANE_HIDED = {
    display: "none"
  };
const TabPane = _ref => {
  let {
    width,
    height,
    children
  } = _ref;
  const components = (0, _useRefInit.default)(() => (0, _uiApi.safeMap)(children, (TabElement, index) => (0, _uiApi.cloneUiElement)(TabElement.props.children, void 0, index)))[0],
    [selectedTabIndex, setSelectedTabIndex] = (0, _uiApi.useState)(0),
    _isSelectedTabIndex = index => index === selectedTabIndex;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      width,
      height
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_TABS,
      children: (0, _uiApi.safeMap)(children, (ElementTab, index) => (0, _uiApi.cloneUiElement)(ElementTab, {
        onClick: () => setSelectedTabIndex(index),
        isSelected: _isSelectedTabIndex(index)
      }, index))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_TABPANES,
      children: (0, _uiApi.safeMap)(components, (comp, index) => {
        const divStyle = _isSelectedTabIndex(index) ? S_TABPANE_SELECTED : S_TABPANE_HIDED;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: divStyle,
          children: comp
        }, index);
      })
    })]
  });
};
var _default = exports.default = TabPane;
//# sourceMappingURL=TabPane.js.map