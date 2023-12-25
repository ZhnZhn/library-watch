"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useBrowser = _interopRequireDefault(require("../hooks/useBrowser"));
var _useRecentFocusedElement = _interopRequireDefault(require("../hooks/useRecentFocusedElement"));
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
  _crBrowserWatchStyle = suffix => `${CL_BROWSER_WATCH} ${CL_BROWSER_WATCH}--${suffix}`,
  CL_BROWSER_WATCH__30 = _crBrowserWatchStyle("1r"),
  CL_BROWSER_WATCH__60 = _crBrowserWatchStyle("2r"),
  CL_BT_CAPTION = "bt__watch__caption",
  S_BROWSER = {
    maxWidth: 500
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
    browserType,
    useMsBrowser,
    useMsBrowserDynamic,
    useWatchList
  } = _ref;
  const _refIsShouldUpdateFind = (0, _uiApi.useRef)(false),
    [isModeEdit, _toggleEditMode] = (0, _useToggle.default)(isEditMode),
    [isSearchInput, _toggleSearchInput, _setIsSearchInput] = (0, _useToggle.default)(),
    [watchList, setWatchList, isShowComp, showComp, hideComp, _hKeyDown, _refFirstItem] = (0, _useBrowser.default)(isShow, _Handlers.getWatchList),
    [_hFocusIn, _focusPrevMenuElement] = (0, _useRecentFocusedElement.default)()
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
      if (!_focusPrevMenuElement()) {
        (0, _uiApi.focusRefElement)(_refFirstItem);
      }
    }
  });
  useWatchList(watchList => {
    if (watchList) {
      (0, _uiApi.setRefValue)(_refIsShouldUpdateFind, true);
      setWatchList(watchList);
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
    onKeyDown: _hKeyDown,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(CaptionRow, {
      style: _styleCaption,
      caption: caption,
      onClose: _handlerHide,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ButtonSave, {
        className: CL_BT_CAPTION
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
      onFocusIn: _hFocusIn,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchGroups.default, {
        refFirstItem: _refFirstItem,
        isModeEdit: isModeEdit,
        groups: groups
      })
    })]
  });
};
var _default = exports.default = WatchBrowser;
//# sourceMappingURL=WatchBrowser.js.map