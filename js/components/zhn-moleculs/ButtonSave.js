"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useListen = _interopRequireDefault(require("../hooks/useListen"));
var _crStyle = require("../zhn-utils/crStyle");
var _WatchActions = require("../../flux/actions/WatchActions");
var _ButtonCircle = _interopRequireDefault(require("../zhn-atoms/ButtonCircle"));
var _jsxRuntime = require("react/jsx-runtime");
var CAPTION = "S",
  TITLE = "Save Watch Items to Locale Storage",
  COLOR_NOT_WATCH_EDITED = 'grey',
  S_NOT_WATCH_EDITED = {
    borderColor: COLOR_NOT_WATCH_EDITED,
    color: COLOR_NOT_WATCH_EDITED
  };
var ButtonSave = function ButtonSave(_ref) {
  var className = _ref.className,
    style = _ref.style,
    store = _ref.store;
  var _useState = (0, _uiApi.useState)(function () {
      return store.getWatchEdited();
    }),
    isWatchEdited = _useState[0],
    setIsWatchEdited = _useState[1];
  (0, _useListen["default"])(store, function (actionType, value) {
    if (actionType === _WatchActions.WAT_SET_WATCH_EDITED) {
      setIsWatchEdited(value);
    }
  });
  var _style = (0, _crStyle.crStyle2)(style, isWatchEdited && S_NOT_WATCH_EDITED);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
    className: className,
    caption: CAPTION,
    title: TITLE,
    style: _style,
    onClick: _WatchActions.WatchActions.saveWatch
  });
};
var _default = ButtonSave;
exports["default"] = _default;
//# sourceMappingURL=ButtonSave.js.map