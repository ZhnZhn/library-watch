"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from "prop-types";

const CL_ROW_CAPTION = (0, _styleFn.crClNotSelected)("zhn-oc"),
  S_ROOT = {
    backgroundColor: '#4d4d4d',
    lineHeight: 2
  },
  S_SVG = {
    ..._styleFn.S_INLINE_BLOCK,
    width: 16,
    height: 16
  },
  S_CAPTION = {
    color: '#1b2836',
    paddingLeft: 4,
    verticalAlign: 'top',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  FILL_OPEN = 'yellow',
  FILL_CLOSE = '#4d4d4d',
  PATH_OPEN = "M 2,14 L 14,14 14,2 2,14",
  PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";
const OpenClose2 = _ref => {
  let {
    refItem,
    isClose = true,
    style,
    styleNotSelected,
    styleCaptionRow,
    styleCaption,
    caption,
    fillOpen = FILL_OPEN,
    fillClose = FILL_CLOSE,
    dndHandlers,
    children
  } = _ref;
  const [isOpen, _hToggle] = (0, _useToggle.default)(!isClose),
    _hKeyDown = (0, _useKeyEnter.default)(_hToggle),
    [_pathV, _fillV, _styleCollapse, _classShow, _styleNotSelected] = isOpen ? [PATH_OPEN, fillOpen, _styleFn.S_BLOCK, _styleFn.CL_SHOW_POPUP, null] : [PATH_CLOSE, fillClose, _styleFn.S_NONE, null, styleNotSelected];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      ...S_ROOT,
      ...style
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      ref: refItem,
      tabIndex: "0",
      role: "menuitem",
      className: CL_ROW_CAPTION,
      style: {
        ...styleCaptionRow,
        ..._styleNotSelected
      },
      onClick: _hToggle,
      onKeyDown: _hKeyDown,
      ...dndHandlers,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S_SVG,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          viewBox: "0 0 16 16",
          width: "100%",
          height: "100%",
          preserveAspectRatio: "none",
          xmlns: "http://www.w3.org/2000/svg",
          style: _styleFn.S_INLINE_BLOCK,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: _pathV,
            fill: _fillV,
            strokeWidth: "1",
            stroke: fillOpen
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: {
          ...S_CAPTION,
          ...styleCaption
        },
        children: caption
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _classShow,
      style: _styleCollapse,
      children: children
    })]
  });
};

/*
OpenClose2.propTypes = {
  isClose: PropTypes.bool,

  style: PropTypes.object,
  styleNotSelected: PropTypes.object,
  styleCpationRow: PropTypes.object,
  styleCaption: PropTypes.object,

  caption: PropTypes.string,
  fillOpen: PropTypes.string,
  fillClose: PropTypes.string,

  isDraggable: PropTypes.bool,
  option: PropTypes.object,
  onDragStart: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func,

  onFocus: PropTypes.func,

  children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
  ])
}
*/
var _default = exports.default = OpenClose2;
//# sourceMappingURL=OpenClose2.js.map