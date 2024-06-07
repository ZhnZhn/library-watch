"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _useButtonLoad = _interopRequireDefault(require("./useButtonLoad"));
var _loadNpms = _interopRequireDefault(require("./loadNpms"));
var _loadBundle = _interopRequireDefault(require("./loadBundle"));
var _CL = require("../../styles/CL");
var _Link = _interopRequireDefault(require("../../zhn/Link"));
var _LinkImg = _interopRequireDefault(require("../../zhn/LinkImg"));
var _ButtonDownUp = _interopRequireDefault(require("../../zhn/ButtonDownUp"));
var _ShowHide = _interopRequireDefault(require("../../zhn/ShowHide"));
var _PackageDetails = _interopRequireDefault(require("./PackageDetails"));
var _BundleInfo = _interopRequireDefault(require("./BundleInfo"));
var _jsxRuntime = require("react/jsx-runtime");
const BASE_NODEICO = "https://nodei.co/npm/",
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
const NpmPackageInfo = _ref => {
  let {
    isButtons,
    packageName,
    packageLink
  } = _ref;
  const [{
      isLoadNodeIco,
      isShowNodeIco
    }, setNodeIco] = (0, _uiApi.useState)({
      isLoadNodeIco: false,
      isShowNodeIco: false
    }),
    [npmsJson, isLoadingNpms, isShowNmps, _hClickNpms] = (0, _useButtonLoad.default)(packageName, _loadNpms.default),
    [bundleJson, isLoadingBundle, isShowBundle, _hClickBundle] = (0, _useButtonLoad.default)(packageName, _loadBundle.default),
    _hClickNodeIco = (0, _uiApi.useCallback)(() => {
      setNodeIco(prevState => ({
        isLoadNodeIco: true,
        isShowNodeIco: !prevState.isShowNodeIco
      }));
    }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide.default, {
      isShow: isButtons,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S_ML_16,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
          className: _CL.CL_SOURCE_LINK,
          href: packageLink,
          children: "NPM Link"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonDownUp.default, {
          style: S_BTN_DOWN_UP,
          isUp: isShowNodeIco,
          caption: "NodeICO",
          title: "Package badge from Nodei.co",
          onClick: _hClickNodeIco
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonDownUp.default, {
          style: S_BTN_DOWN_UP,
          isUp: isShowNmps,
          isLoading: isLoadingNpms,
          caption: "NPMS.IO",
          title: "Click to load package info from npms.io",
          onClick: _hClickNpms
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonDownUp.default, {
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
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide.default, {
        isShow: isShowNodeIco,
        style: S_SH_LINK_IMAGE,
        children: isLoadNodeIco && /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkImg.default, {
          href: packageLink,
          imgClass: "node-ico",
          imgSrc: "" + BASE_NODEICO + packageName + SUFFIX_NODEICO
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide.default, {
        isShow: isShowNmps,
        style: S_MB_8,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PackageDetails.default, {
          json: npmsJson
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide.default, {
        isShow: isShowBundle,
        style: S_MB_8,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BundleInfo.default, {
          json: bundleJson
        })
      })]
    })]
  });
};
var _default = exports.default = NpmPackageInfo;
//# sourceMappingURL=NpmPackageInfo.js.map