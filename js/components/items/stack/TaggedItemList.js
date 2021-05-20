"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _TaggedItem = _interopRequireDefault(require("./TaggedItem"));

var _jsxRuntime = require("react/jsx-runtime");

var TaggedItemList = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(TaggedItemList, _Component);

  function TaggedItemList() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._renderItems = function () {
      var _this$props = _this.props,
          items = _this$props.items,
          onRemoveItem = _this$props.onRemoveItem;
      return items.map(function (item, index) {
        var question_id = item.question_id;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TaggedItem["default"], {
          item: item,
          onRemoveItem: onRemoveItem
        }, question_id);
      });
    };

    return _this;
  }

  var _proto = TaggedItemList.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (nextProps.items === this.props.items) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: this._renderItems()
    });
  };

  return TaggedItemList;
}(_react.Component);

TaggedItemList.defaultProps = {
  items: []
};
var _default = TaggedItemList;
exports["default"] = _default;
//# sourceMappingURL=TaggedItemList.js.map