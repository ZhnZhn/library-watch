"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _ButtonCircle = _interopRequireDefault(require("../zhn-atoms/ButtonCircle"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CAPTION = "S",
    TITLE = "Save Watch Items to Locale Storage",
    S_NOT_WATCH_EDITED = {
  borderColor: 'gray',
  color: 'gray'
};

var ButtonSave = function ButtonSave(_ref) {
  var className = _ref.className,
      style = _ref.style,
      store = _ref.store;

  var _useState = (0, _react.useState)(function () {
    return store.getWatchEdited();
  }),
      isWatchEdited = _useState[0],
      setIsWatchEdited = _useState[1];

  (0, _useListen["default"])(store, function (actionType, value) {
    if (actionType === _WatchActions.WatchActionTypes.SET_WATCH_EDITED) {
      setIsWatchEdited(value);
    }
  });

  var _style = isWatchEdited ? style : (0, _extends2["default"])({}, style, S_NOT_WATCH_EDITED);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
    className: className,
    caption: CAPTION,
    title: TITLE,
    style: _style,
    onClick: _WatchActions["default"].saveWatch
  });
};

var _default = ButtonSave;
exports["default"] = _default;
//# sourceMappingURL=ButtonSave.js.map