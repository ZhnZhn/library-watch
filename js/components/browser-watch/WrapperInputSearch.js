"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _TransformFn = _interopRequireDefault(require("../zhn-select/TransformFn"));

var _InputSearch = _interopRequireDefault(require("../zhn-select/InputSearch"));

var _ItemTopicOption = _interopRequireDefault(require("../zhn-select/ItemTopicOption"));

var _jsxRuntime = require("react/jsx-runtime");

var SEARCH_PLACEHOLDER = 'Find Item';

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var WrapperInputSearch = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(WrapperInputSearch, _Component);

  function WrapperInputSearch() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._handlerSelectItem = function (item) {
      var onSelect = _this.props.onSelect;

      if (item && _isFn(onSelect)) {
        onSelect(item);
      }
    };

    return _this;
  }

  var _proto = WrapperInputSearch.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShouldUpdate) {
      return true;
    }

    return false;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        data = _this$props.data,
        _options = _TransformFn["default"].fromLevel3(data);

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: style,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSearch["default"], {
        placeholder: SEARCH_PLACEHOLDER,
        propCaption: "caption",
        options: _options,
        ItemOptionComp: _ItemTopicOption["default"],
        onSelect: this._handlerSelectItem
      })
    });
  };

  return WrapperInputSearch;
}(_react.Component);

var _default = WrapperInputSearch;
exports["default"] = _default;
//# sourceMappingURL=WrapperInputSearch.js.map