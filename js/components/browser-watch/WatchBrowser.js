"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _Handlers = require("./Handlers");
var _Comp = _interopRequireDefault(require("../Comp"));
var _EditBar = _interopRequireDefault(require("./EditBar"));
var _SearchInput = _interopRequireDefault(require("./SearchInput"));
var _WatchGroups = _interopRequireDefault(require("./WatchGroups"));
var _jsxRuntime = require("react/jsx-runtime");
const {
  Browser,
  CaptionRow,
  ButtonCircle,
  ButtonSave,
  ScrollPane
} = _Comp.default;
const CL_BROWSER_WATCH = "browser-watch",
  CL_BROWSER_WATCH__30 = CL_BROWSER_WATCH + "--1r",
  CL_BROWSER_WATCH__60 = CL_BROWSER_WATCH + "--2r",
  CL_BT_CAPTION = "bt__watch__caption",
  S_BROWSER = {
    maxWidth: 500,
    paddingRight: 0
  },
  S_CAPTION_ROOT = {
    minWidth: 340
  },
  S_CAPTION_ROOT_DOUBLE = {
    minWidth: 310
  };
const _crScrollClass = (isSearchInput, isModeEdit) => isSearchInput && isModeEdit ? CL_BROWSER_WATCH__60 : isSearchInput || isModeEdit ? CL_BROWSER_WATCH__30 : CL_BROWSER_WATCH;
const WatchBrowser = _ref => {
  let {
    isShow,
    isEditMode,
    isDoubleWatch,
    caption,
    store,
    browserType,
    useMsBrowser,
    useMsBrowserDynamic
  } = _ref;
  const _refIsShouldUpdateFind = (0, _uiApi.useRef)(false),
    [isShowComp, showComp, hideComp] = (0, _useBool.default)(isShow),
    [isModeEdit, _toggleEditMode] = (0, _useToggle.default)(isEditMode),
    [isSearchInput, _toggleSearchInput, _setIsSearchInput] = (0, _useToggle.default)(),
    [watchList, setWatchList] = (0, _uiApi.useState)(store.getWatchList)
    /*eslint-disable react-hooks/exhaustive-deps */,
    [_handlerHide, _handlerShow] = (0, _uiApi.useMemo)(() => [() => {
      if (isDoubleWatch) {
        (0, _Handlers.toggleWatchDbBrowser)();
      } else {
        hideComp();
      }
    }, () => {
      if (!isDoubleWatch) {
        showComp();
      }
    }], [isDoubleWatch]);
  // hideComp, showComp
  /*eslint-enable react-hooks/exhaustive-deps */
  useMsBrowser(msBrowser => {
    if (msBrowser && msBrowser.id === browserType) {
      _handlerShow();
    }
  });
  useMsBrowserDynamic(msBrowserDynamic => {
    if (msBrowserDynamic && msBrowserDynamic.browserType === browserType && msBrowserDynamic.menuItems) {
      (0, _uiApi.setRefValue)(_refIsShouldUpdateFind, true);
      setWatchList({
        ...msBrowserDynamic.menuItems
      });
      _setIsSearchInput(false);
    }
  });
  const {
      groups
    } = watchList || {},
    _styleCaption = isDoubleWatch ? S_CAPTION_ROOT_DOUBLE : S_CAPTION_ROOT,
    [_captionEV, _titleEV] = isModeEdit ? ['V', 'Toggle to View Mode'] : ['E', 'Toggle to Edit Mode'],
    _isShouldUpdateSearchInput = isSearchInput && (0, _uiApi.getRefValue)(_refIsShouldUpdateFind) ? () => {
      (0, _uiApi.setRefValue)(_refIsShouldUpdateFind, false);
      return true;
    } : false,
    _scrollClass = _crScrollClass(isSearchInput, isModeEdit);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Browser, {
    isShow: isShowComp,
    style: S_BROWSER,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(CaptionRow, {
      style: _styleCaption,
      caption: caption,
      onClose: _handlerHide,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ButtonSave, {
        className: CL_BT_CAPTION,
        store: store
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ButtonCircle, {
        isWithoutDefault: true,
        className: CL_BT_CAPTION,
        caption: _captionEV,
        title: _titleEV,
        onClick: _toggleEditMode
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ButtonCircle, {
        isWithoutDefault: true,
        className: CL_BT_CAPTION,
        caption: "F",
        title: "Show/Hide : Find Item Input",
        onClick: _toggleSearchInput
      }), !isDoubleWatch && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ButtonCircle, {
          isWithoutDefault: true,
          className: CL_BT_CAPTION,
          caption: "B",
          title: "BackUp Watch Items to JSON File",
          onClick: _Handlers.backupWatchItemsToJson
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ButtonCircle, {
          isWithoutDefault: true,
          className: CL_BT_CAPTION,
          caption: "L",
          title: "Load Watch Items from JSON File",
          onClick: _Handlers.showDialogLoadItemsFromFile
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditBar.default, {
      is: isModeEdit
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchInput.default, {
      isShow: isSearchInput,
      isShouldUpdate: _isShouldUpdateSearchInput,
      data: watchList
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ScrollPane, {
      className: _scrollClass,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchGroups.default, {
        isModeEdit: isModeEdit,
        groups: groups
      })
    })]
  });
};
var _default = WatchBrowser;
exports.default = _default;
//# sourceMappingURL=WatchBrowser.js.map