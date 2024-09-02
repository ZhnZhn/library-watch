"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _watchListStore = require("../../flux/watch-list/watchListStore");
var _ButtonCircle = _interopRequireDefault(require("../zhn/ButtonCircle"));
var _jsxRuntime = require("react/jsx-runtime");
const CAPTION = "S",
  TITLE = "Save Watch Items to Locale Storage",
  COLOR_NOT_WATCH_EDITED = 'grey',
  S_NOT_WATCH_EDITED = {
    borderColor: COLOR_NOT_WATCH_EDITED,
    color: COLOR_NOT_WATCH_EDITED
  };
const ButtonSave = _ref => {
  let {
    className,
    style
  } = _ref;
  const [isWatchEdited, setIsWatchEdited] = (0, _uiApi.useState)(_watchListStore.getIsWatchEdited);
  (0, _watchListStore.useIsWatchEdited)(isWatchEdited => {
    setIsWatchEdited(!!isWatchEdited);
  });
  const _style = (0, _styleFn.crStyle2)(style, isWatchEdited && S_NOT_WATCH_EDITED);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
    className: className,
    caption: CAPTION,
    title: TITLE,
    style: _style,
    onClick: _watchListStore.saveWatchList
  });
};
var _default = exports.default = ButtonSave;
//# sourceMappingURL=ButtonSave.js.map