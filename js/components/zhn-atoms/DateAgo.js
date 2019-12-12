"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _DateAgo = _interopRequireDefault(require("./DateAgo.Style"));

//import PropTypes from "prop-types";
var DateAgo =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(DateAgo, _Component);

  /*
  static propTypes = {
     isShowDate: PropTypes.bool,
     style: PropTypes.object
  }
  */
  function DateAgo(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hClick = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.setState(function (prevState) {
        return {
          isShowDate: !prevState.isShowDate
        };
      });
    };

    _this.state = {
      isShowDate: !!props.isShowDate
    };
    return _this;
  }

  var _proto = DateAgo.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        dateAgo = _this$props.dateAgo,
        date = _this$props.date,
        isShowDate = this.state.isShowDate,
        _styleDate = isShowDate ? _DateAgo["default"].INLINE_BLOCK : _DateAgo["default"].NONE;

    return _react["default"].createElement("span", null, _react["default"].createElement("span", {
      style: (0, _extends2["default"])({}, _DateAgo["default"].DATE_AGO, {}, style),
      onClick: date ? this._hClick : void 0
    }, dateAgo), _react["default"].createElement("span", {
      style: (0, _extends2["default"])({}, _DateAgo["default"].DATE, {}, _styleDate)
    }, date));
  };

  return DateAgo;
}(_react.Component);

DateAgo.defaultProps = {
  date: ''
};
var _default = DateAgo;
exports["default"] = _default;
//# sourceMappingURL=DateAgo.js.map