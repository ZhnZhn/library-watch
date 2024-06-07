"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ButtonCircle = _interopRequireDefault(require("./ButtonCircle2"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_MENU_BADGE = "menu__badge",
  S_OPEN = {
    color: '#a487d4'
  };
const AtomCounter = _ref => {
  let {
    atom,
    onOpen,
    onClose
  } = _ref;
  const {
      useAtomValue
    } = atom,
    {
      is,
      v
    } = useAtomValue(),
    _hClick = (0, _uiApi.useCallback)(evt => {
      evt.preventDefault();
      evt.stopPropagation();
      if (is) {
        onClose();
      } else {
        onOpen();
      }
    }, [is, onOpen, onClose]),
    _style = is ? S_OPEN : null;
  return v === 0 ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
    className: CL_MENU_BADGE,
    style: _style,
    caption: v,
    onClick: _hClick
  });
};
var _default = exports.default = AtomCounter;
//# sourceMappingURL=AtomCounter.js.map