"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ButtonCircle = _interopRequireDefault(require("../zhn-atoms/ButtonCircle"));
var _Handlers = require("./Handlers");
var _jsxRuntime = require("react/jsx-runtime");
const CL_BT_BAR = "bt__watch__bar",
  S_EDIT_BAR_DIV = {
    marginBottom: 10
  },
  S_BT_EDIT_BAR_LIST = {
    marginLeft: 20
  };
const EditBar = _ref => {
  let {
    is
  } = _ref;
  return is ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_EDIT_BAR_DIV,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
      caption: "GROUP",
      title: "Edit Group",
      className: CL_BT_BAR,
      isWithoutDefault: true,
      onClick: _Handlers.showDialogEditGroups
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
      caption: "LIST",
      title: "Edit Group List",
      className: CL_BT_BAR,
      isWithoutDefault: true,
      style: S_BT_EDIT_BAR_LIST,
      onClick: _Handlers.showDialogEditLists
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
      caption: "DB",
      title: "Double Watch Browser",
      className: CL_BT_BAR,
      isWithoutDefault: true,
      style: S_BT_EDIT_BAR_LIST,
      onClick: _Handlers.toggleWatchDbBrowser
    })]
  }) : null;
};
var _default = exports.default = EditBar;
//# sourceMappingURL=EditBar.js.map