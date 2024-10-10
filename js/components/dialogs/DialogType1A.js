"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memoFn = require("../hoc/memoFn");
var _useDialog = _interopRequireDefault(require("./useDialog"));
var _useSelectItem = _interopRequireDefault(require("./useSelectItem"));
var _useDialogButtons = _interopRequireDefault(require("./useDialogButtons"));
var _Dialog = _interopRequireDefault(require("./Dialog"));
var _DialogCell = _interopRequireDefault(require("./DialogCell"));
var _jsxRuntime = require("react/jsx-runtime");
const MARKET_SHARES = [{
    caption: "OS: Desktop, Mobile, Tablet, Console",
    value: "os"
  }, {
    caption: "OS: Desktop",
    value: "os-desktop"
  }, {
    caption: "Windows: Desktop",
    value: "win-desktop"
  }, {
    caption: "macOS: Desktop",
    value: "mac-desktop"
  }, {
    caption: "Android: Mobile, Tablet",
    value: "android-mobile"
  }, {
    caption: "IOS: Mobile, Tablet",
    value: "ios-mobile"
  }, {
    caption: "Browser: All Platforms",
    value: "browser"
  }, {
    caption: "Social Media Stats",
    value: "social-media"
  }],
  REGIONS = [{
    caption: "Worldwide",
    value: "worlwide",
    v2: "ww"
  }, {
    caption: "Africa",
    value: "africa",
    v2: "af"
  }, {
    caption: "Asia",
    value: "asia",
    v2: "as"
  }, {
    caption: "Antarctica",
    value: "antarctica",
    v2: "an"
  }, {
    caption: "Australia",
    value: "australia",
    v2: "au"
  }, {
    caption: "Europe",
    value: "europe",
    v2: "eu"
  }, {
    caption: "North America",
    value: "north-america",
    v2: "na"
  }, {
    caption: "South America",
    value: "south-america",
    v2: "sa"
  }, {
    caption: "Oceania",
    value: "oceania",
    v2: "oc"
  }],
  _getItemCaption = item => item.caption,
  DF_MARKET_SHARE = MARKET_SHARES[0],
  ITEM_PLACEHOLDER = _getItemCaption(DF_MARKET_SHARE),
  DF_REGION = REGIONS[0],
  REGION_PLACEHOLDER = _getItemCaption(DF_REGION);
const DialogType3 = (0, _memoFn.memoIsShow)(_ref => {
  let {
    isShow,
    caption,
    requestType,
    onShow,
    onLoad,
    onClose
  } = _ref;
  const [MENU_MODEL, TOOLBAR_BUTTONS, isToolbar, isShowLabels] = (0, _useDialog.default)(),
    [_refItem, _hSelectItem] = (0, _useSelectItem.default)(DF_MARKET_SHARE),
    [_refRegion, _hSelectRegion] = (0, _useSelectItem.default)(DF_REGION),
    [validationMessages, COMMAND_BUTTONS, hClose] = (0, _useDialogButtons.default)((setValidationMessages, clearValidationMessages) => {
      const {
        value,
        caption
      } = (0, _uiApi.getRefValue)(_refItem) || DF_MARKET_SHARE;
      onLoad({
        requestType,
        value,
        caption,
        region: (0, _uiApi.getRefValue)(_refRegion) || DF_REGION
      });
    }, onClose);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog.default, {
    isShow: isShow,
    isToolbar: isToolbar,
    caption: caption,
    menuModel: MENU_MODEL,
    toolbarButtons: TOOLBAR_BUTTONS,
    commandButtons: COMMAND_BUTTONS,
    validationMessages: validationMessages,
    onShow: onShow,
    onClose: hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.RowInputSelect, {
      isShowLabel: isShowLabels,
      caption: "Item",
      placeholder: ITEM_PLACEHOLDER,
      options: MARKET_SHARES,
      onSelect: _hSelectItem
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.RowInputSelect, {
      isShowLabel: isShowLabels,
      caption: "Region",
      placeholder: REGION_PLACEHOLDER,
      options: REGIONS,
      onSelect: _hSelectRegion
    })]
  });
});
var _default = exports.default = DialogType3;
//# sourceMappingURL=DialogType1A.js.map