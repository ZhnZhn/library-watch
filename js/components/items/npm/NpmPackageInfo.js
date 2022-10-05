"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../../uiApi");

var _useButtonLoad3 = _interopRequireDefault(require("./useButtonLoad"));

var _loadNpms = _interopRequireDefault(require("./loadNpms"));

var _loadBundle = _interopRequireDefault(require("./loadBundle"));

var _CL = _interopRequireDefault(require("../../styles/CL"));

var _A = _interopRequireDefault(require("../../zhn-atoms/A"));

var _PackageDetails = _interopRequireDefault(require("./PackageDetails"));

var _BundleInfo = _interopRequireDefault(require("./BundleInfo"));

var _jsxRuntime = require("react/jsx-runtime");

var BASE_NODEICO = "https://nodei.co/npm/",
    SUFFIX_NODEICO = ".png?downloads=true&downloadRank=true&stars=true",
    S_ML_8 = {
  marginLeft: 8
},
    S_ML_16 = {
  marginLeft: 16
},
    S_MB_8 = {
  marginBottom: 8
},
    S_SH_LINK_IMAGE = {
  margin: '8px 0'
},
    S_BTN_DOWN_UP = {
  height: 32,
  marginLeft: 16,
  marginTop: 4,
  marginBottom: 4,
  padding: '2px 0'
};

var NpmPackageInfo = function NpmPackageInfo(_ref) {
  var isButtons = _ref.isButtons,
      packageName = _ref.packageName,
      packageLink = _ref.packageLink;

  var _useState = (0, _uiApi.useState)({
    isLoadNodeIco: false,
    isShowNodeIco: false
  }),
      _useState$ = _useState[0],
      isLoadNodeIco = _useState$.isLoadNodeIco,
      isShowNodeIco = _useState$.isShowNodeIco,
      setNodeIco = _useState[1],
      _useButtonLoad = (0, _useButtonLoad3["default"])(packageName, _loadNpms["default"]),
      npmsJson = _useButtonLoad[0],
      isLoadingNpms = _useButtonLoad[1],
      isShowNmps = _useButtonLoad[2],
      _hClickNpms = _useButtonLoad[3],
      _useButtonLoad2 = (0, _useButtonLoad3["default"])(packageName, _loadBundle["default"]),
      bundleJson = _useButtonLoad2[0],
      isLoadingBundle = _useButtonLoad2[1],
      isShowBundle = _useButtonLoad2[2],
      _hClickBundle = _useButtonLoad2[3],
      _hClickNodeIco = (0, _uiApi.useCallback)(function () {
    setNodeIco(function (prevState) {
      return {
        isLoadNodeIco: true,
        isShowNodeIco: !prevState.isShowNodeIco
      };
    });
  }, []);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
      isShow: isButtons,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S_ML_16,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].Link, {
          className: _CL["default"].SOURCE_LINK,
          href: packageLink,
          children: "NPM Link"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonDownUp, {
          style: S_BTN_DOWN_UP,
          isUp: isShowNodeIco,
          caption: "NodeICO",
          title: "Package badge from Nodei.co",
          onClick: _hClickNodeIco
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonDownUp, {
          style: S_BTN_DOWN_UP,
          isUp: isShowNmps,
          isLoading: isLoadingNpms,
          caption: "NPMS.IO",
          title: "Click to load package info from npms.io",
          onClick: _hClickNpms
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonDownUp, {
          style: S_BTN_DOWN_UP,
          isUp: isShowBundle,
          isLoading: isLoadingBundle,
          caption: "Bundlephobia.com",
          title: "Click to load package info from bundlephobia.com",
          onClick: _hClickBundle
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_ML_8,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
        isShow: isShowNodeIco,
        style: S_SH_LINK_IMAGE,
        children: isLoadNodeIco && /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].LinkImg, {
          href: packageLink,
          imgClass: "node-ico",
          imgSrc: "" + BASE_NODEICO + packageName + SUFFIX_NODEICO
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
        isShow: isShowNmps,
        style: S_MB_8,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PackageDetails["default"], {
          json: npmsJson
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
        isShow: isShowBundle,
        style: S_MB_8,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BundleInfo["default"], {
          json: bundleJson
        })
      })]
    })]
  });
};

var _default = NpmPackageInfo;
exports["default"] = _default;
//# sourceMappingURL=NpmPackageInfo.js.map