"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("react/jsx-runtime");
const S_DIV = {
  zIndex: 30,
  position: 'absolute',
  top: 70,
  left: 10,
  width: '99%'
};
const _crArrWithTopObjByKey = (arr, key) => {
  let index, i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].key === key) {
      index = i;
      break;
    }
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1), arr[index]];
};
const _checkOpenDialogs = (maxDialog, openDialogs, dialog, dialogType) => {
  openDialogs.push(dialogType);
  return openDialogs.length > maxDialog ? (dialog[openDialogs[0]] = false, openDialogs.slice(1)) : openDialogs;
};
const INITIAL_STATE = {
  dialog: {},
  compDialogs: [],
  openDialogs: []
};
const DialogStack = _ref => {
  let {
    useDgOption,
    maxDialog
  } = _ref;
  const [state, setState] = (0, _uiApi.useState)(INITIAL_STATE),
    {
      dialog,
      compDialogs
    } = state,
    _hToggleDialog = dialogType => {
      setState(prevState => {
        const {
          dialog,
          openDialogs
        } = prevState;
        dialog[dialogType] = !dialog[dialogType];
        return {
          ...prevState,
          dialog,
          openDialogs: !dialog[dialogType] ? openDialogs.filter(v => v !== dialogType) : openDialogs
        };
      });
    };
  useDgOption(dgOption => {
    if (dgOption) {
      const {
        dialogType,
        dialogComp
      } = dgOption;
      if (dialogComp) {
        setState(prevState => {
          const {
            dialog,
            compDialogs,
            openDialogs
          } = prevState;
          dialog[dialogType] = true;
          compDialogs.push(dialogComp);
          return {
            dialog,
            compDialogs,
            openDialogs: _checkOpenDialogs(maxDialog, openDialogs, dialog, dialogType)
          };
        });
      } else {
        setState(prevState => {
          const {
            dialog,
            compDialogs,
            openDialogs
          } = prevState;
          let _openDialogs;
          if (!dialog[dialogType]) {
            dialog[dialogType] = true;
            _openDialogs = _checkOpenDialogs(maxDialog, openDialogs, dialog, dialogType);
          }
          return {
            dialog,
            compDialogs: _crArrWithTopObjByKey(compDialogs, dialogType),
            openDialogs: _openDialogs || openDialogs
          };
        });
      }
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: S_DIV,
    children: compDialogs.map(compDialog => {
      const {
        key
      } = compDialog;
      return (0, _uiApi.cloneElement)(compDialog, {
        key,
        isShow: dialog[key],
        onClose: () => _hToggleDialog(key)
      });
    })
  });
};
var _default = DialogStack;
exports.default = _default;
//# sourceMappingURL=DialogStack.js.map