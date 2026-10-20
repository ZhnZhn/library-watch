"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Tokens = require("../../constants/Tokens");
var _watchListStore = require("../../flux/watch-list/watchListStore");
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _useWatchEditedColor = _interopRequireDefault(require("../styles/useWatchEditedColor"));
var _ButtonCircle = _interopRequireDefault(require("../zhn/ButtonCircle"));
var _jsxRuntime = require("react/jsx-runtime");
const CAPTION = "S",
  _crBtStyle = color => color ? {
    color,
    borderColor: color
  } : void 0;
const ButtonSave = ({
  className,
  style
}) => {
  const _color = (0, _useWatchEditedColor.default)(),
    _style = (0, _styleFn.crStyle2)(style, _crBtStyle(_color));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
    className: className,
    caption: CAPTION,
    title: _Tokens.TITLE_BUTTON_SAVE,
    style: _style,
    onClick: _watchListStore.saveWatchList
  });
};
var _default = exports.default = ButtonSave;
//# sourceMappingURL=ButtonSave.js.map