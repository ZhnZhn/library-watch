"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import PropTypes from "prop-types";
var S_TABS = {
  margin: '10px 5px 0 10px',
  borderBottom: '2px solid #a487d4'
},
    S_TABPANES = {
  width: "100%",
  height: "100%"
},
    S_TABPANE_SELECTED = {
  display: 'block',
  width: "100%",
  height: "100%"
},
    S_TABPANE_HIDED = {
  display: 'none'
};

var TabPane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(TabPane, _Component);

  /*
  static propTypes = {
     width: PropTypes.number,
     height: PropTypes.number,
     children: PropTypes.arrayOf(PropTypes.node)
  }
  */
  function TabPane(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handlerClickTab = function (index) {
      _this.setState({
        selectedTabIndex: index
      });
    };

    _this._renderTabs = function (children) {
      var selectedTabIndex = _this.state.selectedTabIndex;
      return children.map(function (tab, index) {
        var isSelected = index === selectedTabIndex ? true : false;
        return /*#__PURE__*/_react["default"].cloneElement(tab, {
          key: index,
          onClick: _this._handlerClickTab.bind(null, index),
          isSelected: isSelected
        });
      });
    };

    _this._renderComponents = function () {
      var _this$state = _this.state,
          selectedTabIndex = _this$state.selectedTabIndex,
          components = _this$state.components;
      return components.map(function (comp, index) {
        var divStyle = index === selectedTabIndex ? S_TABPANE_SELECTED : S_TABPANE_HIDED;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: divStyle,
          children: comp
        }, 'a' + index);
      });
    };

    var _components = props.children.map(function (tab, index) {
      return /*#__PURE__*/_react["default"].cloneElement(tab.props.children, {
        key: 'comp' + index
      });
    });

    _this.state = {
      selectedTabIndex: 0,
      components: _components
    };
    return _this;
  }

  var _proto = TabPane.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        width = _this$props.width,
        height = _this$props.height;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        width: width,
        height: height
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S_TABS,
        children: this._renderTabs(children)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S_TABPANES,
        children: this._renderComponents()
      })]
    });
  };

  _proto.getSelectedTabIndex = function getSelectedTabIndex() {
    return this.state.selectedTabIndex;
  };

  return TabPane;
}(_react.Component);

var _default = TabPane;
exports["default"] = _default;
//# sourceMappingURL=TabPane.js.map