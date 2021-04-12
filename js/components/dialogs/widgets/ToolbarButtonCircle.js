"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Row = _interopRequireDefault(require("../rows/Row"));

var _ButtonCircle = _interopRequireDefault(require("../../zhn-atoms/ButtonCircle"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  ROW: {
    paddingTop: '4px',
    paddingBottom: '8px'
  },
  BUTTON_CIRCLE: {
    marginLeft: '20px'
  }
};

var ToolbarButtonCircle = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ToolbarButtonCircle, _Component);

  function ToolbarButtonCircle() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._renderButtons = function (buttons) {
      if (buttons === void 0) {
        buttons = [];
      }

      return buttons.map(function (button, index) {
        var caption = button.caption,
            title = button.title,
            onClick = button.onClick;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
          caption: caption,
          title: title,
          style: S.BUTTON_CIRCLE,
          onClick: onClick
        }, caption + index);
      });
    };

    return _this;
  }

  var _proto = ToolbarButtonCircle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.buttons === this.props.buttons) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var buttons = this.props.buttons;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row["default"].Plain, {
      style: S.ROW,
      children: this._renderButtons(buttons)
    });
  };

  return ToolbarButtonCircle;
}(_react.Component);

var _default = ToolbarButtonCircle;
exports["default"] = _default;
//# sourceMappingURL=ToolbarButtonCircle.js.map