"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SpinnerLoading = _interopRequireDefault(require("./SpinnerLoading"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from "prop-types";

const S_ROOT = {
    position: 'relative',
    display: 'inline-block',
    height: 36,
    border: '1px solid',
    borderRadius: 10
  },
  S_BT_UP = {
    color: '#a487d4',
    borderColor: '#a487d4',
    borderWidth: 2,
    fontWeight: 'bold'
  },
  S_BT_DOWN = {
    color: 'grey',
    borderColor: 'grey',
    borderWidth: 1,
    fontWeight: 'normal'
  },
  S_ITEM = {
    display: 'inline-block',
    padding: '0 8px 0 5px'
  },
  S_CIRCLE = {
    display: 'inline-block',
    marginLeft: 8,
    backgroundColor: 'grey',
    width: 12,
    height: 12,
    border: '1px solid grey',
    borderRadius: '50%'
  },
  S_CIRCLE_LOADING = {
    backgroundColor: 'transparent',
    border: 'none'
  },
  S_CIRCLE_UP = {
    backgroundColor: '#a487d4',
    borderColor: '#a487d4'
  },
  S_CIRCLE_DOWN = {
    backgroundColor: 'grey',
    borderColor: 'grey'
  },
  S_SPINNER = {
    top: 5,
    left: 2
  };
const _crStateEl = (isUp, isLoading) => {
  let _spinner = null;
  if (isLoading) {
    _spinner = /*#__PURE__*/(0, _jsxRuntime.jsx)(_SpinnerLoading.default, {
      style: S_SPINNER
    });
  }
  const _circleStyle = isLoading ? S_CIRCLE_LOADING : isUp ? S_CIRCLE_UP : S_CIRCLE_DOWN;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [_spinner, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: {
        ...S_CIRCLE,
        ..._circleStyle
      }
    })]
  });
};
const ButtonDownUp = _ref => {
  let {
    style,
    isUp,
    isLoading,
    caption = '',
    title = '',
    onClick
  } = _ref;
  const _style = isUp ? S_BT_UP : S_BT_DOWN;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    type: "button",
    title: title,
    style: {
      ...S_ROOT,
      ...style,
      ..._style
    },
    onClick: onClick,
    children: [_crStateEl(isUp, isLoading), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_ITEM,
      children: caption
    })]
  });
};

/*
ButtonDownUp.propTypes = {
  style: PropTypes.object,
  isUp: PropTypes.bool,
  isLoading: PropTypes.bool,
  caption: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}
*/
var _default = exports.default = ButtonDownUp;
//# sourceMappingURL=ButtonDownUp.js.map