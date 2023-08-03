"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ModalDialogContainer = _interopRequireDefault(require("./ModalDialogContainer"));
var _jsxRuntime = require("react/jsx-runtime");
const INITIAL_STATE = {
  isShow: false,
  inits: {},
  shows: {},
  data: {},
  dialogs: [],
  currentDialog: null
};
const DialogContainer = _ref => {
  let {
    store,
    useMdOption,
    routerDialog
  } = _ref;
  const [state, setState] = (0, _uiApi.useState)(INITIAL_STATE),
    {
      isShow,
      shows,
      data,
      dialogs,
      currentDialog
    } = state,
    _hClose = type => {
      setState(prevState => {
        prevState.shows[type] = false;
        return {
          ...prevState,
          isShow: false,
          currentDialog: null
        };
      });
    };
  useMdOption(mdOption => {
    if (mdOption) {
      const {
        modalDialogType: type
      } = mdOption;
      setState(prevState => {
        const {
          inits,
          shows,
          data,
          dialogs
        } = prevState;
        data[type] = mdOption;
        shows[type] = true;
        if (!inits[type]) {
          dialogs.push({
            type: type,
            comp: routerDialog[type]
          });
          inits[type] = true;
        }
        return {
          ...prevState,
          isShow: true,
          currentDialog: type
        };
      });
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialogContainer.default, {
    isShow: isShow,
    onClose: () => _hClose(currentDialog),
    children: dialogs.map(_ref2 => {
      let {
        type,
        comp
      } = _ref2;
      return (0, _uiApi.createElement)(comp, {
        key: type,
        isShow: shows[type],
        data: data[type],
        store: store,
        onClose: () => _hClose(type)
      });
    })
  });
};
var _default = DialogContainer;
exports.default = _default;
//# sourceMappingURL=DialogContainer.js.map